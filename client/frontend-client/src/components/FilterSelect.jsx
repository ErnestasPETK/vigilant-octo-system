import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterCategory } from '../pages/products/productsSlice';
import styles from "./FilterSelect.module.css";

const FilterSelect = (props) => {
    const dispatch = useDispatch();

    const filterName = props.filterName;
    const selections = props.selections;
    return (
        <select className={styles.selectorBox} name={filterName} id={filterName} onChange={({ target }) => dispatch(filterCategory(target.value))}>
            <option value="All">All</option>
            {selections.map((selection) => {
                return (<option key={selection} value={selection}>{selection}</option>)

            })}
        </select>

    )

};

FilterSelect.propTypes = {
    filterName: PropTypes.string,
    selections: PropTypes.array,
}

export default FilterSelect;