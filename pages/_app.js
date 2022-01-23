import { store } from "../Store/store";
import { ThemeProvider } from "styled-components";
import { palette } from "../styles/Theme";
import { Provider } from "react-redux";
import { GlobalReset } from "/styles/GlobalReset.jsx";
import "../styles/Global.css";
import MainNavbar from "../Components/MainNavbar/MainNavbar";
import Footer from "../Components/Footer/Footer";
import CopyRight from "../Components/Copyright/CopyRight";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import QuoteSection from "../Components/QuoteSection/QuoteSection";

function App({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <Content Component={Component} pageProps={pageProps} router={router} />
    </Provider>
  );
}
const queryClient = new QueryClient();
function Content({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={palette}>
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
  );
}

export default App;
