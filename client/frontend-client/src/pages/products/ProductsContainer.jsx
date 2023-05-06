import { useSelector } from 'react-redux';
import { selectAllProducts } from './productsSlice';
import Product from "./Product";
const ProductsContainer = () => {
    const products = useSelector(selectAllProducts);
    console.log("Products container products");
    console.log(products);
    return (<>
        {products.map((product) => (<Product
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
    </>)
}

export default ProductsContainer;