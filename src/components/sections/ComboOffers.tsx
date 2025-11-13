import { IProduct } from "@/type/type";
import Card from "../UI/Card";
import CategoriesHead from "../UI/CategoriesHead";

const ComboOffers = ({ comboOffers }: any) => {
  return (
    <section className="flash">
      <div className="container">
        <CategoriesHead title={"Featured Products"} />
        <Card filterProduct={comboOffers} />
      </div>
    </section>
  );
};

export default ComboOffers;
