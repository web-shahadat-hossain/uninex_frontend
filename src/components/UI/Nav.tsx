import Link from "next/link";
import { useState } from "react";
import Categories from "./Categories";

const Nav = () => {
  const [toggle, setHoveredToggle] = useState(false);
  const handleMouseEnter = () => {
    setHoveredToggle(true);
  };
  const handleMouseLeave = () => {
    setHoveredToggle(false);
  };

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div
            className="catgrories d_flex"
            onMouseEnter={() => handleMouseEnter()}
          >
            <small>
              <span className="fa-solid fa-border-all"></span>
              BROWSE CATEGORIES
            </small>
            <h4>
              <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink_items">
            <ul className="link f_flex capitalize">
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/feature-products">Feature Products </Link>
              </li>

              <li>
                <Link href="/contact">Contact US</Link>
              </li>
            </ul>
          </div>

          {toggle && (
            <div className="categories_toggle" onMouseLeave={handleMouseLeave}>
              {" "}
              <Categories />{" "}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Nav;
