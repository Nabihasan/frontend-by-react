import React from 'react';
import { useNavigate } from 'react-router-dom';
const ChangePassword = () => {

    const navigate = useNavigate();
    const handle = () => {
        // Navigate to a different page or route
        navigate("/");
      };
  return (
    <div>
      <div className='container' id='parent-container'>
        <div className='heading-div'>
            <h2 id='heading-h2' align='center'>Change Password</h2>
        </div>
        <div className='input-div'>
        <form>
            <label id="pwd-lbl1" style={{fontSize:25}} >New Password</label>  
            <input id='pass1' className='newpwd-input' type='password' name='newpassword' style={{marginLeft:'10%'}} required/>
            <br></br>
            <label id="pwd-lbl2" style={{fontSize:25}}>Confirm Password</label> 
            <input id='pass2' className='newpwd-input' type='password' name='confirmpassword' style={{marginLeft:'3%'}} required />
            <br></br>
            <br></br>
            <br></br>
           
            <input id='submit-btn' className='btn btn-primary' type='submit'  />
            <br></br>
            <br></br>
            <a id='back-a' href='#' onClick={handle}>Back</a>
        </form>

        </div>




      </div>
    </div>
  )
}

export default ChangePassword;
