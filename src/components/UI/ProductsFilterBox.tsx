import {
  setCategory,
  subCategory,
  setPriceRange,
} from "@/redux/feature/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import css from "@/styles/products.filter.module.css";

const ProductsFilterBox = () => {
  const { price } = useAppSelector((state) => state.productFilter);
  const dispatch = useAppDispatch();
  const handlePriceChange = (e: any) => {
    dispatch(setPriceRange(Number(e.target.value)));
  };

  const companyHandlerChange = (e: any) => {
    dispatch(subCategory(e.target.value));
  };

  return (
    <aside className={css.products_filter}>
      <div className={css.filter_search}>
        <form>
          <input type="text" name="text" placeholder="Search" />
        </form>
      </div>
      <div className={css.filter_category}>
        <h3>Category</h3>
        <div className={css.filter_category_button}>
          <button
            type="button"
            name="category"
            value="all"
            className={css.active}
            onClick={() => dispatch(setCategory("all"))}
          >
            all
          </button>
          <button
            type="button"
            name="category"
            value="winterCollection"
            onClick={() => dispatch(setCategory("Winter Collection"))}
          >
            Winter Collection
          </button>
          <button
            type="button"
            name="category"
            value="clothing"
            onClick={() => dispatch(setCategory("Clothing"))}
          >
            Clothing
          </button>
          <button
            type="button"
            name="category"
            value="attar"
            onClick={() => dispatch(setCategory("Attar"))}
          >
            Attar
          </button>
          <button
            type="button"
            name="category"
            value="Kitchen"
            onClick={() => dispatch(setCategory("Kitchen"))}
          >
            Kitchen Organizers
          </button>
          <button
            type="button"
            name="category"
            value="Combo Offers"
            onClick={() => dispatch(setCategory("comboOffers"))}
          >
            Combo Offers
          </button>
          <button
            type="button"
            name="category"
            value="dawahCanvas"
            onClick={() => dispatch(setCategory("Dawah Canvas"))}
          >
            Dawah Canvas
          </button>
          <button
            type="button"
            name="category"
            value="gadgets"
            onClick={() => dispatch(setCategory("Gadgets"))}
          >
            Gadgets
          </button>
          <button
            type="button"
            name="category"
            value="flashSales"
            onClick={() => dispatch(setCategory("Flash Sales"))}
          >
            Flash Sales 🔥
          </button>
          <button
            type="button"
            name="category"
            value="offerList"
            onClick={() => dispatch(setCategory("Offer List"))}
          >
            Offer List📣
          </button>
        </div>
      </div>
      <div className={css.filter_company}>
        <h3>Sub Category </h3>
        <form>
          <select
            onChange={companyHandlerChange}
            name="subCategory"
            id="subCategory"
            className="filter-company--select"
          >
            <option value="all">all</option>
            <option value="jersey">Jersey</option>
            <option value="panjabi">Panjabi</option>
            <option value="borka">Borka</option>
            <option value="dawahJersey">Dawah Jersey</option>
            <option value="tShirt">T-shirt</option>
            <option value="premiumAttar">Premium Attar</option>
            <option value="comboGifts">Combo & Gifts</option>
            <option value="wholesaleAttar">Wholesale Attar</option>
            <option value="a4Size">A4 Size</option>
            <option value="a3Siz">A3 Size</option>
            <option value="kids">Kids</option>
            <option value="sneaker">Sneaker</option>
            <option value="bag">Bag</option>
            <option value="shirtPants">Shirt & Pants</option>
            <option value="waistcoatCoaty">Waistcoat Coaty</option>
            <option value="Kitchen">Kitchen</option>
          </select>
        </form>
      </div>
      {/* <div className={`${css.filter_colors} ${css.colors}`}>
        <h3>Colors</h3>
        <div className={css.filter_color_style}>
          <button
            type="button"
            value="all"
            name="color"
            className={css.color_all_style}
          >
            all
          </button>
          <button
            type="button"
            value="black"
            name="color"
            className={css.btnStyle}
            style={{ backgroundColor: "black" }}
          ></button>
          <button
            type="button"
            value="orange"
            name="color"
            className={css.btnStyle}
            style={{ backgroundColor: "orange" }}
          ></button>
          <button
            type="button"
            value="red"
            name="color"
            className={css.btnStyle}
            style={{ backgroundColor: "red" }}
          ></button>
          <button

            type="button"
            value="silver"
            name="color"
            className={css.btnStyle}
            style={{ backgroundColor: "silver" }}
          ></button>
          <button
            type="button"
            value="green"
            name="color"
            className={css.btnStyle}
            style={{ backgroundColor: "green" }}
          ></button>
        </div>
      </div> */}
      <div className={css.filter_price}>
        <h3>Price</h3>
        <p>৳{price}</p>
        <input
          type="range"
          id="vol"
          name="vol"
          min="300"
          max="10000"
          onChange={handlePriceChange}
        />
      </div>
    </aside>
  );
};

export default ProductsFilterBox;
