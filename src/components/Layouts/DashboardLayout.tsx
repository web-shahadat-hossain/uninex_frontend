import Loading from "@/components/Share/Loading";
import DashboardTopNav from "@/components/UI/DashboardTopNav";
import DashboardLeftItems from "@/components/sections/DashboardLeftItems";
import { useVerifyUserQuery } from "@/redux/feature/Users/user";
import css from "@/styles/dashboard.module.css";

const DashboardLayout = ({ children }: any) => {
  const { data, isLoading } = useVerifyUserQuery(undefined);

  return (
    <>
      <>
        {" "}
        <DashboardTopNav />
        {isLoading ? (
          <Loading />
        ) : (
          <div className={`container ${css.dashboard}`}>
            <DashboardLeftItems userItem={data} />
            <section className={css.dashboard_right_content}>
              {children}
            </section>
          </div>
        )}
      </>
    </>
  );
};

export default DashboardLayout;
