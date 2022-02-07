import { store } from "../Store/store";
import { ThemeProvider } from "styled-components";
import { Provider, useDispatch, useSelector } from "react-redux";
import { GlobalReset } from "/styles/GlobalReset.jsx";
import "../styles/Global.css";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import Footer from "../Components/Footer/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import QuoteSection from "../Components/QuoteSection/QuoteSection";
import CopyRight from "../Components/Copyright/CopyRight";
import { MediaQ } from "../styles/MediaQueries";
import Head from "next/head";
import ThemeMaster from "../Components/ThemeMaster";

const queryClient = new QueryClient();

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Fenton Treasure | Portfolio</title>
        <link rel="shortcut icon" type="image/png" href="FavIcon.png"></link>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={MediaQ}>
          <ThemeMaster>
            <GlobalReset />
            <MainNavbar />
            <QueryClientProvider client={queryClient}>
              <QuoteSection />
            </QueryClientProvider>
            <Component {...pageProps} />
            <Footer />
            <CopyRight />
          </ThemeMaster>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
