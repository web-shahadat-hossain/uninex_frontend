import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import payment from "@/components/assets/home/py.png";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    setCurrentYear(new Date().getFullYear());
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="footer">
      <div className="content">
        <div className="services">
          <h4>Customer Care</h4>
          <p>
            <Link href="/contact">Help Center</Link>
          </p>
          <p>
            <Link href="/privacy-policy">Privacy & policy</Link>
          </p>
          <p>
            <Link href="/return-policy">Returns & Refunds</Link>
          </p>
          <p>
            <Link href="/terms-and-condition">Terms & Conditions</Link>
          </p>
        </div>
        <div className="social-media">
          <h4>Social</h4>

          <p>
            <a
              href="https://www.facebook.com/profile.php?id=61580465932716"
              target="_black"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </p>
          {/* <p>
            <a href="https://www.instagram.com/baraqahshop1/" target="_black">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </p>
          <p>
            <a href="https://www.tiktok.com/@baraqahshop1" target="_black">
              <i className="fab fa-tiktok"></i> TikTok
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/@baraqahshop1" target="_black">
              <i className="fab fa-youtube"></i> YouTube
            </a>
          </p> */}
        </div>
        <div className="links">
          <h4>Quick links</h4>
          <p>
            <Link href="/">Home</Link>
          </p>
          <p>
            <Link href="/feature-products">Products</Link>
          </p>
          <p>
            <Link href="/contact">Contact</Link>
          </p>
        </div>
        <div className="details">
          <h4 className="address">Address</h4>
          <p>Dhaka, Bangladesh</p>
          <h4 className="mobile">Mobile</h4>
          <p>
            <a href="#">+8801960602760</a>
          </p>
          <h4 className="mail">Email</h4>
          <p>
            <a href="mailto:info@rifatenterprise.com">
              social.globalitmaster@gmail.com
            </a>
          </p>
        </div>
      </div>
      <footer>
        <div className="container">
          <Image
            src={payment}
            alt="logo"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <hr />©<span> {currentYear} </span>
        <a
          href="https://webnexit.com/"
          target="black"
          style={{ color: "#fff" }}
        >
          Uninex
        </a>
        .
      </footer>
    </div>
  );
};

export default Footer;
