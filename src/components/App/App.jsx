import styles from "./App.module.css";
import Header from "../Header/Header";
import AddRoutes from "../routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItems } from "../../store/Items/ItemsSlice";
import { useLocation } from "react-router-dom";
import Cart from "../Header/Cart/Cart";
import Footer from "../Footer/Footer";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isOpen = useSelector((state) => state.cart.isOpen);
  const path = location.pathname.replace(/\//gi, "").replace(/[0-9]/gi, "");
  useEffect(() => {
    if (path != "") {
      dispatch(getItems(path));
    } else {
      dispatch(getItems("tshirts"));
    }
  }, [path]);

  return (
    <div className={styles.app}>
      <div className={isOpen ? `${styles.main} ${styles.open}` : styles.main}>
        <div>
          <Header />
          <AddRoutes />
        </div>
        <Footer />
      </div>
      <Cart />
    </div>
  );
}

export default App;
