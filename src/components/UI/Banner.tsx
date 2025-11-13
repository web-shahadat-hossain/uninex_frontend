import React, { Fragment } from "react";
import Slider from "react-slick";
import bn1 from "@/components/assets/home/banner1.png";
import Image from "next/image";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<
            unknown,
            string | React.JSXElementConstructor<unknown>
          >
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined
    ) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <section className="homeSlide contentWidth">
        <div className="container">
          <Slider {...settings}>
            <Fragment>
              <div className="hero_slide-banner">
                <Image
                  src={bn1}
                  alt="banner sectionUninex"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </Fragment>
            <Fragment>
              <div className="hero_slide-banner">
                <Image
                  src={bn1}
                  alt="banner sectionUninex"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </Fragment>
            <Fragment>
              <div className="hero_slide-banner">
                <Image
                  src={bn1}
                  alt="banner sectionUninex"
                  width={100}
                  height={100}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
            </Fragment>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Banner;
