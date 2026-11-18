import { NextResponse, type NextRequest } from "next/server";

import { getBackendUrl } from "../../../lib/backend";
import { logger } from "../../../lib/logger";

export const dynamic = "force-dynamic";

const RATE_LIMIT_PER_MINUTE = parseInt(
  process.env.RATE_LIMIT_PER_MINUTE || "5",
  10,
);
const RATE_LIMIT_PER_HOUR = parseInt(
  process.env.RATE_LIMIT_PER_HOUR || "50",
  10,
);

const rateLimitMap = new Map<string, { count: number; firstRequest: number }>();

function checkRateLimit(ip: string): { allowed: boolean; message?: string } {
  const now = Date.now();
  const minuteAgo = now - 60 * 1000;
  const hourAgo = now - 60 * 60 * 1000;

  for (const [key, value] of rateLimitMap.entries()) {
    if (value.firstRequest < hourAgo) rateLimitMap.delete(key);
  }

  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });

    return { allowed: true };
  }

  if (
    record.firstRequest > minuteAgo &&
    record.count >= RATE_LIMIT_PER_MINUTE
  ) {
    return {
      allowed: false,
      message: "Too many requests. Please wait a minute.",
    };
  }

  if (record.count >= RATE_LIMIT_PER_HOUR) {
    return {
      allowed: false,
      message: "Too many requests. Please try again later.",
    };
  }

  record.count++;

  return { allowed: true };
}

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");

  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";

  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: NextRequest) {
  const rateLimitCheck = checkRateLimit(getClientIp(req));

  if (!rateLimitCheck.allowed) {
    return NextResponse.json(
      { success: false, message: rateLimitCheck.message },
      { status: 429 },
    );
  }

  try {
    const body = (await req.json()) as Record<string, unknown>;

    if (body._honeypot) {
      return NextResponse.json(
        { success: false, message: "Invalid submission" },
        { status: 400 },
      );
    }

    const clientIp = getClientIp(req);
    const response = await fetch(`${getBackendUrl()}/api/military-pt`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...body,
        ip: clientIp !== "unknown" ? clientIp : undefined,
        userAgent: req.headers.get("user-agent"),
        referrer: req.headers.get("referer"),
      }),
      cache: "no-store",
    });
    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      logger.error("Military PT request:", result.message);

      return NextResponse.json(
        {
          success: false,
          message: result.message || "Failed to store the request",
        },
        { status: response.status || 500 },
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    logger.error("Military PT route error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "An error occurred while submitting your request. Please try again.",
      },
      { status: 500 },
    );
  }
}
