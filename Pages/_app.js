import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>TechnoTrench</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
