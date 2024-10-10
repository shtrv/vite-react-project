import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Card from "./components/card/card";
import dataA from "./dataA.json";
import TabsSection from "./components/TabsSection";
import MainSection from "./components/MainSection";

export default function App() {
  //const [count, setCount] = useState(0)
  const [tabContent, setTabContent] = useState(null);
  const [tab, setTab] = useState("main");

  // function handleClick(type) {
  //   setTabContent(type);
  //   console.log("clicked", type);
  // }

  return (
    <>
      <Header></Header>
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)}/>

        {tab === "main" && <MainSection></MainSection>}

        {tab === "description" && (
          <ul style = {{ margin: '1rem'}}>
            {dataA.map((data) => (
              <Card {...data} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
