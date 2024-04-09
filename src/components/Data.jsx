import React from 'react';

export default function Data({ habitList , removeFromHabitList }) {
  let list = habitList.map((item, index) => (
    <li key={index}>{item.date}   {item.task}  {item.place} {item.purpose} <button className='but' onClick={() => removeFromHabitList(index)}>❌</button></li>
  ));

  return (
    <div>
      <h1>-: Tasks :-</h1>
      <ul className='li'>{list}</ul>
    </div>
  );
}
