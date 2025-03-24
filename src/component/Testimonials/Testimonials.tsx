


import styles from "./Testimonials.module.scss";



export function Testimonials() {
    return (
        <section className={styles.Testimonials} id="Feedback">
            <h1 className={styles.TestimonialsHeading}>Testimonials</h1>
            <div className={styles.TestimonialsMain}>
                <p className={styles.TestimonialsMainText}>“Joey is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I&apos;ve witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”</p>
                <div className={styles.TestimonialsSignature}>
                    <h2 className={styles.SignatureName}>Chris Ellington</h2>
                    <p className={styles.SignatureSource}>Product Lead,Gatha.</p>
                </div>
            </div>
        </section>
    )
}