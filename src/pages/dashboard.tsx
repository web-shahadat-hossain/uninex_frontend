import DashboardLayout from "@/components/Layouts/DashboardLayout";
import AuthenticatedRoute from "@/components/auth/AuthenticatedRoute";
import { ReactElement } from "react";
import css from "@/styles/dashboard.module.css";
import {
  useFindOneUserQuery,
  useVerifyUserQuery,
} from "@/redux/feature/Users/user";
import icon from "@/components/assets/logo/profile.jpg";
import Image from "next/image";
import Head from "next/head";
const Dashboard = () => {
  const { data: userItem } = useVerifyUserQuery(undefined);

  const { data } = useFindOneUserQuery(userItem?.data?.email);

  const profile = data?.data?.image ? data?.data?.image : icon.src;

  return (
    <>
      <Head>
        <title>
          Uninex - Dashboard - Your Ultimate E-commerce Destination for Attar,
          Jersey, Panjabi, Borka, Gadgets, Kids Essentials, Sneakers, and Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance atUninex, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthenticatedRoute>
        <aside className={css.profile_container}>
          <h2>My Profile</h2>
          <div className={css.profile_img_box}>
            <Image src={profile} alt="" width={100} height={100} />
          </div>
          <div>
            <ul>
              <li>
                <span>Name:</span>{" "}
                {data?.data?.name ? data?.data?.name : "Please add your Name"}
              </li>
              <li>
                <span>Email:</span>
                {data?.data?.email
                  ? data?.data?.email
                  : "Please add your Email"}
              </li>
              <li>
                <span>Contact No:</span>{" "}
                {data?.data?.contactNo
                  ? data?.data?.contactNo
                  : "Please add your Contact No"}
              </li>
              <li>
                <span>Address:</span>{" "}
                {data?.data?.address
                  ? data?.data?.address
                  : "Please add your Address"}
              </li>
            </ul>
          </div>

          {/* <button onClick={()=>setOpen(true)}>Update Profile</button>
      {
        open && <ProfileModal setOpen={setOpen} id={data?.data?._id}/>
      } */}
        </aside>
      </AuthenticatedRoute>
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout> {page} </DashboardLayout>;
};
