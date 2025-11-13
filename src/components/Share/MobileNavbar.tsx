import { useState } from "react";
import Link from "next/link";
import logo from "@/components/assets/logo/logo.png";
import Image from "next/image";
import profile from "@/components/assets/logo/profile.jpg";
import { useCart } from "../CartContext";

const MobileNavbar = ({ auth }: any) => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      <section>
        <div className="mobile-navbar-container">
          <div>
            <Link href="/">
              <Image src={logo} alt="baragah shop" width={250} height={80} />
            </Link>
          </div>
          <button onClick={() => setOpen(true)}>
            {open ? (
              <i className="fa-solid fa-xmark "></i>
            ) : (
              <i className="fa-solid fa-bars text-lg " id="bar"></i>
            )}
          </button>
        </div>
        {/* <div className="mobile_nav_search">
        <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search for products..." />
            <span><i className="fa fa-search"></i></span>
      </div>
        </div> */}
        {/* Mobile Menu Items */}

        <div className={`popupMobileMenu ${open && "menuOpen"}  `}>
          <div className="menuInner">
            <div className="navigationInnerMenu">
              <div className="navigationInnerMenu-logo">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="baragah shop"
                    width={250}
                    height={80}
                  />
                </Link>
              </div>

              <ul>
                <li onClick={() => setOpen(false)}>
                  <Link href="/" className="mobile-nav-items">
                    Home
                  </Link>
                </li>

                <li onClick={() => setOpen(false)}>
                  <Link href="/feature-products" className="mobile-nav-items">
                    Feature Product
                  </Link>
                </li>
                {/* {
                <CategoryMenu setOpen={setOpen}/>
              } */}

                <li onClick={() => setOpen(false)}>
                  <Link href="/contact" className="mobile-nav-items">
                    Contact US
                  </Link>
                </li>

                <li onClick={() => setOpen(false)}>
                  <div
                    className="icon f_flex width"
                    style={{ marginTop: "30px" }}
                  >
                    {auth ? (
                      <Link href="/dashboard">
                        <Image
                          src={profile}
                          className=" icon-circle"
                          alt=""
                          style={{ cursor: "pointer", marginRight: "10px" }}
                        />
                      </Link>
                    ) : (
                      <Link href="/login">
                        {" "}
                        <i
                          className="fa fa-user icon-circle"
                          style={{ marginRight: "10px" }}
                        ></i>
                      </Link>
                    )}

                    <div className="cart">
                      <Link href="/cart">
                        <i className="fa fa-shopping-bag icon-circle"></i>
                        <span> {cart.length}</span>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setOpen(false)}
              className=" toggleButton     "
            >
              <i className="fa-solid fa-xmark "></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileNavbar;
