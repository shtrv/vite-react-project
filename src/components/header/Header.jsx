import { useState } from "react";
import "./Header.css";
import Butterfly from "/Butterfly.jpg";
import TabsSection from "../TabsSection";

export default function Header() {


  return (
    <header>
      <img src={Butterfly} className="logo Butterfly" alt="Butterfly" />
      <h3>shtrv</h3>
    </header>
  );
}
