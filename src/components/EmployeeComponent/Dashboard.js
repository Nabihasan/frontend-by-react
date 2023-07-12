import React from "react";
import GetActiveRecords from "./GetActiveRecords";
import ShowActiveRecords from "./ShowActive";




export const Dashboard = () => {
return (
	<div className="dashboard">
	
	</div>
);
};

export const Active = () => {
return (
	<div className="active">
       <div ><ShowActiveRecords/></div>
       
       </div>
);
};








export const Inactive = () => {
return (
	<div className="inactive" >
          <div ><GetActiveRecords/></div>
	
	</div>
);
};

