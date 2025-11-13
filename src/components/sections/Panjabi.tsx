import { IProduct } from "@/type/type";
import Card from "../UI/Card";
import CategoriesHead from "../UI/CategoriesHead";

const Panjabi = ({ panjabi }: any) => {
  return (
    <section className="flash">
      <div className="container">
        <CategoriesHead title={"Panjabi"} />
        <Card filterProduct={panjabi} />
      </div>
    </section>
  );
};

export default Panjabi;
