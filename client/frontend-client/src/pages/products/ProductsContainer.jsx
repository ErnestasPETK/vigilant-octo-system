import { useSelector } from 'react-redux';
import { selectFilteredProducts } from './productsSlice';
import Product from "./Product";
import styles from "./ProductsContainer.module.css";


const ProductsContainer = () => {
    const products = useSelector(selectFilteredProducts);
    return (
        <div className={styles.container}>
            {products.length > 0 && products.map((product) => (
                <Product
                    key={product.id}
                    ProductImage={product.image}
                    Title={product.title}
                    Description={product.description}
                    Brand={product.brand}
                    Price={product.price}
                    Category={product.category}
                    Thumbnail={product.thumbnail}

                >{product.title}</Product >))
            }
            {products.length == 0 &&
                <h2>No products found</h2>
            }
        </div>)
}

export default ProductsContainer;