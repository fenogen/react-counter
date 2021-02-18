import React from "react";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Section from "./components/Section/Section";

const App = () => {
  return (
    <>
      {/* <Header />
      <Main /> */}
      <Counter number="10" title="hello" />
    </>
  );
};

export default App;
