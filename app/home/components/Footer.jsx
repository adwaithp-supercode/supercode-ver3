import styles from "../css/footer.module.css";

export default function Footer() {
    return (
        <footer>
            <div className={styles.line}></div>
                <div className={`${styles.footer}`}>
                <p>&copy; 2026 Supercode&reg;Design</p>

                    <nav className={styles.links}>
                        <a href="/privacy">Privacy</a>
                        <a href="/terms">Terms</a>
                        <a href="/sitemap">Sitemap</a>
                    </nav>
                </div>



        </footer>
    );
}