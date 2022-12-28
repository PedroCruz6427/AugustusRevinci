import "../styles/globals.css";
import { useState, createContext } from "react";
import AppContext from "../components/AppContext";

function MyApp({ Component, pageProps }) {
  const [nameContext, setNameContext] = useState("");
  const [watchDescription, setWatchDescription] = useState(
    "watchDescriptionHere"
  );
  const [watchPrice, setWatchPrice] = useState("watchPriceHere");
  const [cartListFinal, setCartListFinal] = useState([]);
  return (
    <AppContext.Provider
      value={{
        nameContext,
        setNameContext,
        watchDescription,
        setWatchDescription,
        watchPrice,
        setWatchPrice,
        cartListFinal,
        setCartListFinal,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
