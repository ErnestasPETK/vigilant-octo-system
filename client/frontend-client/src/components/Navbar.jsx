import styles from "./Navbar.module.css";


const Navbar = () => {

    return (<>

        <nav className={styles.container}>

            <div className={styles.navButton}>
                <a href="/products">PRODUCTS</a>

            </div>


        </nav>

    </>)
}

export default Navbar;