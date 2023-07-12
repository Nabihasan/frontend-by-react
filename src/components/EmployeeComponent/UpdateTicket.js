import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { upload } from "@testing-library/user-event/dist/upload";
import ShowService from "../../services/ShowService";


const UpdateTicket = () => {
  const [ticket, setTicket] = useState([]);
  const [updatedStatus, setUpdatedStatus] = useState('');
  const param = useParams();

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const response = await ShowService.getTicketById(param.ticketId);
    setTicket(response.data);
    setUpdatedStatus(response.data?.status);
  }

  const handleStatusChange = (event) => {
    setUpdatedStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateStatus = async ()=>{
      await ShowService.updateTicketStatus(param.ticketId,updatedStatus);
    }
    try {
      updateStatus();
      alert("Successfully Updated");
    } catch (error) {
      alert("Something Went Wrong");
    }
  };

  console.log({ticket})

  return (
    <div className="card my-2">
      <div className="card-header bg-primary text-white">
        <center><h3 className="card-title">Ticket Details</h3></center>
      </div>
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
                <label className="col-sm-2 col-form-label">empId:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.empId} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">empName:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.empName} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Category:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.ticketCate} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Sub-Category:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.ticketSubCate} />
                </div>
              </div>
              <div className="row mb-3">
                <label className="col-sm-2 col-form-label">description:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.ticketDesc} />
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
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                  
                </select>
              </div>
            </div>
            <fieldset disabled>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">remark:</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" 
                  readOnly value={ticket.remark} />
                </div>
              </div></fieldset>
            <div className="row">
              <div className="col-sm-10 offset-sm-2">
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </div>
          </form>
        </div>
    </div>
  );
};

export default UpdateTicket
        


  