import React from 'react';
import { useNavigate} from 'react-router-dom';

const VerifyOTP = () => {

    const navigate = useNavigate();
    const handle = () => {
        // Navigate to a different page or route
        navigate("/");
      };
      const handleClick = () => {
        // Navigate to a different page or route
        navigate("/changepassword");
      };
  return (
    <div>
    <div className='container' id="parent-container">
   

<div className="heading-div">

    <h2 id="heading-h2" align="center">Verify OTP</h2>

</div>


<div className="input-div">

    <form >
        <label for="">Enter OTP </label> <br></br>
        <input id="email-input" type="number" name="otp"  /><br></br>

        <input type="Submit" id="submit-btn" class="btn btn-primary"  onClick={handleClick} /><br></br>
        
          <a href="#" onClick={handle}>Back to Login</a>
        </form>
       

</div>

</div>

</div>
  )
}

export default VerifyOTP;
