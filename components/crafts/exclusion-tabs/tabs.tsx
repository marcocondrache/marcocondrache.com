"use client";

import { useState } from "react";

const tabs = ["Profile", "Biling", "Settings"] as const;

export default function ExclusionTabs() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 flex flex-row gap-4 bg-orange-600 px-4 py-1">
        {tabs.map((tab, index) => (
          <div key={`${tab}-${index}`}>{tab}</div>
        ))}
      </div>
    </div>
  );
}
