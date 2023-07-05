import styles from "./App.module.css";
import Header from "../Header/Header";
import AddRoutes from "../routes/Routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <AddRoutes />
    </div>
  );
}

export default App;
