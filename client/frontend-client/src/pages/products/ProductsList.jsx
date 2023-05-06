import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllProducts, selectStatus, fetchProductsFromAPI } from "./productsSlice";
import ErrorPage from "../error/ErrorPage"
import ProductsContainer from "./ProductsContainer";

const ProductsList = () => {


    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const productsStatus = useSelector(selectStatus);
    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchProductsFromAPI())
        }
    }, [productsStatus, dispatch])

    let content;
    switch (productsStatus) {
        case "idle":
            content = <>
                <ProductsContainer />
            </>
            break;
        case "loading":
            content = <>
                <ProductsContainer />

            </>
            break;
        case "succeeded":
            content = <>
                <ProductsContainer />
            </>
            break;
        case "failed":
            content = <>
                <ErrorPage />
            </>
            break;
        default:
            content = <>
                <ErrorPage />
            </>
            break;
    }


    console.log("products");
    console.log(products);

    return content;
};

export default ProductsList;