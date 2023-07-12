import { Link,unstable_HistoryRouter,useParams } from 'react-router-dom/dist' 
  import React, { useEffect, useState } from 'react'
import TicketServicee from '../../services/TicketServicee'

  
  const AddTicket = () => {
    const[ticketCate,setTicketCate]=useState('')
    const[ticketSubCate,setTicketSubCate]=useState('')
    const[ticketDesc,setTicketDesc]=useState('')
    const[startDate,setStartDate]=useState('')
    const[endDate,setEndDate]=useState('')
    

    const saveTicket=(e)=>{
     e.preventDefault();
        const ticket={ticketCate,ticketSubCate,ticketDesc,startDate,endDate}
       TicketServicee.createTicket(ticket).then((response)=>{
        console.log(response.data)
       }).catch(error=>{
        console.log(error)
       })


        
    } 
   


    return (
      <div > 
        <br/><br/>
       <div className= "card mt-8 my-5">
      
            <div className="card-header bg-primary text-white">
            <center><h3 className="card-title">Ticket Details</h3></center>
            </div>
                <div className="card-body ">
                    <form>
                        <div className="row mb-3">
                            <label className="col-sm-20 col-form-label" > category:</label>
                            <div className="col-sm-20">
                            <input type="text" 
                            placeholder= "category"
                            name='ticketCate'
                            className="form-control"
                            value={ticketCate}
                             onChange={(e)=>setTicketCate(e.target.value)}></input>
                            </div>
                            </div>


                            <div className='form-group-nb-2'>
                            <label className='form-label'> Subcategory:</label>
                            <input type='text' 
                            placeholder=' subcategory' 
                            name='ticketSubCate'
                            className='form-control'
                            value={ticketSubCate}
                             onChange={(e)=>setTicketSubCate(e.target.value)}></input>
                            </div>


                            <div className='form-group-nb-2'>
                            <label className='form-label'>Description</label>
                            <input type='text' 
                            placeholder='explain ' 
                            name='ticketDesc'
                            className='form-control'
                            value={ticketDesc}
                             onChange={(e)=>setTicketDesc(e.target.value)}></input>
                            </div>


                            <div className='form-group-nb-2'>
                            <label className='form-label'> StartDate:</label>
                            <input type='text'
                            placeholder=' yyyy-mm-dd' 
                            name='startDate'
                            className='form-control'
                            value={startDate}
                             onChange={(e)=>setStartDate(e.target.value)}></input>
                            </div>


                            <div className='form-group-nb-2'>
                            <label className='form-label'> Enddate:</label>
                            <input type='text' 
                            placeholder=' yyyy-mm-dd' 
                            name='endDate'
                            className='form-control'
                            value={endDate}
                             onChange={(e)=>setEndDate(e.target.value)}></input>
                            </div>
                           

                           <button className="btn btn-primary mt-3 " onClick = {(e)=>saveTicket(e)}>generate</button>



                    </form>
                </div>
            </div>
        </div>
    
    
    )
  }
  
  export default AddTicket
  