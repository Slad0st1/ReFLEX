import styles from "./App.module.css";
import Header from "../Header/Header";
import AddRoutes from "../routes/Routes";


function App() {


  return (
    <div className={styles.app}>
      <Header />
      <AddRoutes />
    </div>
  );
}

export default App;
