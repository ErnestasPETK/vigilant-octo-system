import { useSelector } from 'react-redux';
import { selectAllProducts } from './productsSlice';
import Product from "./Product";
import styles from "./ProductsContainer.module.css";


const ProductsContainer = () => {
    const products = useSelector(selectAllProducts);
    return (<div className={styles.container}>
        {products.map((product) => (
            <Product
                key={product.id}
                ProductImages={product.images}
                Title={product.title}
                Description={product.description}
                Brand={product.brand}
                Price={product.price}
                Category={product.category}
                Thumbnail={product.thumbnail}

            >{product.title}</Product >))
        };
    </div>)
}

export default ProductsContainer;