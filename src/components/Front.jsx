import React ,{useState} from 'react'

export default function Front({addToHabitlist}) {
    const[task,setTask]=useState("");
    const[place,setPlace]=useState("");
    const[purpose,setPurpose]=useState("");
    const[date,setDate]=useState("");
    function handleTask(e){
        // e.preventDefault();
        setTask(e.target.value);
    }
    function handlePlace(e){
        // e.preventDefault();
        setPlace(e.target.value);
    }
    function handlePurpose(e){
        // e.preventDefault();
        setPurpose(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        addToHabitlist(task , place , purpose , date);
        setPlace("");
        setPurpose("");
        setTask("");
    }
    function handleDate(e){
        // e.preventDefault();
        setDate(e.target.value);
    }
  return (
    <div className='mains'>
    <form className='habit' onSubmit={handleSubmit}>
      <label htmlFor='task'></label>
      <input className='lol' type='text' id='task' value={task} onChange={handleTask} placeholder='What To Do ?'/>

      <label htmlFor='place'></label>
      <input className='lol' type='text' id='place' value={place} onChange={handlePlace} placeholder='Where To Do ?'/><br/>

      <label htmlFor='purpose'></label>
      <input className='lol' type='text' id='purpose' value={purpose} onChange={handlePurpose} placeholder='Why To Do ?'/>

      <label for="date"></label>
      <input className='lol' type="date" id="date" value={date} onChange={handleDate} ></input>
      <button className='btn'>Save</button>
    </form>
    
    </div>
  )
}
