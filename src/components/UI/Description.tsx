const Description = ({ product }: any) => {
  console.log(product);
  return (
    <>
      {product?.feature?.map((info: string, i: number) => (
        <p key={i}>
          {" "}
          <span>🔸</span> {info}
        </p>
      ))}
    </>
  );
};

export default Description;
