import PropTypes from 'prop-types';



const ErrorPage = (props) => {
    const errorMessage = props.Error;
    return (
        <>
            {errorMessage ? <p>{errorMessage.toUpperCase()}</p> :
                <p>No error</p>

            }
        </>
    )
}
ErrorPage.propTypes = {
    Error: PropTypes.string,
}
export default ErrorPage;