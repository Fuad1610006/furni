import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



function Dashboard() {
        const userLogged = JSON.parse(localStorage.getItem("userdata"));
        return (
            <div>
                <h1>Hi {userLogged.name},</h1>
                <img src={`http://localhost/Furni/api/${userLogged.image}`} alt="" />
            </div>
        ); 
}

export default Dashboard;