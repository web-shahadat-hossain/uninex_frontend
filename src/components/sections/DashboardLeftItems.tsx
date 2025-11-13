"use client";
import {
  useFindOneUserQuery,
  useLogoutUserMutation,
} from "@/redux/feature/Users/user";
import css from "@/styles/dashboard.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonLoading from "../Share/ButtonLoading";
const DashboardLeftItems = ({ userItem }: any) => {
  const { data } = useFindOneUserQuery(userItem?.data?.email);
  const [logout, { isLoading }] = useLogoutUserMutation();
  const router = useRouter();

  const handleLogoutClick = () => {
    logout("");
    localStorage.removeItem("secretToken");
    router.push("/");
  };

  return (
    <section className={css.dashboard_left_items}>
      <div>
        <h3>Dashboard</h3>
        <ul>
          <Link href="/">
            <li>
              <i className="fa-solid fa-house-chimney "></i>Home
            </li>
          </Link>
          <a>
            <li>
              <i className="fa-solid fa-chart-simple"></i>Analysis
            </li>
          </a>

          {data?.data?.role === "admin" ? (
            <Link href="/dashboard/admin/all-order">
              <li>
                <i className="fa-solid fa-arrow-trend-up"></i>All Orders
              </li>
            </Link>
          ) : (
            <Link href="my-orders">
              <li>
                <i className="fa-solid fa-arrow-trend-up"></i>My Orders
              </li>
            </Link>
          )}
          {data?.data?.role === "admin" ? (
            <Link href="/dashboard/admin/completed-order">
              <li>
                <i className="fa-solid fa-arrow-trend-up"></i>Completed Order
              </li>
            </Link>
          ) : (
            ""
          )}
          {data?.data?.role === "admin" ? (
            <Link href="/dashboard/admin/upload-product">
              <li>
                <i className="fa-solid fa-circle-plus "></i>Upload Product
              </li>
            </Link>
          ) : (
            ""
          )}
          {data?.data?.role === "admin" ? (
            <Link href="/dashboard/admin/manage-products">
              <li>
                <i className="fa-solid fa-people-roof "></i>Manage Products
              </li>
            </Link>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div>
        <h3>Settings</h3>
        <ul>
          <Link href="/dashboard">
            <li>
              <i className="fa-solid fa-house-chimney "></i>My Profile
            </li>
          </Link>
          {data?.data?.role === "admin" && (
            <Link href="make-admin">
              <li className="mt-1">
                <i className="fa-solid fa-dice-d6 "></i> Make Admin
              </li>
            </Link>
          )}
        </ul>
      </div>
      {isLoading ? (
        <ButtonLoading />
      ) : (
        <button className="Logout" onClick={handleLogoutClick}>
          Logout
        </button>
      )}
    </section>
  );
};

export default DashboardLeftItems;
