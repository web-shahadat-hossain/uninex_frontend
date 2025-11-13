import { IProduct } from "@/type/type";
import Card from "../UI/Card";
import CategoriesHead from "../UI/CategoriesHead";

const Borka = ({ borka }: any) => {
  return (
    <section className="flash">
      <div className="container">
        <CategoriesHead title={"Borka"} />
        <Card filterProduct={borka} />
      </div>
    </section>
  );
};

export default Borka;
