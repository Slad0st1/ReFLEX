import styles from "./Header.module.css";
import Categories from "./Categories/Categories";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import CartBtn from "./CartBtn/CartBtn";


const Header = () => {

  return (
    <div className={styles.header} id="header">
      <Logo/>
      <Categories/>
      <Search/>
      <CartBtn/>
    </div>
  );
};
export default Header;
