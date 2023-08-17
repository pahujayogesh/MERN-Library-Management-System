import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/user_action";
import { useDispatch, useSelector } from 'react-redux'
import AdminIMage from "../Images/admin2.png"

const AdminLogin = () => {

    const [password, setPassword] = useState("");
    const[show,setShow] = useState("password") 
    const [roll_no, setRoll_no] = useState("")
    const dispatch = useDispatch()

    const PostData = () => {
        const user = { password, roll_no }
        dispatch(loginUser(user))
    };

    const handleShow = ()=> {
        if(show === "password"){
            setShow("text")
        } else {
            setShow("password")
        }
    }

    return (
        <div >
            <div className="LoginPage"></div>
            <div className="login_container">
               
                    <div className="col-md-6 m-auto" style={{opacity:1}}>
                        <div style={{marginLeft:"37%"}}>
                  
                        </div>
                        <p style={{color:"white",fontWeight:"800",textAlign:"center"}}>Welcome to Libary
Management System</p>


<img src={AdminIMage} alt="StudentIMage" style={{height:"220px",width:"220px",borderRadius:"50%"}} />
<br />
                    <div style={{marginTop:""}}>
                        <input type="text" className="form-control" style={{height:"20%",borderRadius:"20px"}}
                         placeholder="Employee Id" value={roll_no} onChange={(e) => setRoll_no(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <input type="password"  style={{height:"20%",borderRadius:"20px"}}
                        className="form-control" typeof={show} placeholder="Password"
                         value={password} onChange={(e) => setPassword(e.target.value)} />
                        <i className="fas fa-eye" style={{color:"white"}} onClick={() =>  handleShow()}></i>
                    </div>
                     <br />



                    <button style={{width:"50%",height:"60px",color:"white",borderRadius:"20px",backgroundColor:"rgb(20, 111, 153)"}} onClick={() => PostData()}>
                        Login 
                    </button>
                    </div>
                    <br />
                    <Link to="/"  style={{fontFamily:"sans-serif",color:"white",textDecoration:"none"}}>Go To Home Page</Link>
               
            </div>
        </div>
    );
};



export default AdminLogin;