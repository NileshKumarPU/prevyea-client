import { Link } from "react-router";
import logo from "../assets/Logo.png";
import { useNavigate } from "react-router";
import { Menu, LogIn } from "lucide-react";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    

    const verifyCookie = async () => {
      const { data } = await axios.post(
        "https://prevyea-server.vercel.app/",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;

      setUsername(user);
      setIsLoggedIn(status);

      // if (!status) {
      //   navigate("/login");
      // }

      return;
    };
    verifyCookie();
  }, [cookies, navigate, removeCookies]);

  function showLinks() {
    if (screen.width < 786) {
      const ele = document.getElementById("nav-links");
      ele.classList.toggle("show");
    }
  }

  function handleAuthClick() {
    if (isLoggedIn) {

      const logout = async () => {
        const { data } = await axios.post(
          "https://prevyea-server.vercel.app/logout",
          {},
          { withCredentials: true }
        );

        const { status, message } = data;
        if (status) {
          setIsLoggedIn(false);
          toast.success(message, {
            position: "top-right",
          });

          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
        }else{toast.error(message);}
      };
      logout();
    } else {
      navigate("/login");
    }
  }
  // function logOut() {
  //   if (cookies.token) {
  //     removeCookies("token");
  //     toast.success("Logout Success!", {
  //       position: "top-right",
  //     });
  //     setTimeout(()=>{

  //       navigate("/");

  //     }, 1000 );
  //   }
  // }

  return (
    <>
      <div className="bgblue text-md font-bold">
        <ToastContainer />
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

          <div
            id="nav-links"
            className="w-3/5 flex justify-around align-middle "
            onClick={showLinks}
          >
            <Link to="" className="px-4 ">
              Home
            </Link>
            {isLoggedIn ? (
              <Link to="/dashboard" className="px-4">
                Dashboard
              </Link>
            ) : (
              <Link to="/about" className="px-4">
                About
              </Link>
            )}
            <Link to="/campus" className="px-4">
              CampusConnect
            </Link>
            {!isLoggedIn ? (
              <Link to="/login" className="psx-4">
                {" "}
                Log In/Sign Up
              </Link>
            ) : (
              <Link to="#" onClick={handleAuthClick}>
                Logout
              </Link>
            )}

            {/* <button onClick={handleAuthClick} className="px-4 border-none bgblue font-bold text-md  ">
              {isLoggedIn ? `Log Out(${username})` : "Log In"}
            </button> */}
            {isLoggedIn ? (
              <button className="px-4 border-none bgblue font-black text-md">
                {" "}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
