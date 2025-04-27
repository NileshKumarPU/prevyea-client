import { Link } from "react-router";
import logo from "../assets/Logo.png";

import { LogIn } from "lucide-react";

function Header() {

    const loggedIn = localStorage.getItem('token');
 
    
    function logOut() {
      if(loggedIn){
        localStorage.removeItem("token");
        window.location.reload(false);} 
                      }
      
      
    var path='';
    var text='';
   

  if(!loggedIn){
    path="/admin"
    text="Admin Panel"}
    else{
    path="#"
    text="Logout"
   
  }
  return (
    <>
      <div className="bgblue text-md font-bold">
        <div className="p-2 px-4 head">
          <Link to="">
            <img className="rounded-3xl" src={logo} width={150} />
          </Link>
          <div>

           <Link to="" className="px-4">
             Home 
          </Link>
           <Link to="#" className="px-2">
             About 
          </Link>
           <Link to="#" className="px-2">
             Contact us 
          </Link>
          
          </div>

          <div>
           <Link to={path} onClick={logOut}>
             {text} <LogIn className="inline" />
          </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
