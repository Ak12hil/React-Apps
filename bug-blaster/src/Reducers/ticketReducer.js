export default function ticketReducer(state,action){
    //state -- contains old tickets
    //action - type like add, del or upd and payload 

    switch (action.type) {
      case "ADD_TICKET":
        return {
          ...state,
          tickets: [...state.tickets, action.payload],
          editingTicket:null
        };
      case "UPDATE_TICKET":
        return {
          ...state,
          tickets: state.tickets.map((ticket) => {
            return ticket.id === action.payload.id ? action.payload : ticket;
          }),
          editingTicket:null
        };
      case "DELETE_TICKET":
        //delete and reset when we are trying to delete the editing ticket only
        if(state.editingTicket && state.editingTicket.id===action.payload.id){
            return {
                ...state,
                tickets: state.tickets.filter((ticket) => {
                  return ticket.id !== action.payload.id;
                }),
                editingTicket:null
              };
        }else{
            return {
                ...state,
                tickets: state.tickets.filter((ticket) => {
                  return ticket.id !== action.payload.id;
                })
            };
        }
   

      case "SET_EDITING_TICKET":
        return {
          ...state,
          editingTicket: action.payload,
        };

      case "CLEAR_EDITING_TICKET":
        return {
          ...state,
          editingTicket: null,
        };

      case "SET_SORTING":
        return {
          ...state,
          sortingPref: action.payload,
        };
      default:
        return state;
    }
}