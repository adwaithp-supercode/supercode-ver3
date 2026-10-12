"use client";

import styles from "../css/hero.module.css";

export default function Hero() {
    return (
        <section className={styles?.hero}>
            <div className={`container ${styles.heroContent}`}>
                <div className={styles?.heroHeading}>
                    <h1>Bold websites for B2B Enterprises</h1>
                </div>

                <div className={styles?.heroDescription}>
                    <p>We measure success in impact, not just statistics.
                        But here’s what shapes our perspective. </p>
                </div>
            </div>
        </section>
    );
}