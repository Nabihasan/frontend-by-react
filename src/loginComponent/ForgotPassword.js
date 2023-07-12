import React from 'react';
import { useNavigate} from 'react-router-dom';

const ForgotPassword = () => {

    
  const navigate = useNavigate();
    const handle = () => {
        // Navigate to a different page or route
        navigate("/");
      };
      const handleClick = () => {
        // Navigate to a different page or route
        navigate("/verifyOTP");
      };
  return (
    <div>
    <div className='container' id="parent-container">
   

<div className="heading-div">

    <h2 id="heading-h2" align="center">Verify Your Account</h2>

</div>


<div className="input-div">

    <form >
        <label for="">Enter Your Personal Email </label> <br></br>
        <input id="email-input" type="text" name="email" required /><br></br>

        <input  id="submit-btn" class="btn btn-primary" type="Submit" onClick={handleClick} /><br></br>
        
          <a href="#" onClick={handle}>Back to Login</a>
        </form>
       

</div>

</div>
{/* 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script> */}


</div>
   
  )
}

export default ForgotPassword;
