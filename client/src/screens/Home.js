import React from 'react';
import { Link } from "react-router-dom"
import StudentIMage from "../Images/student4.png"
import AdminIMage from "../Images/admin2.png"

const Home = () => {
    return (
        <div className="HomePage"  >

            <div className="col-md-6 m-auto" style={{display:"flex" ,backgroundColor:"rgb(20, 111, 153)",opacity:"10",padding:"5%"}}>
                <div className="card"style={{marginLeft:"15%"}}>
                   <img src={AdminIMage} alt="StudentIMage" style={{height:"250px",width:"90%"}} />
                   <br />
                   <Link className="link_class" to="/adminLogin"> <h3 style={{fontFamily:"Oswald"}}>Signin as  Admin</h3></Link>
                </div>
                <div className="card" style={{marginLeft:"10%"}}>
                   <img src={StudentIMage} alt="StudentIMage" style={{height:"250px",width:"90%"}} />
                   <br />
                   <Link className="link_class" to="/login"> <h3 style={{fontFamily:"Oswald"}}>Signin as  Student</h3></Link>  
                </div>
            </div>
            {/* <div>
                <Link to="/login">signin as a admin</Link>
            </div>
            <div>

                <Link to="/login">signin as a student</Link>
            </div>
            <div>
                <Link to="/addBook">Add Book</Link>
            </div>
            <div>

                <Link to="/allBook">All Book</Link>
            </div>
            <div>

<Link to="/stuReqIssue">Issue Request</Link>
</div>
            <div>
        
<Link to="/manageStudent">Manage Student</Link>
</div> */}
            
        </div>
    );
};

export default Home;
