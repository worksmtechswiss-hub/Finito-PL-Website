"use client";

import dynamic from "next/dynamic";

const CookieBanner = dynamic(
  () => import("./CookieBanner").then((m) => ({ default: m.CookieBanner })),
  { ssr: false }
);

const DeferredAnalytics = dynamic(
  () => import("./DeferredAnalytics").then((m) => ({ default: m.DeferredAnalytics })),
  { ssr: false }
);

export function ClientShell() {
  return (
    <>
      <CookieBanner />
      <DeferredAnalytics gaId="G-N5TF8S3EFG" />
    </>
  );
}
