import { IProduct } from "@/type/type";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const Card = ({ filterProduct }: { filterProduct: IProduct[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 881,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 504,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {filterProduct?.map((product: IProduct) => (
          <div className="box" key={product?._id}>
            <div className="product mtop">
              <Link href={`/product/${product?._id}`}>
                <div className="img">
                  {product?.stock >= 0 && product?.discount ? (
                    <span className="discount">-10% Off</span>
                  ) : (
                    ""
                  )}

                  {product?.stock === 0 && (
                    <span className="discount" style={{ background: "red" }}>
                      Sold Out
                    </span>
                  )}

                  <Image
                    src={product?.image}
                    alt={product?.title}
                    width={100}
                    height={100}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href={`/product/${product?._id}`}>
                <div className="product-details">
                  <h3>{product?.title}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    {product?.discount ? (
                      <h4>
                        {" "}
                        <del>৳ {product?.price}</del>{" "}
                        <span>
                          ৳{" "}
                          {(
                            Number(product?.price) -
                            (Number(product?.price) *
                              Number(product?.discount)) /
                              100
                          ).toFixed(2)}
                        </span>{" "}
                      </h4>
                    ) : (
                      <h4>
                        <span>৳ {product?.price}</span>{" "}
                      </h4>
                    )}

                    {/* step : 3  
                   if hami le button ma click garryo bahne 
                  */}
                    <button>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Card;
