import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';

const EmployeeHeader = () => {
  return (
    <div>
      <header>
        <nav className="fixed-top navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a className="navbar-brand me-5">HelpDesk System</a>
            <Link to="/hello" className="navbar-brand me-5">
              Home
            </Link>
            <Link to="/create" className="navbar-brand me-5">
              Raise Ticket
            </Link>
            <Link to="/dashboard" className="navbar-brand me-5">
            <Dropdown title="View Ticket " className="navbar-brand me-5">
              View Tickets
              <Dropdown.Item  className="navbar-brand me-2"> <Link to="/dashboard/active" >Active Tickets</Link> </Dropdown.Item>
              <Dropdown.Item><Link to="/dashboard/inactive">Inactive Tickets</Link></Dropdown.Item></Dropdown>
            </Link>
            <Link to="/profile" className="navbar-brand me-5">
              Profile
            </Link>
          </div>
          <div className="ms-auto">
            <Link to="/" className="navbar-brand ">
              Logout
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default EmployeeHeader;
