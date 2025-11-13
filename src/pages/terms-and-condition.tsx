import RootLayout from "@/components/Layouts/RootLayout";
import styles from "@/styles/TermsConditions.module.css";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>
          Uninex Online Shopping - Terms & Conditions | Trusted E-commerce
          Platform in Bangladesh
        </title>
        <meta
          name="description"
          content="Review the Terms and Conditions of Uninex Online Shopping. Learn about our policies regarding account use, payments, shipping, returns, and privacy to ensure a safe and reliable online shopping experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`container ${styles.termsContainer}`}>
        <h2 className={styles.heading}>
          Uninex Online Shopping - Terms & Conditions
        </h2>
        <p>Last Updated: November 12, 2025</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            Welcome to <strong>Uninex Online Shopping</strong>. By accessing or
            using our website (the “Site”) and related services, you agree to be
            bound by these Terms and Conditions (“Terms”). If you do not agree
            with these Terms, please discontinue using our services.
          </p>
        </section>

        <section>
          <h2>2. Scope of Services</h2>
          <p>
            Uninex Online Shopping operates an e-commerce platform offering a
            wide variety of products, including Attar, Jerseys, Panjabis,
            Borkas, Gadgets, Kids’ essentials, Sneakers, Bags, and more
            (collectively referred to as the “Products”).
          </p>
        </section>

        <section>
          <h2>3. Account Registration</h2>
          <p>
            To access certain features, you may need to create an account. You
            agree to provide accurate, current, and complete information during
            registration. You are responsible for maintaining the security of
            your account credentials and for all activities that occur under
            your account.
          </p>
        </section>

        <section>
          <h2>4. Product Information</h2>
          <p>
            We strive to ensure that all product details, prices, and
            availability are accurate. However, Uninex Online Shopping does not
            warrant that product descriptions or other content on the Site are
            error-free. We reserve the right to correct any errors or update
            information without prior notice.
          </p>
        </section>

        <section>
          <h2>5. Ordering and Payment</h2>
          <p>
            By placing an order, you confirm that all information provided is
            true and accurate. Uninex reserves the right to cancel or refuse any
            order due to issues such as product unavailability, pricing errors,
            or payment authorization problems.
          </p>
          <p>
            Payment methods and details are specified during checkout. By
            submitting payment information, you confirm that you have the legal
            right to use the selected payment method.
          </p>
        </section>

        <section>
          <h2>6. Shipping and Delivery</h2>
          <p>
            We strive to deliver all orders promptly. Shipping times may vary
            depending on your location and other logistical factors. Uninex
            Online Shopping is not responsible for delays or damages caused by
            third-party couriers or unforeseen circumstances.
          </p>
        </section>

        <section>
          <h2>7. Returns and Refunds</h2>
          <p>
            For details regarding returns, exchanges, and refunds, please visit
            our{" "}
            <Link href="/return-policy" style={{ color: "blue" }}>
              Return & Exchange Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>8. Privacy Policy</h2>
          <p>
            Your use of the Site is also governed by our{" "}
            <Link href="/privacy-policy" style={{ color: "blue" }}>
              Privacy Policy
            </Link>
            , which explains how we collect, use, and protect your personal
            data.
          </p>
        </section>

        <section>
          <h2>9. Intellectual Property</h2>
          <p>
            All website content, including text, images, logos, graphics, and
            product descriptions, is the property of Uninex Online Shopping and
            protected by applicable copyright and trademark laws. Unauthorized
            reproduction or use of any materials is strictly prohibited.
          </p>
        </section>

        <section>
          <h2>10. Limitation of Liability</h2>
          <p>
            Uninex Online Shopping will not be liable for any indirect,
            incidental, or consequential damages resulting from the use or
            inability to use our services or products purchased through our
            platform.
          </p>
        </section>

        <section>
          <h2>11. Changes to Terms</h2>
          <p>
            We may update or modify these Terms at any time without prior
            notice. It is your responsibility to review this page periodically.
            Continued use of the Site after updates constitutes your acceptance
            of the revised Terms.
          </p>
        </section>

        <section>
          <h2>12. Contact Information</h2>
          <div className={styles.contactInfo}>
            <p>
              For any questions or concerns regarding these Terms and
              Conditions, please contact us:
            </p>
            <p>
              <strong>Uninex Online Shopping</strong> <br />
              53, Noyapara, Donia College Road, Jatrabari, Dhaka, Bangladesh
              <br />
              Email: <a href="mailto:info@uninex.com.bd">
                info@uninex.com.bd
              </a>{" "}
              <br />
              Phone: <a href="tel:+8801960602760">+8801960602760</a> <br />
              Website:{" "}
              <a href="https://uninex.com.bd" target="_blank">
                uninex.com.bd
              </a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

TermsAndConditions.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default TermsAndConditions;
