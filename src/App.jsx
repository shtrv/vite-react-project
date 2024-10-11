import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import dataA from "./dataA.json";
import TabsSection from "./components/TabsSection";
import MainSection from "./components/MainSection";

export default function App() {
  const [tab, setTab] = useState("main");

  return (
    <>
      <Header></Header>
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "main" && <MainSection></MainSection>}

        {tab === "description" && (
          <ul style={{ margin: "1rem" }}>
            {dataA.map((data) => (
              <Card {...data} key={{ ...data }.title} />
            ))}
          </ul>
        )}

        {tab === "contacts" && <a>contacts filler</a>}
      </main>
    </>
  );
}
