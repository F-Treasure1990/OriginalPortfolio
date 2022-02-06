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

function App({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <Content Component={Component} pageProps={pageProps} router={router} />
    </Provider>
  );
}

const queryClient = new QueryClient();

function Content({ Component, pageProps, router }) {
  const Theme = useSelector(state => state.ThemeSlice.theme);
  return (
    <>
      <Head>
        <title> Fenton Treasure | Portfolio</title>
        <link rel="shortcut icon" type="image/png" href="FavIcon.png"></link>
      </Head>
      <ThemeProvider theme={MediaQ}>
        <ThemeProvider theme={Theme}>
          <GlobalReset />
          <MainNavbar />
          <QueryClientProvider client={queryClient}>
            <QuoteSection />
          </QueryClientProvider>

          <AnimatePresence exitBeforeEnter>
            <motion.div key={router.route} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
          <Footer />
          <CopyRight />
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
