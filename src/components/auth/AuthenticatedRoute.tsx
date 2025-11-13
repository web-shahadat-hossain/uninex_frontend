// components/AuthenticatedRoute.js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLogoutUserMutation } from "@/redux/feature/Users/user";

const AuthenticatedRoute = ({ requiredRole, children }: any) => {
  const router = useRouter();
  const [logout, { isSuccess, isLoading }] = useLogoutUserMutation();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    const authToken = localStorage.getItem("secretToken");
    axios.defaults.headers.common["authorization"] = `${authToken}`;

    axios
      .get(" https://api.uninex.shop/api/v1/auth/verify")
      .then(function (response) {
        console.log("response");
        if (!response?.data?.data?.verify) {
          logout("");
          +router.push("/login");
          localStorage.removeItem("secretToken");
        }
      })
      .catch(function (error) {
        logout("");
        router.push("/login");
        localStorage.removeItem("secretToken");
      });
  }, [router, requiredRole, logout, isSuccess]);

  return <>{children}</>;
};

export default AuthenticatedRoute;

// || (requiredRole && response?.data?.data?.role !== requiredRole)
