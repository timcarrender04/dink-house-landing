import type { GetServerSideProps } from "next";

import NextHead from "next/head";

import { JoinForm } from "@/components/ambassadors/join-form";
import {
  AmbassadorCard,
  AmbassadorSection,
} from "@/components/ambassadors/section";
import DefaultLayout from "@/layouts/default";
import { backendJson } from "@/lib/ambassadors";

type CodeCheck = {
  valid: boolean;
  code?: string;
  ambassadorFirstName?: string;
};

type Props = { initialCode: string; invitedBy: string | null };

// Ambassadors share /join?ref=DINK-XXXX. The code rides along with the sign-up so
// they get credit.
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const ref = typeof query.ref === "string" ? query.ref.slice(0, 40) : "";
  const check = ref
    ? await backendJson<CodeCheck>(
        `/api/ambassadors/code/${encodeURIComponent(ref)}`,
      )
    : null;

  return {
    props: {
      initialCode: check?.valid ? (check.code ?? ref) : ref,
      invitedBy: check?.valid ? (check.ambassadorFirstName ?? null) : null,
    },
  };
};

export default function JoinPage({ initialCode, invitedBy }: Props) {
  return (
    <DefaultLayout>
      <NextHead>
        <title>Join the waitlist · The Dink House</title>
        <meta
          content="Get on The Dink House list in Nolanville, TX: first word on opening, founding memberships and pre-sale."
          name="description"
        />
      </NextHead>
      <AmbassadorSection
        eyebrow={invitedBy ? `Invited by ${invitedBy}` : "Nolanville, Texas"}
        intro={
          <p>
            Indoor pickleball for every level. Join the list for first word on
            opening day, founding memberships and pre-sale pricing.
          </p>
        }
        title="Join The Dink House"
      >
        <AmbassadorCard>
          <JoinForm initialCode={initialCode} />
        </AmbassadorCard>
        <AmbassadorCard>
          <h2 className="text-athletic text-2xl text-dink-lime">
            New to pickleball?
          </h2>
          <p className="mt-2 text-white/70">
            Perfect. Our ambassadors run beginner sessions and will show you the
            paddle stack, scoring and everything nobody tells beginners. Look
            for the lime AMB badge.
          </p>
        </AmbassadorCard>
      </AmbassadorSection>
    </DefaultLayout>
  );
}
