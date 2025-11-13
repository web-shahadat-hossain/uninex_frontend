import Link from "next/link";
import { useState } from "react";
type Category =
  | "Winter Collection"
  | "Clothing"
  | "Attar"
  | "Others"
  | "Flash Sales"
  | "Dawah Canvas"
  | "Kitchen";

const Categories = ({ setHoveredToggle }: any) => {
  const [hoveredCategory, setHoveredCategory] = useState<Category | null>(null);
  const handleMouseEnter = (category: Category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };
  const getCategoryHoverContent = () => {
    switch (hoveredCategory) {
      case "Winter Collection":
        return (
          <>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "jacket" },
                }}
              >
                <span>Jacket</span>
              </Link>
            </div>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "shawl" },
                }}
              >
                <span>Shawl</span>
              </Link>
            </div>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "sublimationJacket" },
                }}
              >
                <span>Sublimation Jacket</span>
              </Link>
            </div>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "hoodie" },
                }}
              >
                <span>Hoodie</span>
              </Link>
            </div>
            <div className="box f_flex">
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "fullSleeveJersey" },
                }}
              >
                <span>Full Sleeve Jersey</span>
              </Link>
            </div>
          </>
        );
      case "Clothing":
        return (
          <>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "panjabi" },
                }}
              >
                <span>Panjabi</span>
              </Link>
            </div>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "dawahJersey" },
                }}
              >
                <span>Dawah Jersey</span>
              </Link>
            </div>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "tShirt" },
                }}
              >
                <span>T-shirt</span>
              </Link>
            </div>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "poloShirt" },
                }}
              >
                <span>Polo Shirt</span>
              </Link>
            </div>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "borka" },
                }}
              >
                <span>Borka</span>
              </Link>
            </div>
          </>
        );
      case "Attar":
        return (
          <>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "premiumAttar" },
                }}
              >
                {" "}
                <span>Premium Attar</span>
              </Link>
            </div>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "comboGifts" },
                }}
              >
                {" "}
                <span>Combo & Gifts</span>
              </Link>
            </div>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "wholesaleAttar" },
                }}
              >
                {" "}
                <span>Wholesale Attar</span>
              </Link>
            </div>
          </>
        );
      case "Dawah Canvas":
        return (
          <>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "a4Size" },
                }}
              >
                <span>A4 Size</span>
              </Link>
            </div>
            <div className="box f_flex" style={{ marginBottom: "10px" }}>
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "a3Size" },
                }}
              >
                <span>A3 Size</span>
              </Link>
            </div>
          </>
        );
      case "Others":
        return (
          <>
            <div className="box f_flex">
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "kids" },
                }}
              >
                <span>Kids</span>
              </Link>
            </div>
            <div className="box f_flex">
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "sneaker" },
                }}
              >
                <span>Sneaker</span>
              </Link>
            </div>
            <div className="box f_flex">
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "bag" },
                }}
              >
                <span>Bag</span>
              </Link>
            </div>
          </>
        );

      case "Flash Sales":
        return (
          <>
            <div className="box f_flex">
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "shirtPants" },
                }}
              >
                <span>Shirt & Pants</span>
              </Link>
            </div>
            <div className="box f_flex">
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "waistcoatCoaty" },
                }}
              >
                <span>Waistcoat (Coaty) </span>
              </Link>
            </div>
            <div className="box f_flex">
              <Link
                href={{
                  pathname: "/feature-products",
                  query: { sub_category: "panjabi" },
                }}
              >
                <span>Panjabi</span>
              </Link>
            </div>
          </>
        );

      // Add cases for other categories

      default:
        return null;
    }
  };
  return (
    <>
      <div className="category" onMouseLeave={handleMouseLeave}>
        <Link
          href={{
            pathname: "/feature-products",
            query: { category: "winterCollection" },
          }}
        >
          <div
            className="box f_flex"
            onMouseEnter={() => handleMouseEnter("Winter Collection")}
          >
            <span>Winter Collection</span>
            <span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </Link>
        <Link
          href={{
            pathname: "/feature-products",
            query: { category: "clothing" },
          }}
        >
          <div
            className="box f_flex"
            onMouseEnter={() => handleMouseEnter("Clothing")}
          >
            <span>Clothing</span>
            <span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </Link>
        <Link
          href={{ pathname: "/feature-products", query: { category: "attar" } }}
        >
          {" "}
          <div
            className="box f_flex"
            onMouseEnter={() => handleMouseEnter("Attar")}
          >
            <span>Attar</span>
            <span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </Link>
        <Link
          href={{
            pathname: "/feature-products",
            query: { category: "comboOffers" },
          }}
        >
          <div
            className="box f_flex"
            onMouseEnter={() => setHoveredCategory(null)}
          >
            <span>Combo Offers</span>
            {/* <span><i className="fa-solid fa-angle-right"></i></span> */}
          </div>
        </Link>
        {/* <Link
          href={{
            pathname: "/feature-products",
            query: { category: "dawahCanvas" },
          }}
        >
          <div
            className="box f_flex"
            onMouseEnter={() => handleMouseEnter("Dawah Canvas")}
          >
            <span>Dawah Canvas</span>
            <span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </Link> */}
        <Link
          href={{
            pathname: "/feature-products",
            query: { category: "gadgets" },
          }}
        >
          <div
            className="box f_flex"
            onMouseEnter={() => setHoveredCategory(null)}
          >
            <span> Gadgets</span>
          </div>
        </Link>
        <Link
          href={{
            pathname: "/feature-products",
            query: { category: "Kitchen" },
          }}
        >
          <div
            className="box f_flex"
            onMouseEnter={() => setHoveredCategory(null)}
          >
            <span> Kitchen Organizers</span>
          </div>
        </Link>
        <Link
          href={{
            pathname: "/feature-products",
            query: { category: "others" },
          }}
        >
          {" "}
          <div
            className="box f_flex"
            onMouseEnter={() => handleMouseEnter("Others")}
          >
            <span>Others</span>
            <span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </Link>
        <Link
          href={{
            pathname: "/feature-products",
            query: { category: "flashSales" },
          }}
        >
          {" "}
          <div
            className="box f_flex"
            onMouseEnter={() => handleMouseEnter("Flash Sales")}
          >
            <span> Flash Sales 🔥</span>
            <span>
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </div>
        </Link>
        <Link
          href={{
            pathname: "/feature-products",
            query: { category: "offerList" },
          }}
        >
          <div
            className="box f_flex last_box"
            onMouseEnter={() => setHoveredCategory(null)}
          >
            <span> Offer List📣</span>
          </div>
        </Link>

        <div>
          {hoveredCategory && (
            <div className="category_hover_popup ">
              {getCategoryHoverContent()}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Categories;
