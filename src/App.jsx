import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Card from "./components/card/card";
import dataA from "./dataA.json";

export default function App() {
  //const [count, setCount] = useState(0)
  const [tabContent, setTabContent] = useState(null);

  function handleClick(type) {
    setTabContent(type);
    console.log("clicked", type);
  }

  return (
    <>
      <Header></Header>
      <main>
        <Button
          isActive={tabContent === "description"}
          onClick={() => handleClick("description")}
        >
          Описание
        </Button>
        <Button
          isActive={tabContent === "stats"}
          onClick={() => handleClick("stats")}
        >
          Статистика
        </Button>
        <Button
          isActive={tabContent === "adbout"}
          onClick={() => handleClick("adbout")}
        >
          Обо мне
        </Button>
        {tabContent ? <p>{tabContent}</p> : <p>nothing here</p>}
        <ul>
          {dataA.map((data) => (
            <Card {...data} />
          ))}
        </ul>
      </main>
    </>
  );
}
