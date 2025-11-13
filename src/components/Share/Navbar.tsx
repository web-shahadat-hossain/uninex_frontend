"use client";
import Nav from "../UI/Nav";
import Search from "../UI/NavSearch";
import MobileNavbar from "./MobileNavbar";
import axios from "axios";
import { useEffect, useState } from "react";
const Header = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("secretToken");
    if (token) {
      axios.defaults.withCredentials = true;
      axios
        .get(" https://api.uninex.shop/api/v1/auth/verify")
        .then(function (response) {
          // handle success
          setData(response.data.data.verify);
        })
        .catch(function (error) {
          // handle error
          setData(false);
        })
        .finally(function () {
          // always executed
        });
    }
  }, []);

  return (
    <>
      <>
        {" "}
        <div className="navbar-desktop">
          <Search auth={data} />
          <Nav />
        </div>
        <div className="navbar-mobile">
          <MobileNavbar auth={data} />
        </div>
      </>
    </>
  );
};

export default Header;
