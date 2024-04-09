import React, { useState } from "react";
import Front from "./components/Front";
import "./App.css";
import Data from "./components/Data";
export default function App() {
  const [habitList, setHabitList] = useState([]);
  function addToHabitlist(task, place, purpose, date) {
    const list = { task, place, purpose, date };
    setHabitList([...habitList, list]);
  }
  function removeFromHabitList(index) {
    const newlist = [...habitList];
    newlist.splice(index, 1);
    setHabitList(newlist);
  }
  return (
    <div className="habitlist">
      <Front addToHabitlist={addToHabitlist} />
      <Data habitList={habitList} removeFromHabitList={removeFromHabitList} />
    </div>
  );
}
