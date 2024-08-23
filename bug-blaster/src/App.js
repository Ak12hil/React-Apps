import logo from './logo.svg';
import './App.css';
import './styles.css';
import TicketForm from './Components/TicketForm';
import { useReducer } from 'react';
import ticketReducer from './Reducers/ticketReducer';
import TicketList from './Components/TicketList';
import { sortTickets } from './utilities/sortingUtilities';

function App() {

  const initialState={
    tickets:[],
    editingTicket:null,
    sortingPref:"High To Low"
  }

  const [state,dispatch]=useReducer(ticketReducer,initialState);
  const sortedTickets=sortTickets(state.tickets,state.sortingPref);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket}/>

        {state.tickets.length>0 && (
           <div className="results">
            <h2>All Tickets</h2>
            <select  value={state.sortingPref} onChange={(event)=>dispatch({type:"SET_SORTING",payload:event.target.value})}>
              <option value="High To Low"> High To Low </option>
              <option value="Low To High"> Low To High</option>
            </select>
            <TicketList tickets={sortedTickets} dispatch={dispatch}/>
           </div>
        )}
      </div>
    </div>
  );
}

export default App;
