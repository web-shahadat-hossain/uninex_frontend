import { IProduct } from "@/type/type";
import Card from "../UI/Card";
import CategoriesHead from "../UI/CategoriesHead";

const Attar = ({ attar }: { attar: IProduct[] }) => {
  return (
    <section className="flash">
      <div className="container">
        <CategoriesHead title={"Attar"} />
        <Card filterProduct={attar} />
      </div>
    </section>
  );
};

export default Attar;
