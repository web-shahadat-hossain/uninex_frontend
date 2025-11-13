import css from "@/styles/dashboard.module.css";
import Link from "next/link";
import profile from "@/components/assets/logo/profile.jpg";
import Image from "next/image";
const DashboardTopNav = () => {
  return (
    <nav className={css.dashboard_top_nav}>
      <div className={`container ${css.dashboard_nva_top_items}`}>
        <Link href="/dashboard">
          <h4>Dashboard</h4>
        </Link>
        <div>
          <Image src={profile} className=" icon-circle" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default DashboardTopNav;
