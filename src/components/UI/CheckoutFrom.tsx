import css from "@/styles/checkout.module.css";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCart } from "../CartContext";
import { useBuyNowOrderMutation } from "@/redux/feature/order/orderApi";
import ButtonLoading from "../Share/ButtonLoading";
import { useRouter } from "next/router";
import { gtmVirtualPageView } from "@/lib/gtmVirtualPageView";

type Inputs = {
  fullName: string;
  contactNo: string;
  email: string;
  address: string;
};
const CheckoutFrom = () => {
  const router = useRouter();
  const [selectedShippingMethod, setSelectedShippingMethod] = useState("120");
  const { cart, total } = useCart();
  const [buyNowOrder, { isLoading, isSuccess, data, isError, error }] =
    useBuyNowOrderMutation();
  const handleShippingMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedShippingMethod(event.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const shipping =
      selectedShippingMethod === "120"
        ? "ঢাকা সিটির বাইরে"
        : "ঢাকা সিটির ভিতরে";
    const inTotal = Number(selectedShippingMethod) + Number(total);
    if (cart) {
      const buyInfo = {
        ...data,
        totalPrice: inTotal,
        shippingMethod: shipping,
        products: [...cart],
      };
      buyNowOrder(buyInfo);
    } else {
      toast.error("Please selected product");
    }
  };

  if (isSuccess) {
    localStorage.removeItem("cart");
    localStorage.removeItem("total");
    router.push({
      pathname: "/success",
      query: { ID: data?.data?._id, name: data?.data?.fullName },
    });

    gtmVirtualPageView(
      {
        inker: { domains: ["baraqahshop.com"] },
        gtm: { uniqueEventId: 6, start: 1710523159082 },
        event: "purchase",
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
        orderData: data,
        totals: {
          currency: "BDT",
          discount_total: 0,
          discount_tax: 0,
          shipping_total: 0,
          shipping_tax: 0,
          cart_tax: 0,
          total: total,
          total_tax: 0,
          total_discount: 0,
          subtotal: data?.data?.totalPrice,
          tax_totals: [],
        },
        customer: data?.data,
      }
    );
  }

  if (isError) {
    toast.error("দুঃখিত আবার চেষ্টা করুন");
  }

  return (
    <div className={css.checkout_from_box}>
      <div>
        <h2>Shipping Information</h2>
        <div className={css.price}>
          <span>Shipping</span>
          <ul className={css.shipping_methods}>
            <li>
              <input
                type="radio"
                name="shipping_method"
                defaultValue="65"
                checked={selectedShippingMethod === "65"}
                onChange={handleShippingMethodChange}
              />
              <label htmlFor="shipping_method_0_flat_rate55">
                ঢাকা সিটির ভিতরে:{" "}
                <span>
                  <bdi>
                    <span>৳&nbsp;</span>65
                  </bdi>
                </span>
              </label>
            </li>
            <li>
              <input
                type="radio"
                name="shipping_method"
                defaultValue="120"
                checked={selectedShippingMethod === "120"}
                onChange={handleShippingMethodChange}
              />
              <label htmlFor="shipping_method_0_flat_rate56">
                ঢাকা সিটির বাইরে:{" "}
                <span>
                  <bdi>
                    <span>৳&nbsp;</span>120
                  </bdi>
                </span>
              </label>
            </li>
          </ul>
        </div>

        <div className={css.price}>
          <span>Subtotal</span>
          <small>
            {/* ৳ {total.toFixed(2)} */}৳ {total}
          </small>
        </div>
        <div className={css.price}>
          <span>Total</span>
          <small>৳ {Number(selectedShippingMethod) + Number(total)}</small>
        </div>

        <div className={css.price}>
          <span>Cash on delivery</span>
        </div>

        <form className={css.from_box} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>
              <input
                type="text"
                placeholder="আপনার নাম"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span
                  style={{
                    color: "red",
                    fontWeight: "500",
                    marginBottom: "10px",
                    textAlign: "left",
                    display: "block",
                    width: "100%",
                  }}
                >
                  {" "}
                  <i
                    className="fa-solid fa-triangle-exclamation"
                    style={{ marginRight: "5px" }}
                  ></i>{" "}
                  আপনার নাম is required
                </span>
              )}
            </label>
            <label>
              <input
                type="text"
                placeholder="মোবাইল নম্বর"
                {...register("contactNo", { required: true })}
              />
              {errors.contactNo && (
                <span
                  style={{
                    color: "red",
                    fontWeight: "500",
                    marginBottom: "10px",
                    textAlign: "left",
                    display: "block",
                    width: "100%",
                  }}
                >
                  {" "}
                  <i
                    className="fa-solid fa-triangle-exclamation"
                    style={{ marginRight: "5px" }}
                  ></i>{" "}
                  মোবাইল নাম্বার is required
                </span>
              )}
            </label>
          </div>
          <div>
            <label htmlFor="">
              <input
                type="email"
                placeholder="ইমেইল ঠিকানা"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span
                  style={{
                    color: "red",
                    fontWeight: "500",
                    marginBottom: "10px",
                    textAlign: "left",
                    display: "block",
                    width: "100%",
                  }}
                >
                  {" "}
                  <i
                    className="fa-solid fa-triangle-exclamation"
                    style={{ marginRight: "5px" }}
                  ></i>{" "}
                  ইমেইল is required
                </span>
              )}
            </label>
          </div>

          <div>
            <label htmlFor="">
              <input
                type="text"
                placeholder="আপনার সম্পূর্ণ ঠিকানা"
                {...register("address", { required: true })}
                required
              />
              {errors.address && (
                <span
                  style={{
                    color: "red",
                    fontWeight: "500",
                    marginBottom: "10px",
                    textAlign: "left",
                    display: "block",
                    width: "100%",
                  }}
                >
                  {" "}
                  <i
                    className="fa-solid fa-triangle-exclamation"
                    style={{ marginRight: "5px" }}
                  ></i>{" "}
                  আপনার সম্পূর্ণ ঠিকানা is required
                </span>
              )}
            </label>
          </div>

          {isLoading ? (
            <div>
              <button className="buttonload" disabled>
                <i className="fa fa-spinner fa-spin"></i>দয়া করে একটু অপেক্ষা
                করুন
              </button>
            </div>
          ) : (
            <button className="btn-primary">অর্ডারটি কনফর্ম করুন</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutFrom;
