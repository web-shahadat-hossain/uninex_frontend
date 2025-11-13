/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import RootLayout from "@/components/Layouts/RootLayout";
import { ReactElement, useEffect } from "react";
import css from "@/styles/my_collection.module.css";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartContext";
import Head from "next/head";
import { gtmVirtualPageView } from "@/lib/gtmVirtualPageView";

const myCollection = () => {
  const { cart, total, removeFromCart, addToCart, clearCart } = useCart();
  useEffect(() => {
    gtmVirtualPageView(
      {
        linker: { domains: ["baraqahshop.com"] },
        gtm: { uniqueEventId: 6, start: 1710522428278 },
        event: "view_cart",
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
          total: total,
          items: [cart],
        },
      }
    );
  }, [cart, total]);
  return (
    <>
      <Head>
        <title>
          Uninex - My Collection - Your Ultimate E-commerce Destination for
          Attar, Jersey, Panjabi, Borka, Gadgets, Kids Essentials, Sneakers, and
          Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance atUninex, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`container ${css.card_container}`}>
        <section className={css.cart_products}>
          <div className={css.cart_top}>
            <h4>
              <i className="fa-solid fa-cart-shopping"></i>
              <span>My Cart ({cart?.length} items)</span>
            </h4>
          </div>

          {cart?.map((product: any, index: number) => (
            <div className={css.cart_product} key={index}>
              <div style={{ width: "100px", height: "100px" }}>
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
                <h4> {product.title} </h4>
                <h5>
                  ৳{" "}
                  {(
                    Number(product?.discountPrice) * Number(product?.quantity)
                  ).toFixed(2)}{" "}
                </h5>
              </div>
              <div className={css.quantity}>
                <button onClick={() => addToCart(product)}>
                  <i className="fa-solid fa-plus"></i>
                </button>
                <span>{product?.quantity}</span>
                <button onClick={() => removeFromCart(product)}>
                  <i className="fa-solid fa-minus"></i>
                </button>
              </div>
              <div className={css.remove}>
                <button onClick={() => clearCart(product)}>
                  <i className="fa-solid fa-trash"></i>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </section>
        <section className={css.order_summary}>
          <div>
            <h2>Order Summary</h2>
            <h4>
              <span>Subtotal ({cart?.length} items)</span>
              <small>৳ {Number(total)}</small>
            </h4>
            <div className={css.promoCode}>
              <input type="text" placeholder="Enter Voucher Code"></input>
              <button>Apply</button>
            </div>
            <br />
            {cart?.length !== 0 ? (
              <Link href="/checkout">
                <button className={`btn-primary  ${css.checkout}`}>
                  PROCEED TO CHECKOUT{" "}
                </button>
              </Link>
            ) : (
              <button className={`btn-primary   ${css.checkout}`}>
                PROCEED TO CHECKOUT{" "}
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default myCollection;

myCollection.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout> {page} </RootLayout>;
};
