/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
import { ReactElement, useEffect } from "react";
import Categories from "@/components/UI/Categories";
import Banner from "@/components/UI/Banner";
import ComboOffers from "@/components/sections/ComboOffers";
// import Attar from "@/components/sections/Attar";
// import Jersey from "@/components/sections/Jersey";
// import Panjabi from "@/components/sections/Panjabi";
// import Borka from "@/components/sections/Borka";
import { gtmVirtualPageView } from "@/lib/gtmVirtualPageView";
import axios from "axios";

export default function HomePage({ product }: any) {
  useEffect(() => {
    gtmVirtualPageView(
      {
        gtm: { uniqueEventId: 6, start: 1710520892885 },
        event: "view_item_list",
        developer_id: { dZTNiMT: true },
        pagePostType: "frontpage",
        pagePostType2: "single-page",
        pagePostAuthor: "fytr5ghs",
        customerTotalOrders: 0,
        customerTotalOrderValue: 0,
        customerFirstName: "",
        customerLastName: "",
        customerBillingFirstName: "",
        customerBillingLastName: "",
        customerBillingCompany: "",
        customerBillingAddress1: "",
        customerBillingAddress2: "",
        customerBillingCity: "",
        customerBillingState: "",
        customerBillingPostcode: "",
        customerBillingCountry: "",
        customerBillingEmail: "",
        customerBillingEmailHash:
          "e3b0c44298fc1c149afbf4c8996fb92427ae41e4" +
          "649b934ca495991b7852b855",
        customerBillingPhone: "",
        customerShippingFirstName: "",
        customerShippingLastName: "",
        customerShippingCompany: "",
        customerShippingAddress1: "",
        customerShippingAddress2: "",
        customerShippingCity: "",
        customerShippingState: "",
        customerShippingPostcode: "",
        customerShippingCountry: "",
      },
      {
        ecommerce: {
          currency: "BDT",
          items: product,
        },
      }
    );
  }, [product]);
  return (
    <>
      <Head>
        <title>
          Uninex - Home Page - Your Ultimate E-commerce Destination for Attar,
          Jersey, Panjabi, Borka, Gadgets, Kids' Essentials, Sneakers, and Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance atUninex, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* banner section start here  */}
        <section className="home">
          <div className="container d_flex hero-container ">
            <Categories />
            <Banner />
          </div>
        </section>
        {/* banner section ends here  */}

        <ComboOffers comboOffers={product} />
        {/* <Attar attar={product?.attar} />
        <Jersey jersey={product?.jersey} />
        <Panjabi panjabi={product?.panjabi} />
        <Borka borka={product?.borka} /> */}
      </main>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout> {page} </RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await axios.get("https://api.uninex.shop/api/v1/product", {
      withCredentials: false,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const products = res.data;

    return {
      props: {
        product: products.data,
      },
      // revalidate: 60,
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        product: [],
      },
    };
  }
};
