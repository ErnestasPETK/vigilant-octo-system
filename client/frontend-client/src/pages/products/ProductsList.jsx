import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectStatus, fetchProductsFromAPI, selectError } from "./productsSlice";
import ErrorPage from "../error/ErrorPage"
import LoadingPage from "../../components/LoadingPage";
import ProductsContainer from "./ProductsContainer";
import { redirect } from "react-router-dom";

const ProductsList = () => {


    const dispatch = useDispatch();
    const productsStatus = useSelector(selectStatus);
    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchProductsFromAPI())
        }
    }, [productsStatus, dispatch])

    const errorStatus = useSelector(selectError);
    if (errorStatus) {
        return redirect("/error")
    }

    let content;
    switch (productsStatus) {
        case "idle":
            content = <>
                <ProductsContainer />
            </>
            break;
        case "loading":
            content = <>
                <LoadingPage />

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

    return content;
};

export default ProductsList;