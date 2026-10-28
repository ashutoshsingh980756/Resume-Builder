"use client";

import { Suspense } from "react";
import PageWrapper from "./pageWrapper";
import Loading from "./loading";

export default function NewResume() {

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <Suspense fallback={<Loading />}>
        <PageWrapper />
      </Suspense>
    </div>
  );
}
