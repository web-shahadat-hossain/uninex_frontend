/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import DashboardLayout from "@/components/Layouts/DashboardLayout";
import { ReactElement, useState } from "react";
import css from "@/styles/dashboard.module.css";
import styles from "@/styles/progress_bar.module.css";
import { useProductPostMutation } from "@/redux/feature/product/ProductApi";
import ButtonLoading from "@/components/Share/ButtonLoading";
import toast from "react-hot-toast";

const UploadProduct = () => {
  const [description, setDescription] = useState("");
  const [featureRequests, setFeatureRequests] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [productPost, { isLoading: load, isSuccess, error }] =
    useProductPostMutation();

  // ✅ Cloudinary credentials
  const CLOUD_NAME = "dwqz8bows";
  const UPLOAD_PRESET = "lawyermanagementsystem";

  // 🖼️ Handle Image Upload to Cloudinary
  const imagesHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      setUploading(true);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (data.secure_url) {
        setImageUrl(data.secure_url);
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Image upload failed!");
      }
    } catch (err) {
      console.error("Image upload error:", err);
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  // 📝 Handle description
  const maxDescriptionLength = 350;
  const onDescriptionChange = (e: { target: { value: any } }) => {
    const inputValue = e.target.value;
    if (inputValue.length <= maxDescriptionLength) {
      setDescription(inputValue);
    }
  };

  // 🚀 Submit product
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const result = Object.fromEntries(data.entries());

    const selectedColors = Array.from(data.getAll("color"), (entry) =>
      entry.toString()
    );

    if (!imageUrl) {
      toast.error("Please upload an image before submitting!");
      return;
    }

    const productData: any = {
      title: result.title.toString(),
      price: result.price.toString(),
      description: result.description.toString(),
      category: result.category.toString(),
      subCategory: result.subCategory.toString(),
      image: imageUrl,
      stock: Number(result.stock),
      color: selectedColors,
      feature: featureRequests,
      discount: Number(result.discount),
      size: result?.size === "on" ? true : false,
    };

    productPost(productData);
    setDescription("");
    setFeatureRequests([]);
    form.reset();
    setImageUrl(null);
  };

  if (isSuccess) toast.success("Product added successfully!");
  if (error && "data" in error) {
    const errorData = error as { data: { message: string } };
    toast.error(errorData.data.message);
  }

  return (
    <section className={css.upload_products_container}>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>
            Title <small style={{ color: "Red" }}>*</small>
            <br />
            <input required type="text" name="title" />
          </label>
          <label>
            Price <small style={{ color: "Red" }}>*</small>
            <br />
            <input required type="text" name="price" />
          </label>
        </div>

        <div>
          <label>
            Category <small style={{ color: "Red" }}>*</small>
            <br />
            <select id="category" name="category" required>
              <option value="">-- Select --</option>
              <option value="clothing">Clothing</option>
              <option value="kitchen">Kitchen Organizers</option>
              <option value="attar">Attar</option>
              <option value="comboOfferss">Combo Offers</option>
              <option value="dawahCanvas">Dawah Canvasr</option>
              <option value="gadgets">Gadgets</option>
              <option value="flashSales">Flash Sales 🔥</option>
              <option value="offerList">Offer List</option>
              <option value="winterCollection">Winter Collection</option>
            </select>
          </label>

          <label>
            Sub Category <small style={{ color: "Red" }}>*</small>
            <br />
            <select id="SubCategory" name="subCategory" required>
              <option value="">-- Select --</option>
              <option value="jersey">Jersey</option>
              <option value="panjabi">Panjabi</option>
              <option value="borka">Borka</option>
              <option value="dawahJersey">Dawah Jersey</option>
              <option value="tShirt">T-shirt</option>
              <option value="premiumAttar">Premium Attar</option>
              <option value="comboGifts">Combo & Gifts</option>
              <option value="wholesaleAttar">Wholesale Attar</option>
              <option value="a4Size">A4 Size</option>
              <option value="a3Size">A3 Size</option>
              <option value="kids">Kids</option>
              <option value="sneaker">Sneaker</option>
              <option value="bag">Bag</option>
              <option value="shirtPants">Shirt & Pants</option>
              <option value="waistcoatCoaty">Waistcoat Coaty</option>
              <option value="waistcoatCoaty">Kitchen</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Size available
            <br />
            <input type="checkbox" id="myCheckbox" name="size" />
          </label>

          {uploading ? (
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}></div>
            </div>
          ) : (
            <label>
              Images <small style={{ color: "Red" }}>*</small>
              <br />
              <input onChange={imagesHandler} type="file" accept="image/*" />
            </label>
          )}
        </div>

        {imageUrl && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={imageUrl}
              alt="Preview"
              style={{ width: "150px", borderRadius: "8px" }}
            />
          </div>
        )}

        <div>
          <label>
            Quantity <small style={{ color: "Red" }}>*</small>
            <br />
            <input required type="number" name="stock" />
          </label>
          <label>
            Discount
            <br />
            <input type="number" name="discount" />
          </label>
        </div>

        <div>
          <label>
            Color <br />
            <select id="color-picker" name="color" multiple>
              <option value="purple">Purple (7 pcs)</option>
              <option value="pink">Pink (15 pcs)</option>
              <option value="red">Red (0 pcs)</option>
              <option value="grey">Grey (5 pcs)</option>
              <option value="light-green-mint">
                Light Green / Mint (10 pcs)
              </option>
              <option value="teal-green">Teal Green (0 pcs)</option>
              <option value="cream">Cream / Off White (13 pcs)</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Description (Max {maxDescriptionLength} characters)
            <br />
            <textarea
              name="description"
              value={description}
              onChange={onDescriptionChange}
              placeholder="Enter product description"
            />
          </label>
        </div>

        <div>
          <label>
            Features
            <br />
            <textarea
              name="feature"
              placeholder="Enter product features separated by commas"
              onChange={(e) => setFeatureRequests(e.target.value.split(","))}
            />
          </label>
        </div>

        {load ? (
          <ButtonLoading />
        ) : (
          <button className="btn-primary" type="submit">
            Submit Now
          </button>
        )}
      </form>
    </section>
  );
};

export default UploadProduct;

UploadProduct.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
