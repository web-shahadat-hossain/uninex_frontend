import { useGetProductsQuery } from "@/redux/feature/product/ProductApi";
import CategoriesHead from "./CategoriesHead";
import Loading from "../Share/Loading";
import Card from "./Card";

const RelatedProducts = ({ category }: any) => {
  const { data, isLoading } = useGetProductsQuery(category);
  const products = data?.data || [];
  return (
    <>
      <section className="flash">
        <div className="container">
          <CategoriesHead title={"Related Products"} />

          {isLoading ? <Loading /> : <Card filterProduct={products} />}
        </div>
      </section>
    </>
  );
};

export default RelatedProducts;
