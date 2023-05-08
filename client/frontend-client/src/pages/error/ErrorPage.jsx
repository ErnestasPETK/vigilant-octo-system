import PropTypes from 'prop-types';



const ErrorPage = (props) => {
    const errorMessage = props.Error;
    return (
        <>
            {errorMessage ? <p>{errorMessage.toUpperCase()}</p> :
                <p>NOT FOUND 404</p>

            }
        </>
    )
}
ErrorPage.propTypes = {
    Error: PropTypes.string,
}
export default ErrorPage;