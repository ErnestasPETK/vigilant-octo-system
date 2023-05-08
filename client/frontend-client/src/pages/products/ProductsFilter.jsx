import FilterSelect from "../../components/FilterSelect";
import { selectProductCategories } from "./productsSlice";
import { useSelector } from "react-redux";

const ProductsFilter = () => {

    const productCategories = useSelector(selectProductCategories);

    return (<>
        <FilterSelect filterName="categories" selections={productCategories} />
    </>)
}

export default ProductsFilter;