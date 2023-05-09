import styles from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}/>
            <div className={styles.loadingText}>Loading...</div>
        </div>
    );
}

export default Loader;