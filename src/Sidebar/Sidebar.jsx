import "./Sidebar.css";
import { GiShoppingCart } from "react-icons/gi";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

function Sidebar() {
  return (
    <section className="sidebar">
        <GiShoppingCart className="cart-icon"/>
        {/* <div className="cart-icon">🛒</div> */}

        <section className="filters">
            <Category />
            <Price />
            <Colors />
        </section>
    </section>
  )
}

export default Sidebar;