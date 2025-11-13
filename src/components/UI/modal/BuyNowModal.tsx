import ButtonLoading from "@/components/Share/ButtonLoading";
import { useBuyNowOrderMutation } from "@/redux/feature/order/orderApi";
import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type Inputs = {
  fullName: string;
  contactNo: string;
  email: string;
  address: string;
};

const BuyModal = ({ setOpen }: any) => {
  const [selectedShippingMethod, setSelectedShippingMethod] = useState("120");
  const { selectedProduct } = useAppSelector((state) => state.productFilter);
  const handleShippingMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedShippingMethod(event.target.value);
  };
  const router = useRouter();
  const [buyNowOrder, { isLoading, isSuccess, data, isError, error }] =
    useBuyNowOrderMutation();

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
    const inTotal =
      Number(selectedShippingMethod) + Number(selectedProduct?.discountPrice);
    if (selectedProduct) {
      const buyInfo = {
        ...data,
        totalPrice: inTotal,
        shippingMethod: shipping,
        products: [selectedProduct],
      };
      buyNowOrder(buyInfo);
    } else {
      toast.error("Please selected product");
    }
  };

  if (isSuccess) {
    localStorage.removeItem("cart");
    localStorage.removeItem("total");
    router.push("/success");
    setOpen(false);
  }

  if (isError && error) {
    if ("data" in error) {
      setOpen(false);
      const errorData = error as { data: { message: string } };
      toast.error(errorData.data.message);
    } else {
      // Handle other error cases
    }
  }

  return (
    <section className="modal_container show ">
      <div className="add-new-address-modal_container">
        <div className="add-new-address-modal-box">
          <h2>{selectedProduct?.title}</h2>
          <div>
            <h4>ফোনে অর্ডার করতে কল করুন : +8801960602760</h4>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="buy_price_info">
              <label htmlFor="">
                Price
                <br />
                <input
                  required
                  type="text"
                  name="price"
                  value={selectedProduct?.discountPrice}
                  disabled
                />
              </label>
              <label htmlFor="">
                Total
                <br />
                <input
                  required
                  type="text"
                  name="totalPrice"
                  value={(
                    Number(selectedShippingMethod) +
                    Number(selectedProduct?.discountPrice)
                  ).toFixed(2)}
                />
              </label>
            </div>
            <br />
            <div className="buy_price_info">
              <label htmlFor="">
                Shipping <span>*</span>
                <br />
                <select
                  onChange={handleShippingMethodChange}
                  required
                  name="shopping"
                  id="cars"
                >
                  <option value="120">ঢাকা সিটির বাইরে 120 BDT</option>
                  <option value="65">ঢাকা সিটির ভিতরে 65 BDT</option>
                </select>
              </label>
              <label htmlFor="">
                Full Name <span>*</span>
                <br />
                <input
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  required
                  {...register("fullName", { required: true })}
                />
              </label>
            </div>
            <br />
            <div className="buy_price_info">
              <label htmlFor="">
                Email <span>*</span>
                <br />
                <input
                  required
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="আপনার ইমেইল লিখুন"
                />
              </label>
              <label htmlFor="">
                Contact No <span>*</span>
                <br />
                <input
                  required
                  type="text"
                  {...register("contactNo", { required: true })}
                  placeholder="আপনার ফোন নম্বর লিখুন"
                />
              </label>
            </div>

            <div className="buy_price_address">
              <label htmlFor="">আপনার ঠিকানা লিখুন</label>
              <br />
              <textarea
                required
                {...register("address", { required: true })}
                placeholder="আপনার ঠিকানা লিখুন"
              >
                {" "}
              </textarea>
            </div>

            {isLoading ? (
              <ButtonLoading />
            ) : (
              <button className="btn-primary">Submit Now</button>
            )}
          </form>
          <button className="close_button" onClick={() => setOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuyModal;
