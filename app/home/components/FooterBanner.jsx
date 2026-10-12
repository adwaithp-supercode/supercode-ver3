import styles from "../css/footerBanner.module.css"

export default function FooterBanner() {
    return (
        <section className={styles?.fullWidthImage}>
            <img
                src="/assets/footer-banner.png"
                alt="Full-width section image"
            />
        </section>
    );
}