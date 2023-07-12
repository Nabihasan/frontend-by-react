import axios from "axios";

const TICKET_BASE_URL = 'http://localhost:8080/ticket';

const ticketService = {
  getTickets() {
    return axios.get(TICKET_BASE_URL);
  },

  getTicketById(ticketId) {
    return axios.get(`${TICKET_BASE_URL}/${ticketId}`);
  },

  filterTickets(stringParams){
    return axios.get(`${TICKET_BASE_URL}?${stringParams}`);
  },

  updateTicketStatus(ticketId,updatedStatus){
    return axios.put(`${TICKET_BASE_URL}/${ticketId}`, updatedStatus, {
      headers: { 'Content-Type': 'text/plain' }
    });
  }
};

export default ticketService;