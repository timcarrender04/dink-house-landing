import NextHead from "next/head";

import GettingInWalkthrough from "@/components/tutorial/getting-in-walkthrough";
import DefaultLayout from "@/layouts/default";

export default function TestAppPage() {
  return (
    <DefaultLayout title="App walkthrough - The Dink House">
      <NextHead>
        <meta content="noindex, nofollow" name="robots" />
      </NextHead>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-4xl font-bold uppercase tracking-wider">
          App walkthrough
        </h1>
        <p className="mt-4 max-w-2xl text-gray-400">
          Getting in, home after you sign in, checking in at the desk, and the
          door.
        </p>
        <div className="mt-8">
          <GettingInWalkthrough />
        </div>
      </section>
    </DefaultLayout>
  );
}
