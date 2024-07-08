// pages/_app.js

import Layout from "@/Components/Layout";
import "../styles/globals.css"; // Ensure this path is correct

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
