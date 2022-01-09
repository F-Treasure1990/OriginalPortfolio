import { store } from "../Store/store";
import { ThemeProvider } from "styled-components";
import { customTheme, palette } from "../styles/Theme";
import { Provider } from "react-redux";
import { GlobalReset } from "/styles/GlobalReset.jsx";
import "../styles/Global.css";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Content Component={Component} pageProps={pageProps} />
    </Provider>
  );
}

function Content({ Component, pageProps }) {
  return (
    <ThemeProvider theme={palette}>
      <GlobalReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
