import ProductsList from "./ProductsList.jsx";
import Navbar from "../../components/Navbar.jsx";
import ProductsFilter from "./ProductsFilter.jsx";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <ProductsFilter />
            <ProductsList />
        </div>
    )
}

export default ProductsPage;
