import PropTypes from 'prop-types';

const Product = (props) => {

    const productImages = props.ProductImages;
    const title = props.Title;
    const description = props.Description;
    const brand = props.Brand;
    const price = props.Price;
    const category = props.Category;
    const thumbnail = props.Thumbnail;

    return (
        <>
            <img src={productImages[0]} alt="" />
            <p>yeha</p>
        </>
    )
};

Product.propTypes = {
    ProductImages: PropTypes.array,
    Title: PropTypes.string,
    Description: PropTypes.string,
    Brand: PropTypes.string,
    Price: PropTypes.string,
    Category: PropTypes.string,
    Thumbnail: PropTypes.string,

}

export default Product;