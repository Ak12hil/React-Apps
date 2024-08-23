export const sortTickets=(tickets,preference)=>{
    switch(preference){
        case "Low To High":
            return [...tickets].sort((a,b)=>a.priority.localeCompare(b.priority));
        case "High To Low":
            return [...tickets].sort((a,b)=>b.priority.localeCompare(a.priority));
        default:
            return tickets;
    }
}