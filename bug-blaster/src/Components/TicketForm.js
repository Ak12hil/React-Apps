import React, { useState,useEffect} from "react";

export default function TicketForm({dispatch,editingTicket}) {
  //Title,description,priority
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  useEffect(()=>{
    if(editingTicket){
        setTitle(editingTicket.title);
        setDescription(editingTicket.description);
        setPriority(editingTicket.priority);
    }else{
        clearForm();
    }
  },[editingTicket]);

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    //cleared when clicked on submit
    setTitle("");
    setDescription("");
    setPriority("1");
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //to avoid reload of the page
    const ticketData={
        id: editingTicket? editingTicket.id:new Date().toISOString(),
        title:title,
        description:description,
        priority:priority
    };

    // console.log("title:",title);
    // console.log("ticket data: ", ticketData);
    dispatch({
        type:editingTicket?"UPDATE_TICKET":"ADD_TICKET",
        payload:ticketData
    }); 
    clearForm();
  };

  const handleCancelEdit=()=>{
    clearForm();
    dispatch({
        type:"CLEAR_EDITING_TICKET"
    }); 
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="ticket-form">
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            className="form-input"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            type="text"
            value={description}
            className="form-input"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <fieldset className="priority-fieldset">
          <legend>Priority</legend>

          {Object.entries(priorityLabels).map(([value, label]) => {
            return (
              <>
                <input
                  type="radio"
                  value={value}
                  checked={priority == value}
                  className="priority-input"
                  onChange={(event) => setPriority(event.target.value)}
                />
                <label key={value} className="priority-label">
                  {label}
                </label>
              </>
            );
          })}
        </fieldset>

        <button type="submit" className="button">
          Submit
        </button>

        {editingTicket && (<button onClick={handleCancelEdit} className="button">
          Cancel Edit
        </button>)}
      </form>
    </>
  );
}
