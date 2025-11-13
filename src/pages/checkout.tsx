import { useCart } from "@/components/CartContext";
import RootLayout from "@/components/Layouts/RootLayout";
import CheckoutFrom from "@/components/UI/CheckoutFrom";
import { gtmVirtualPageView } from "@/lib/gtmVirtualPageView";
import css from "@/styles/checkout.module.css";
import Head from "next/head";
import Image from "next/image";
import { Key, ReactElement, useEffect } from "react";

const checkout = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { cart, clearCart } = useCart();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    gtmVirtualPageView(
      {
        linker: { domains: ["baraqahshop.com"] },
        gtm: { uniqueEventId: 11, start: 1710522755856 },
        event: "begin_checkout",
        developer_id: { dZTNiMT: true },
        pagePostType: "page",
        pagePostType2: "single-page",
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
      },
      {
        linker: { domains: ["baraqahshop.com"] },

        ecommerce: {
          currency: "BDT",
          value: 2199,
          items: [cart],
        },
      }
    );
  }, [cart]);
  return (
    <>
      <Head>
        <title>
          Uninex - checkout - Your Ultimate E-commerce Destination for Attar,
          Jersey, Panjabi, Borka, Gadgets, Kids Essentials, Sneakers, and Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance atUninex, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container">
        <div className={css.checkout_container}>
          <div className={css.checkout_product}>
            <div className={css.checkout_summary}>
              <h4 className={css.checkout_message}>
                ফোনে অর্ডার করতে কল করুন : +8801960602760
              </h4>
            </div>
            <div className={css.checkout_product_box}>
              <div className={css.checkout_head}>
                <h4>
                  {" "}
                  <span>PRODUCT</span>
                </h4>
              </div>
              {cart?.map((product: any, index: Key | null | undefined) => (
                <div className={css.checkout_box} key={index}>
                  <h4 className={css.flex}>
                    {" "}
                    <div style={{ width: "50px", height: "50px" }}>
                      {" "}
                      <Image
                        src={product?.image}
                        alt={product?.title}
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="contain"
                      />
                    </div>{" "}
                    {product?.title}
                  </h4>

                  <h5>৳ {product?.discountPrice}</h5>
                  <div className={css.remove}>
                    <button onClick={() => clearCart(product)}>
                      <i className="fa-solid fa-trash"></i>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={css.checkout_from}>
            <CheckoutFrom />
          </div>
        </div>
      </section>
    </>
  );
};

export default checkout;

checkout.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout> {page} </RootLayout>;
};
