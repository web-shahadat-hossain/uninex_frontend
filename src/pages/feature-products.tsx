import RootLayout from "@/components/Layouts/RootLayout";
import { ReactElement, useEffect } from "react";
import css from "@/styles/products.filter.module.css";
import ProductsFilterBox from "@/components/UI/ProductsFilterBox";
import ProductsFilterCard from "@/components/sections/ProductsFilterCard";
import { IProduct } from "@/type/type";
import Head from "next/head";
import { useRouter } from "next/router";
import { setCategory, subCategory } from "@/redux/feature/product/productSlice";
import { useAppDispatch } from "@/redux/hook";
import { gtmVirtualPageView } from "@/lib/gtmVirtualPageView";

const FeatureProducts = ({ products }: { products: IProduct }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  if (router?.query.sub_category) {
    dispatch(subCategory(router?.query?.sub_category.toString()));
  }
  if (router?.query.category) {
    dispatch(setCategory(router?.query?.category.toString()));
  }

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
          items: products,
        },
      }
    );
  }, [products]);

  return (
    <>
      <Head>
        <title>
          Uninex - Shop - Your Ultimate E-commerce Destination for Attar,
          Jersey, Panjabi, Borka, Gadgets, Kids Essentials, Sneakers, and Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance atUninex, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className={`container ${css.products_container}`}>
          <ProductsFilterBox />
          <ProductsFilterCard products={products} />
        </div>
      </section>
    </>
  );
};

export default FeatureProducts;

FeatureProducts.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout> {page} </RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await fetch("https://api.uninex.shop/api/v1/product/", {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data, status: ${res.status}`);
    }

    const data = await res.json();

    return {
      props: {
        products: data.data,
      },
    };
  } catch (error: any) {
    console.error("Error fetching data:", error.message);

    return {
      props: {
        products: [],
      },
      // revalidate:10
    };
  }
};
