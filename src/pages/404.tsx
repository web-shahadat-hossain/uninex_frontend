import Head from "next/head";
import Link from "next/link";
// import { useRouter } from "next/router";

const NotFoundPage = () => {
  // const router = useRouter();

  // setTimeout(()=>{
  //     router.push("/")
  // },3000)
  return (
    <>
      <Head>
        <title>Baraqah Shop. Not Found</title>
        <meta
          name="description"
          content="This is news portal ofUninex. made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="page_404">
        <h2>Ooops! Error 404</h2>
        <p>Sorry, this page does not exist or temporarily unavailable.</p>
        <Link href="/">
          <button>Back To Homepage</button>
        </Link>
      </section>
    </>
  );
};

export default NotFoundPage;
