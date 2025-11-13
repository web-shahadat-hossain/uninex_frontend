import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

/* eslint-disable react/no-unescaped-entities */
const success = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const name = router?.query.name;
  const id = router?.query.ID;

  return (
    <>
      <Head>
        <title>
          Uninex - Order Success Message Page - Your Ultimate E-commerce
          Destination for Attar, Jersey, Panjabi, Borka, Gadgets, Kids
          Essentials, Sneakers, and Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance atUninex, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="success_message_container">
        <div className="card_success_message">
          <div>
            <i className="checkmark">✓</i>
          </div>

          <h2>প্রিয় , {name}</h2>
          <p>আপনার অর্ডারটি গ্রহন করা হয়েছে ।</p>
          <p>আপনার অর্ডার নাম্বার - {id}</p>
          <p>ধন্যবাদ</p>
          <p>কোনো তথ্য জানার যোগাযোগ করুন: +8801960602760</p>

          <Link href="/feature-products">
            {" "}
            <button>Continue Shopping</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default success;

success.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout> {page} </RootLayout>;
};
