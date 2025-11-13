import Link from "next/link";
import Image from "next/image";
import logo from "@/components/assets/logo/logo.png";
import profile from "@/components/assets/logo/profile.jpg";
import { useCart } from "../CartContext";
const Search = ({ auth }: any) => {
  const { cart } = useCart();

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <Link href="/">
            <div className="logo width">
              <Image src={logo} alt="baragah shop" width={350} height={60} />
            </div>
          </Link>

          <div className="search-box f_flex">
            {/* <i className="fa fa-search"></i> */}
            <input type="text" placeholder="Search for products..." />
            <span>
              <i className="fa fa-search"></i>
            </span>
          </div>

          <div className="icon f_flex width">
            <div>
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
            </div>
            <div className="cart">
              <Link href="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                {/* <span>{products?.length}</span> */}
                <span>{cart.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
