import React, { useState, useEffect } from "react";
import ticketService from "../../../services/TicketService";
import { useParams } from "react-router-dom";

const TicketDetails = () => {
  const [tickets, setTickets] = useState([]);
  const [updatedStatus, setUpdatedStatus] = useState('');
  const param = useParams();

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const response = await ticketService.getTicketById(param.ticketId);
    setTickets(response.data);
    setUpdatedStatus(response.data[0].status);
  }

  const handleStatusChange = (event) => {
    setUpdatedStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateStatus = async ()=>{
      await ticketService.updateTicketStatus(param.ticketId,updatedStatus);
    }
    try {
      updateStatus();
      alert("Successfully Updated");
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  return (
    <div className="container row justify-content-center">
    <div className="card my-2 mt-5 col-8">
      <div className="card-header bg-primary text-white">
        <center><h3 className="card-title">Ticket Details</h3></center>
      </div>
      {tickets.map((ticket) => (
        <div className="card-body" key={ticket.ticketId}>
          <form onSubmit={handleSubmit}>
            <fieldset disabled>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Id:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.ticketId} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Category:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.category.categoryName} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Sub-Category:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.subCategory.subCategoryName} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Start Date:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.startDate} />
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="disabledTextInput" className="col-sm-2 col-form-label">End Date:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.endDate} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Priority:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.priority} />
                </div>
              </div>
            </fieldset>
            <div className="row mb-3">
              <label htmlFor="status" className="col-sm-2 col-form-label">Status:</label>
              <div className="col-sm-10">
                <select
                  id="status"
                  className="form-select"
                  value={updatedStatus}
                  onChange={handleStatusChange}
                >
                  <option value="Open">Open</option>
                  <option value="In-Progress">In-Progress</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </div>
          </form>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TicketDetails;
