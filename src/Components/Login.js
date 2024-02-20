import React, {useState} from 'react';
import { useAuth } from "./auth";
import {Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import "./mystyle.module.css";
import { Grid, Paper,Avatar , TextField} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
 

function Login() {
    
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Getting Email and Password
       const userName = localStorage.getItem("email") ? localStorage.getItem("email") : "Venkateshboddepalli1999@gmail.com";
       const userPassword = localStorage.getItem("password") 
       ? localStorage.getItem("password") 
       : "Venkey@123";

    // submit Function

    const handleSubmit = (e) => {
      e.preventDefault();
      if (email === userName && password === userPassword) {
        toast.success("Login Success");
        navigate("/");
        login(email)
      } else {
        toast.error("Invalid Email OR password");
      }
    };

    const paperStyle = {padding:30,height:"70vh", width:300, margin:"30px auto"}
    const avatarStyle ={backgroundColor:'#1bbd7e'}
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label="Username" placeholder="Enter username" fyllwidth required/>
        <TextField label="Password" placeholder="Enter password" type="password" fyllwidth required/>
      </Paper>
    </Grid>
    // <div className='mydiv'>
    //  <form className='Login_form'>
    //  <h1>login Authentication</h1><br />
    //   <label className="label_Control" htmlFor="email">Email address:</label>
    //   <i class="fa-solid fa-envelope fa-flip"></i>
    //   <input 
    //   type="text" 
    //   style={{ fontSize: "13px"}}
    //   className="form-control"
    //   id="email"
    //   value={email}
    //   placeholder="Enter User Email"
    //   onChange={(e) => setEmail(e.target.value)}
    //   />
    //    <label className="label_Control" htmlFor='password'>Password:</label>
    //    <i class="fa-solid fa-lock fa-flip"></i> 
    //   <input style={{ fontSize: "13px"}}
    //   type="text" 
    //   className="form-control"
    //   id="password"
    //   value={password}
    //   placeholder="Enter User Password"
    //   onChange={(e) => setPassword(e.target.value)}
    //   />
    //   <br />
      
    //   <div className='form_signupLink'>
    //     <p>
    //       Don't Have An Account? <Link to="/signup">Sign Up !</Link>
    //     </p>
    //   </div>
    //   <button
    //    type="submit" 
    //    value="Submit"
    //    className='form_button'
    //    onClick={handleSubmit}
    //    >
    //     Login
    //   </button>
    //  </form>
    // </div>
  );
}

export default Login;
