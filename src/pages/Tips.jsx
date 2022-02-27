import React from "react";

import Header from "../partials/Header";
import HeroTips from "../partials/HeroTips";

function Tips() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}hi
        <HeroTips />
      </main>
    </div>
  );
}

export default Tips;
