import { LineWave } from "react-loader-spinner";
import styles from "./LoadingPage.module.css";

const LoadingPage = () => {

    return (
        <div className={styles.container}>
            <LineWave
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
            />
        </div>

    )

}

export default LoadingPage;