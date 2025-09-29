"use client";

import { Suspense } from "react";
import PageWrapper from "./pageWrapper";
import Loading from "./loading";

export default function NewResume() {

  return (
    <div className="p-6">
      <Suspense fallback={<Loading />}>
        <PageWrapper />
      </Suspense>
    </div>
  );
}
