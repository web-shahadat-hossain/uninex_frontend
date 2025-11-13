import css from "@/styles/productDetails.module.css";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useState } from "react";
import { useCart } from "../CartContext";

const ProductDetailContent = ({ product }: any) => {
  const { addToCart } = useCart();
  const [open, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>(""); // ✅ Color select state
  const router = useRouter();

  let price = product?.price;
  if (product?.discount) {
    price = (
      Number(product?.price) -
      (Number(product?.price) * Number(product?.discount)) / 100
    ).toFixed(2);
  }

  // ✅ Buy Now Function
  const handleBuyNow = () => {
    if (!product.size || selectedSize || !product.size) {
      if (product.color?.length > 0 && !selectedColor) {
        toast.error("Please select a color before buying.");
        return;
      }
      addToCart({
        ...product,
        selectedSize,
        selectedColor,
        discountPrice: Number(price),
      });
      router.push("/checkout");
    } else {
      toast.error("Please select a size before buying.");
    }
  };

  // ✅ Add to Cart Function
  const addToCartHandler = (product: any) => {
    if (product.color?.length > 0 && !selectedColor) {
      toast.error("Please select a color before adding to cart.");
      return;
    }
    addToCart({
      ...product,
      selectedSize,
      selectedColor,
      discountPrice: Number(price),
    });
    router.push("/cart");
  };

  return (
    <section>
      <section className={css.product_details_box}>
        <summary>
          <h5>
            {product?.category} <i className="fa-solid fa-angle-right"></i>{" "}
            {product?.subCategory} <i className="fa-solid fa-angle-right"></i>{" "}
            {product?.title}
          </h5>

          <h2>{product?.title}</h2>

          <div className={css.review_box}>
            <span>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </span>
            <span>(13 customer reviews)</span>
          </div>

          <h4 className={css.price}>
            Deal of the Day:{" "}
            {product?.discount ? (
              <>
                <del>৳ {product?.price}</del>{" "}
                <span>
                  ৳
                  {(
                    Number(product?.price) -
                    (Number(product?.price) * Number(product?.discount)) / 100
                  ).toFixed(2)}
                </span>
              </>
            ) : (
              <span>৳ {product?.price}</span>
            )}
          </h4>

          <p className={css.description}>{product.description}</p>

          <div className={css.product_data_info}>
            <p>
              Available:{" "}
              {product?.stock ? (
                <span> In Stock</span>
              ) : (
                <span style={{ color: "red" }}> Out of Stock</span>
              )}
            </p>

            {/* ✅ Size Selector */}
            {product.size && (
              <div className={css.size_chart}>
                Size:
                <select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  style={{ marginLeft: "5px" }}
                >
                  <option value="">Select Size</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
            )}

            {/* ✅ Color Selector */}
            {product.color && product.color.length > 0 && (
              <div className={css.color_chart}>
                Color:
                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  style={{ marginLeft: "5px" }}
                >
                  <option value="">Select Color</option>
                  {product.color.map((clr: string, idx: number) => (
                    <option key={idx} value={clr}>
                      {clr.charAt(0).toUpperCase() +
                        clr.slice(1).replace(/-/g, " ")}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div>
            <p className={css.quantity}>
              ফোনে অর্ডার করুন: <a href="tel:+8801960602760">+8801960602760</a>
            </p>
          </div>

          <div className={css.button_group}>
            {product?.stock ? (
              <>
                <button
                  onClick={handleBuyNow}
                  className="btn-primary"
                  style={{ backgroundColor: "black" }}
                >
                  Buy Now
                </button>
                <button
                  onClick={() => addToCartHandler(product)}
                  className="btn-primary"
                >
                  Add to Cart
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => toast.error("দুঃখিত এই পন্যটি এখন স্টক নেই")}
                  className="btn-primary"
                  style={{ backgroundColor: "black" }}
                >
                  Buy Now
                </button>
                <button
                  onClick={() => toast.error("দুঃখিত এই পন্যটি এখন স্টক নেই")}
                  className="btn-primary"
                >
                  Add to Cart
                </button>
              </>
            )}
          </div>
        </summary>
      </section>
    </section>
  );
};

export default ProductDetailContent;
