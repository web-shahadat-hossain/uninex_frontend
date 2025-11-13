import { useUserCreateMutation } from "@/redux/feature/Users/user";
import css from "@/styles/login.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import ButtonLoading from "@/components/Share/ButtonLoading";
import RootLayout from "@/components/Layouts/RootLayout";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useRouter } from "next/router";
type Inputs = {
  name: string;
  email: string;
  password: string;
};
const Register = () => {
  const router = useRouter();
  const [userCreate, { error, isLoading, isError, isSuccess }] =
    useUserCreateMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Add a password length validation
    if (data.password.length < 8) {
      // Handle error, e.g., display a message to the user
      toast.error("Password must be at least 8 characters long");
      return;
    }

    // If the password length is valid, proceed with user creation
    userCreate({ name: data.name, email: data.email, password: data.password });
  };
  if (isError && error) {
    if ("data" in error) {
      const errorData = error as { data: { message: string } };
      toast.error(errorData.data.message);
    } else {
      // Handle other error cases
    }
  }

  if (isSuccess) {
    toast.success("Your registration is successful Login now!!");
    router.push("/login");
  }

  return (
    <>
      <section className={css.login_container}>
        <div className={css.login_container_box}>
          <div className={css.container}>
            <div
              className={`${css.form_container} ${css.sign_up_container} ${css.sign_up_container_active}`}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Create Account</h2>
                <p className={css.alreadyAccount}>
                  Have an account? <Link href="/login"></Link>
                </p>

                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
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

                {isLoading ? <ButtonLoading /> : <button>Sign Up</button>}
              </form>
            </div>

            <div className={css.overlay_container}>
              <div className={css.overlay}>
                <div
                  className={`${css.overlay_panel} ${css.overlay_left} ${css.overlay_left_active}`}
                >
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <Link href="/login">
                    <button className={css.ghost} id="signIn">
                      Sign In
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

export default Register;

Register.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout> {page} </RootLayout>;
};
