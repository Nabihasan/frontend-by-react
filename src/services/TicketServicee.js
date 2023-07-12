import axios from "axios";

const TICKET_BASE_REST_API_URL="http://localhost:8080/api/v1/Ticketss";
class TicketServicee
{
    getAllTicketss(){
        return axios.get(TICKET_BASE_REST_API_URL)
    }

    createTicket(ticket){
        return axios.post(TICKET_BASE_REST_API_URL,ticket)
    }
}
export default new TicketServicee();