import css from "@/styles/products.filter.module.css";
import ProductCard from "../UI/ProductCard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setPriceRange } from "@/redux/feature/product/productSlice";
import { useState } from "react";

const ProductsFilterCard = ({ products }: any) => {
  const [grid, setGrid] = useState(1);
  const { category, subCategory, price } = useAppSelector(
    (state) => state.productFilter
  );
  const dispatch = useAppDispatch();
  const filterProducts = products?.filter(
    (product: { category: string; price: number; subCategory: string }) => {
      return (
        (category === "all"
          ? {}
          : product?.category?.toLowerCase() === category?.toLowerCase()) &&
        (subCategory === "all"
          ? {}
          : product?.subCategory?.toLowerCase() ==
            subCategory?.toLowerCase()) &&
        Number(product.price) <= Number(price)
      );
    }
  );

  const companyHandlerChange = (e: any) => {
    dispatch(setPriceRange(Number(e.target.value)));
  };

  return (
    <div className={css.products_card}>
      <nav className={css.navbar}>
        <div className={css.navbar_buttons}>
          <button
            onClick={() => setGrid(1)}
            className={`${grid === 1 ? "active" : " "}  sort-btn`}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
            </svg>
          </button>
          <button
            className={`${grid === 2 ? "active" : " "}  sort-btn`}
            onClick={() => setGrid(2)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </button>
        </div>
        <div className={css.nav_product_data}>
          <p>{filterProducts?.length} Product Available</p>
        </div>
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              onChange={companyHandlerChange}
              name="sort"
              id="sort"
              className="sort-selection--style"
            >
              <option value="1000">Price(lowest)</option>
              <option value="2000">Price(highest)</option>
              <option value="10000">Price(a-z)</option>
            </select>
          </form>
        </div>
      </nav>

      <>
        {filterProducts?.length === 0 ? (
          <p className={css.no_match_found_message}>
            {" "}
            <i className="fa-solid fa-triangle-exclamation"></i> No products
            were found matching your selection.
          </p>
        ) : (
          <div
            className={` ${grid === 2 ? "product-content " : "grid1"}`}
            style={{ marginTop: "80px" }}
          >
            <ProductCard filterProduct={filterProducts} />
          </div>
        )}
      </>
    </div>
  );
};

export default ProductsFilterCard;
