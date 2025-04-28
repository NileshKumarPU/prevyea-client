import { Link } from "react-router";
import logo from "../assets/Logo.png";

import { Menu, LogIn } from "lucide-react";

function Header() {
  const loggedIn = localStorage.getItem("token");

  function showLinks() {
    if(screen.width<786){

      const ele = document.getElementById("nav-links");
      ele.classList.toggle("show")
      // if (ele.style.display === "none") {
      //   ele.style.display = "grid";
      // } else {
      //   ele.style.display = "none";
      // }
    }
  }

  function logOut() {
    if (loggedIn) {
      localStorage.removeItem("token");
      window.location.reload(false);
    }
  }

  var path = "";
  var text = "";

  if (!loggedIn) {
    path = "/admin";
    text = "Admin Panel";
  } else {
    path = "#";
    text = "Logout";
  }
  return (
    <>
      <div className="bgblue text-md font-bold">
        <div className="p-2 px-4 head gap-20">
          <div className=" w-full flex justify-between pb-2 ">
            <div>
              <Link to="">
                <img className="rounded-3xl" src={logo} width={150} />
              </Link>
            </div>
            <div className="hidden menu align-middle" onClick={showLinks}>
              <Menu size={36} />
            </div>
          </div>

          <div id="nav-links" className="w-3/5 flex justify-around align-middle " onClick={showLinks}>
            <Link to="" className="px-4 ">
              Home
            </Link>
            <Link to="#" className="px-4">
              About
            </Link>
            <Link to="#" className="px-4">
              Contact us
            </Link>
            <Link to={path} className="px-4 border-b" onClick={logOut}>
              {text} <LogIn className="inline" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
