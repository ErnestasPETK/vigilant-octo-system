import PropTypes from 'prop-types';
import styles from "./Product.module.css";

const Product = (props) => {

    const productImages = props.ProductImages;
    const title = props.Title;
    const description = props.Description;
    const brand = props.Brand;
    const price = props.Price;
    const category = props.Category;
    const thumbnail = props.Thumbnail;

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={thumbnail} alt={`Thumbnail for ${title}`} />
            </div>
            <div className={styles.descriptionContainer}>
                <h2>{title}</h2>
                <div className={styles.descriptionSplitBox} >
                    <div className={styles.descriptionLeftSplit}>
                        <p>{brand.toUpperCase()}</p>
                        <p>{category.toUpperCase()}</p>
                    </div>
                    <div className={styles.descriptionRightSplit}>
                        <h3 className={styles.price} >{price} $</h3>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
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