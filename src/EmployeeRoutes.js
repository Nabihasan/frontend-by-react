import React from "react";
import { Route,Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Hello from "./components/EmployeeComponent/Hello";
import EmployeeHeader from "./components/EmployeeComponent/EmployeeHeader";

import CreateTicket from "./components/EmployeeComponent/CreateTicket";
import { Active, Dashboard, Inactive} from "./components/EmployeeComponent/Dashboard";
import UpdateTicket from "./components/EmployeeComponent/UpdateTicket";
import ViewRecords from "./components/EmployeeComponent/ViewRecords";


const EmployeeRoutes = () => {
    return (<>
      <EmployeeHeader/>
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/create" element={<CreateTicket />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/active" element={<Active/>} />
		<Route path="/dashboard/inactive" element={<Inactive/>} />
    <Route path="/ticket/:ticketId" element={<UpdateTicket/>} />
    <Route path="/tickets/:ticketId" element={<ViewRecords/>} />

        <Route exact path="/*" element={
                <div className="mt-5">
                  <h3>Page Not Found</h3>
                </div>
              }
            />
      </Routes>
       <Footer />
       </>
    );
  };

  export default EmployeeRoutes;