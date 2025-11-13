/* eslint-disable react/no-unescaped-entities */
import RootLayout from "@/components/Layouts/RootLayout";
import { ReactElement, useState } from "react";
import css from "@/styles/contact.module.css";
import Head from "next/head";
const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <Head>
        <title>
          Uninex - Contact Us - Your Ultimate E-commerce Destination for Attar,
          Jersey, Panjabi, Borka, Gadgets, Kids Essentials, Sneakers, and Bags
        </title>
        <meta
          name="description"
          content="Discover a world of style and elegance atUninex, the leading E-commerce platform. Explore our exquisite collection of Attar, trendy Jerseys, traditional Panjabis, modest Borkas, cutting-edge Gadgets, adorable Kids' fashion, exclusive Sneakers, and fashionable Bags"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <section className={css.banner}>
            <h2>Get in Touch With Us</h2>
            <p>We're here to answer any questions you may have.</p>
          </section>

          {/* Contact form */}
          <section className={css.contact_form}>
            <div className={css.form_container}>
              <h2>Your Details</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="phone">Phone: </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <label htmlFor="message">Message: </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" className={css.submit_button}>
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

contact.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout> {page} </RootLayout>;
};

export default contact;
