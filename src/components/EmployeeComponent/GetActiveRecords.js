import React ,{useEffect, useLayoutEffect, useState}from 'react'

import { Link } from 'react-router-dom'
import TicketServicee from '../../services/TicketServicee'

const GetActiveRecords = () => {
    const[tickets,setTickets]=useState([])
   useEffect(() =>{
    TicketServicee.getAllTicketss().then((response)=>{
        setTickets(response.data)
        console.log(response.data);
    }).catch(error=>{console.log(error)});

   },[])
  return (
    <div className="container">
        <h2 className='text-center py-3'>Inactive Tickets</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>ticketid</th>
                <th>employeeid</th>
                <th>employeeName</th>
                <th>remarks</th>
               <th>status</th>
                <th>ticketcate</th>
               <th>ticketsubcate</th>
                </thead>
                <tbody>
                    {tickets.map
                    (ticket=>
                    <tr key={ticket.id}>
                        <td>{ticket.ticketId}</td>
                        <td>{ticket.empId}</td>
                        <td>{ticket.empName}</td>
                        <td>{ticket.remark}</td>
                        <td>{ticket.status}</td>
                        <td>{ticket.ticketCate}</td>
                        <td>{ticket.ticketSubCate}</td>
                        <td><Link className='btn btn-info' to={"/tickets/"+ticket.ticketId} >view</Link></td>
                    </tr>)}
                </tbody>
        </table>
      
    </div>
  )
}

export default GetActiveRecords