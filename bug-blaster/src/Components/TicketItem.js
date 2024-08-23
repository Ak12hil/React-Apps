import React from 'react'

export default function TicketItem({ticket,dispatch}) {
    const priorityClass={
        1:"priority-low",
        2:"priority-medium",
        3:"priority-high"
    }
    const deleteTicket=()=>{
        dispatch({
            type:"DELETE_TICKET",
            payload:{id:ticket.id}
        })
    };
    const editTicket=()=>{
        dispatch({
            type:"SET_EDITING_TICKET",
            payload:ticket
        })
    };
  return (
   <div className="ticket-item">
    <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>
    <h3> {ticket?.title} </h3>
    <p> {ticket?.description} </p>

    <button className='button' onClick={deleteTicket}>
        DELETE
    </button>

    <button className='button' onClick={editTicket}>
       EDIT
    </button>
   </div>
  )
}
