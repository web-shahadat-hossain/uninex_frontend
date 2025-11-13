import React, { ReactElement } from "react";
import styles from "@/styles/PrivacyPolicy.module.css";
import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>
          Uninex Online Shopping - Privacy Policy | Trusted Marketplace in
          Bangladesh
        </title>
        <meta
          name="description"
          content="Read Uninex Online Shopping’s Privacy Policy to understand how we collect, use, and protect your personal data. Shop confidently at Bangladesh’s trusted online marketplace for quality and affordable products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.privacyPolicyContainer}>
        <h1 className={styles.heading}>
          Uninex Online Shopping Privacy Policy
        </h1>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Uninex Online Shopping</strong>. This Privacy
            Policy outlines how we collect, use, disclose, and protect your
            personal information when you visit our website and use our
            services. By accessing or using our services, you consent to the
            practices described in this Privacy Policy.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We collect various types of information when you use our website,
            including personal information (name, email address, contact
            details), transaction information, log and device information, and
            usage information.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use your information for the following purposes: to process and
            fulfill your orders, communicate with you regarding your orders,
            improve and optimize our website and services, respond to your
            inquiries, and comply with legal obligations.
          </p>
        </section>

        <section>
          <h2>4. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties. However, we may share your information
            with trusted third parties who assist us in operating our website or
            servicing you.
          </p>
        </section>

        <section>
          <h2>5. Security</h2>
          <p>
            We implement a variety of security measures to protect your personal
            information. However, please note that no method of transmission
            over the internet or electronic storage is completely secure.
          </p>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience on our website.
            You may choose to disable cookies through your browser settings, but
            this may affect some features and functionality of the site.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or the content of such
            external websites.
          </p>
        </section>

        <section>
          <h2>8. Your Choices</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. If you have any concerns or requests regarding your
            data, please contact us at{" "}
            <a href="mailto:info@uninex.com.bd">info@uninex.com.bd</a>.
          </p>
        </section>

        <section>
          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page, and the effective date will be updated
            accordingly.
          </p>
        </section>

        <section>
          <h2>10. Contact Information</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at{" "}
            <a href="mailto:info@uninex.com.bd">info@uninex.com.bd</a> or visit
            us at:
          </p>
          <address>
            <strong>Uninex Online Shopping</strong> <br />
            53, Noyapara, Donia College Road, Jatrabari, Dhaka, Bangladesh
            <br />
            Phone: <a href="tel:+8801960602760">+880 1960-602760</a> <br />
            Website: <a href="https://uninex.com.bd">uninex.com.bd</a>
          </address>
        </section>
      </div>
    </>
  );
};

PrivacyPolicy.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default PrivacyPolicy;
