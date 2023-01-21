import React, { useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import { STUDENTS } from "./studentsList";
import "h8k-components";

const title = "Hacker Dormitory";
function App() {
  const [error, setError] = useState(null);
  const [list, setList] = useState([]);

  const onSetError = (text) => {
    setError(text);
  };

  const onSetList = (item = {}) => {
    const __list = [...list];

    if (__list.indexOf(item) === 0) return;

    __list.push(item);

    setList(__list);
    setError(null);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search data={STUDENTS} onError={onSetError} onSetList={onSetList} />
        <Error text={error} />
        <ResidentsList list={list} />
      </div>
    </div>
  );
}

export default App;
