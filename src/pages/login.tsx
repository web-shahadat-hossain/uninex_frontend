/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import RootLayout from "@/components/Layouts/RootLayout";
import { ReactElement, useState } from "react";
import css from "@/styles/login.module.css";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ButtonLoading from "@/components/Share/ButtonLoading";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";

type Inputs = {
  email: string;
  password: string;
};
const login = () => {
  const router = useRouter();
  const [load, setLoad] = useState(false);
  // const [userLogin, { isLoading, isError, isSuccess, error, data }] =
  // useUserLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoad(true);
    axios
      .post(
        "https://api.uninex.shop/api/v1/auth/login",
        { email: data.email, password: data.password },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("secretToken", response?.data?.data.secretToken);
        router.push("/dashboard");
        setLoad(false);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        setLoad(false);
      });
  };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<Inputs>()
  // const onSubmit: SubmitHandler<Inputs> = (data) =>userLogin({ email: data.email, password: data.password });

  //   if (isSuccess) {
  //     localStorage.setItem("secretToken", data?.data?.secretToken);
  //     router.push("/dashboard")
  //   }

  // if (isError && error) {
  //   if ("data" in error) {
  //     const errorData = error as { data: { message: string } };
  //     toast.error(errorData.data.message);
  //   } else {
  //     // Handle other error cases
  //   }
  // }

  return (
    <>
      <Head>
        <title>
          Uninex - Login - Your Ultimate E-commerce Destination for Attar,
          Jersey, Panjabi, Borka, Gadgets, Kids Essentials, Sneakers, and Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance atUninex, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={css.login_container}>
        <div className={css.login_container_box}>
          <div className={css.container}>
            <div className={`${css.form_container} ${css.sign_in_container}`}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign in</h2>
                <p className={css.alreadyAccount}>
                  Don't have an account? <span>Sign Up</span>
                </p>

                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span
                    style={{
                      color: "red",
                      fontWeight: "600",
                      marginBottom: "10px",
                      textAlign: "left",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <i
                      className="fa-solid fa-triangle-exclamation"
                      style={{ marginRight: "5px" }}
                    ></i>{" "}
                    This field is required
                  </span>
                )}
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span
                    style={{
                      color: "red",
                      fontWeight: "600",
                      marginBottom: "10px",
                      textAlign: "left",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    {" "}
                    <i
                      className="fa-solid fa-triangle-exclamation"
                      style={{ marginRight: "5px" }}
                    ></i>{" "}
                    This field is required
                  </span>
                )}
                <a href="#">Forgot your password?</a>
                {load ? <ButtonLoading /> : <button>Sign In</button>}
                {/* <button>Sign In</button> */}
              </form>
            </div>
            <div className={css.overlay_container}>
              <div className={css.overlay}>
                <div className={`${css.overlay_panel} ${css.overlay_right}`}>
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <Link href="/account/register">
                    <button className={css.ghost} id="signUp">
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default login;

login.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout> {page} </RootLayout>;
};
