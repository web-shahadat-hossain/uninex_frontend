import React, { ReactElement } from "react";
import styles from "@/styles/ReturnPolicy.module.css";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const ReturnPolicy = () => {
  return (
    <>
      <Head>
        <title>
          Uninex Online Shopping - Return & Exchange Policy | Trusted E-commerce
          Platform in Bangladesh
        </title>
        <meta
          name="description"
          content="Read Uninex Online Shopping’s Return & Exchange Policy to understand how we handle damaged, wrong, or replacement products. Shop confidently with Bangladesh’s most reliable online marketplace."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.returnPolicyContainer}>
        <h1 className={styles.heading}>Return & Exchange Policy</h1>

        <section>
          <h2>1. Reporting Damaged or Wrong Products</h2>
          <p>
            If you receive any damaged or incorrect product, please contact us
            within <strong>03 working days</strong> of receiving your parcel. To
            resolve your issue quickly, you may be required to fill out a short
            claim form or provide order details.
          </p>
          <div className={styles.contactInfo}>
            <p>
              Email: <a href="mailto:info@uninex.com.bd">info@uninex.com.bd</a>
            </p>
            <p>
              Facebook Messenger:{" "}
              <a
                href="https://www.facebook.com/uninexshop"
                target="_blank"
                rel="noopener noreferrer"
              >
                Uninex Online Shopping
              </a>
            </p>
            <p>Mobile: +8801960602760</p>
          </div>
        </section>

        <section>
          <h2>2. Unboxing Proof</h2>
          <p>
            For any return or exchange request, please keep an{" "}
            <strong>unboxing video or photo proof</strong> of your parcel. This
            helps us verify the issue and provide a faster resolution.
          </p>
        </section>

        <section>
          <h2>3. Exchange of Undamaged/Correct Products</h2>
          <p>
            If you wish to exchange an undamaged or correct product (for size or
            style reasons), a <strong>2X delivery charge</strong> will be
            applicable for pickup and redelivery.
          </p>
        </section>

        <section>
          <h2>4. Stock Clearance & Promotional Offers</h2>
          <p>
            Please note that{" "}
            <strong>return and exchange policies do not apply</strong>
            to items sold under stock clearance or special promotional offers.
            These sales are considered final and depend entirely on available
            stock.
          </p>
        </section>

        <section>
          <h2>5. Our Commitment</h2>
          <p>
            At <strong>Uninex Online Shopping</strong>, customer satisfaction is
            our top priority. We aim to ensure every product reaches you in
            perfect condition and provide assistance in the rare cases where
            issues arise.
          </p>
        </section>
      </div>
    </>
  );
};

ReturnPolicy.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default ReturnPolicy;
