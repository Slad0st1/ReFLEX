import styles from "./Header.module.css";
import Categories from "./Categories/Categories";
import Search from "./Search/Search";
import Logo from "./Logo/Logo";
import Cart from './Cart/Cart'


const Header = () => {

  return (
    <div className={styles.header}>
      <Logo/>
      <Categories/>
      <Search/>
      <Cart/>
    </div>
  );
};
export default Header;
