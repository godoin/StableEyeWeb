import React from "react";
import Item from "@/components/user-components/classify-components/item";

export default function SVMDetails() {
  return (
    <div className="space-y-2">
      <section className="space-y-2">
        <header className="text-lg">Support Vector Machines</header>
        <article className="bg-zinc-300 text-zinc-900 rounded-lg p-4">
          <span className="font-semibold">Model Description</span>
          <p className="font-medium">
            Trained with a linear kernel, this SVM classifier achieved an
            accuracy of 98% on the training set and 95% on the test set.
          </p>
        </article>
      </section>
    </div>
  );
}
