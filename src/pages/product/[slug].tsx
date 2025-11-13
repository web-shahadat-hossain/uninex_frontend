import RootLayout from "@/components/Layouts/RootLayout";
import ProductDetailContent from "@/components/UI/ProductDetailContent";
import RelatedProducts from "@/components/UI/RelatedProducts";
import ProductDetailsToggle from "@/components/sections/ProductDetailsToggle";
import { gtmVirtualPageView } from "@/lib/gtmVirtualPageView";
import css from "@/styles/productDetails.module.css";
import Head from "next/head";
import Image from "next/image";
import { ReactElement, useEffect } from "react";
const productDetails = ({ product }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    gtmVirtualPageView(
      {
        linker: { domains: ["baraqahshop.com"] },
        gtm: { uniqueEventId: 11, start: 1710521822619 },
        event: "view_item",
        developer_id: { dZTNiMT: true },
        pagePostType: "product",
        pagePostType2: "single-product",
        pagePostAuthor: "Shahadat",
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
        customerBillingEmailHash: "",
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
        productRatingCounts: [],
        productAverageRating: 0,
        productReviewCount: 0,
        productType: "simple",
        productIsVariable: 0,
      },
      {
        ecommerce: {
          currency: "BDT",
          value: 2199,
          items: [product],
        },
      }
    );
  }, [product]);
  console.log(product);
  return (
    <>
      <Head>
        <title>Baraqah Shop - {product?.title} </title>
        <meta
          name="description"
          content="Discover a world of style and elegance atUninex, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <section className={`${css.product_details}`}>
          <div className={`container ${css.product_details_container}`}>
            <div className={css.images_box}>
              <Image
                src={product?.image}
                alt={product?.title}
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div>
              <ProductDetailContent product={product} />
            </div>
          </div>

          <div className={`${css.product_feature}`}>
            <ProductDetailsToggle product={product} />
          </div>

          <RelatedProducts category={product?.category} />
        </section>
      </div>
    </>
  );
};

export default productDetails;

productDetails.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout> {page} </RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://api.uninex.shop/api/v1/product");
  const product = await res.json();
  const paths = product?.data?.map((p: any) => ({
    params: { slug: p?._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://api.uninex.shop/api/v1/product/${params.slug}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};

// export const getServerSideProps = async ({ params }: any) => {
//   const res = await fetch(
//     `https://api.uninex.shop/api/v1/product/single/${params.slug}`
//   );
//   const data = await res.json();

//   return {
//     props: {
//       product: data.data,
//     },
//   };
// };
