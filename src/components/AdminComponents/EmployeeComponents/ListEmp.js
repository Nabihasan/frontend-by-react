import React, { useEffect, useState } from "react";
import SearchAdd from "./SearchAdd";
import EmpTable from "./EmpTable";
import TicketService from "../../../services/TicketService";

const ListEmp = () => {
//   const [empList, setEmpList] = useState([]);

//   useEffect(() => {
//     init();
//   }, []);
//   const init = () => {
//     EmpService.getAllEmp()
//       .then((res) => {
//         console.log(res?.data);
//         setEmpList(res?.data);
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   };

//   const clearSearch = () => {
//     init();
//   };

//   const update = (updatedEmp) => {
//     setEmpList(updatedEmp);
//   };

const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const response = await TicketService.getTickets();
    setTickets(response.data);
  };

  const updateTickets = (updatedTickets) => {
    // console.log(updatedTickets);
    setTickets(updatedTickets);
  };

  const clearSearch = () => {
    fetchTickets();
  };


  return(
    <div className="container mt-5 mb-5">
    <h2 className="text-center ">Employees</h2>
    <SearchAdd updateTickets={updateTickets} 
    clearSearch={clearSearch} />
    <EmpTable tickets={tickets} />
  </div>
  );
};
export default ListEmp;
