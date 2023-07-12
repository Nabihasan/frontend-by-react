import  React  from 'react';
import {Link } from "react-router-dom";
import { Eye } from 'react-bootstrap-icons';
import EmpService  from '../../../services/EmpService';
import {useEffect,useState} from 'react';
const EmpTable = ({tickets }) => {
  const [empList,setEmpList] = useState([]);
   
    const [msg,setMsg]=useState("");
    
    useEffect(() =>{
      
      init();

    },[]);
    const init = () =>{

        EmpService
        .getAllEmp()
        .then((res) => {
          console.log(res?.data);
          setEmpList(res?.data);
        })
        .catch((error) => {
         alert("error");
        });
      }

  return (
    <div>
      <table className="table table-bordered table-striped" >
        <thead >
        <tr >
              <th >Emp Id</th>
              <th >Name</th>
              <th >Company Email</th>
              <th >Emp Type</th>
              <th >View</th>
            </tr>
        </thead>
        <tbody>
        {empList?.map((e)=> (
           
               <tr>
                 <th scope="row">{e?.id}</th>
                 <td>{e?.name}</td>
                 <td>{e?.comEmail}</td>
              <td>{e?.userType}</td>
              <td>
                  <Link
                  to={"/edituser/"+e.id}
                    className="btn btn-link"
                  >
                    <Eye/>
                  </Link>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpTable;
        //   <tr >
        //       <th scope="col">Emp ID</th>
        //       <th scope="col">Name</th>
        //       <th scope="col">Company Email</th>
        //       <th scope="col">User Type</th>
        //       <th scope="col">Action</th>
        //     </tr>
        // </thead>
        // <tbody>
        // {empList?.map((e)=> (
           
        //    <tr>
        //      <th scope="row">{e?.id}</th>
        //      <td>{e?.name}</td>
        //      <td>{e?.comEmail}</td>
        //      <td>{e?.userType}</td>
        //      <td>
        //        <Link to={"/edituser/"+e.id}  className="btn btn-sm btn-primary">
        //        update
        //        </Link>
        //        <Link onClick={()=>deleteEmp(e.id)} className="btn btn-sm btn-danger ms-2">Delete</Link>
        //      </td>
        //    </tr>