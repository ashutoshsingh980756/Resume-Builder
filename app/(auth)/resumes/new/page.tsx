"use client";

import { Suspense } from "react";
import PageWrapper from "./pageWrapper";

export default function NewResume() {
  function Loading() {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="p-6">
      <Suspense fallback={<Loading />}>
        <PageWrapper />
      </Suspense>
    </div>
  );
}
