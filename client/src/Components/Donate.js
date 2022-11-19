import React from "react";
import Donateform from "./forms/Donateform";
import Navbar from "./Navbar";

export default function Donate() {
  return (
    <div>
      <Navbar />
      <div class="container">
        <Donateform />
      </div>
    </div>
  );
}
