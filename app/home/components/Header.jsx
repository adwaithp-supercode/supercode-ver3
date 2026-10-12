import styles from "../css/header.module.css"

export default function Header() {
    return (
        <nav className={styles?.header}>
            <a href="/" className={styles?.logo}>
                <img
                    src="/assets/supercode-logo.svg"
                    alt="Supercode"
                />
            </a>

            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Insights</a></li>
                <li><a href="#">Impact</a></li>
                <li>
                    < a className={styles?.btn} href="#contact">
                        <img src="/assets/button-arrow.svg" alt="" />
                        <span>Contact us</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}