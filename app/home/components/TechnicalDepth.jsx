import styles from "../css/technicalDepth.module.css";

export default function TechnicalDepth({ modelTargetRef }) {
    return (
        <section className={styles.technicalDepth}>
            <div className={`container ${styles.content}`}>

                <div className={styles.heading}>
                    <h2>
                        Technical depth presented
                        <br />
                        with strategic context
                    </h2>
                </div>

                {/* Destination for the shared 3D model */}
                <div
                    ref={modelTargetRef}
                    className={styles.modelTarget}
                    aria-hidden="true"
                />

                <div className={styles.description}>
                    <p>
                        DEVELOPMENT orem ipsum dolor sit amet consectetur. Augue at nisl phasellus nisl ullamcorper at felis. Ut suscipit sit morbi semper lacus lorem urna eu. Semper et eleifend sit gravida euismod turpis. Pellentesque
                    </p>

                    <a href="#contact" className={styles.button}>
                        <img src="/assets/button-arrow.svg" alt="" />
                        <span>See work</span>
                    </a>

                    <div >
                        <img src="/assets/lighthouse-image.png" alt="lighthouse-image" className={styles?.buttonArrow} />
                    </div>

                </div>

            </div>
        </section>
    );
}