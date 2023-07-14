import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import EmployeeRoutes from "./EmployeeRoutes";
import Login from "./components/Login";
import LoginRoutes from "./LoginRoutes";

const App = () => {
  const [userRole, setUserRole] = useState();

  return (
    <div>
      <div className="container">
        <Routes>
        {/* <Route path="/*" element={<LoginRoutes />} /> */}
          <Route path="/" element={<Login setRole={setUserRole} />}/>
          
          {userRole === "ROLE_ADMIN" && (
            <Route path="/*" element={<AdminRoutes />} />
          )}
          {userRole === "ROLE_USER" && (
            <Route path="/*" element={<EmployeeRoutes/>} />
          )}
      
          <Route exact path="*" element={<Login setRole={setUserRole}/>}/>
        </Routes>
      </div>
    </div>
  );
}
export default App;
