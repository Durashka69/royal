import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "../styles/ResidentialSlider.css";
import "../styles/LandscapingSlider.css";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading/Loading";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 5400);
  }, []);

  return (
    <>
      {/* {loading ? ( */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* ) : (
        <Loading />
      )} */}
    </>
  );
}
