import { IProduct } from "@/type/type";
import Card from "../UI/Card";
import CategoriesHead from "../UI/CategoriesHead";

const Jersey = ({ jersey }: any) => {
  return (
    <section className="flash">
      <div className="container">
        <CategoriesHead title={"Jersey"} />
        <Card filterProduct={jersey} />
      </div>
    </section>
  );
};

export default Jersey;
