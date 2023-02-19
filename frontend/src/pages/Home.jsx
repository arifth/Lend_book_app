import React, { useState } from "react";
import NavBar from "../components/NavBar";
import CardSkeleteon from "../components/CardSkeleteon";
import CardList from "../components/CardList";

export default function Home() {
  const [isFetched, setFetched] = useState(false);
  return (
    <>
      <NavBar />
      {isFetched ? <CardSkeleteon /> : <CardList />}
    </>
  );
}
