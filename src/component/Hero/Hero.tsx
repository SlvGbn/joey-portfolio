import styles from "./Hero.module.scss";


export function Hero() {
    return (
        <section className={styles.Hero} id="Home">
            <h1 className={styles.Heading}>Websites&<br/>Branding</h1>
            <a className={styles.ScrollDown} href="#Down">
                <p className={styles.ScrollText}>SCROLL DOWN</p>
                <img className={styles.ScrollImg} src="ScrollImg.svg"/>
            </a>
            <div className={styles.HeroMain}>
                <div className={styles.Talk}>
                    <h2 className={styles.LetsTalk}>
                        Let’s Talk
                    </h2>
                    <p className={styles.Mail}>
                        hello@joey.co
                    </p>
                </div>
                <p className={styles.Hello}>
                    Hello, I'm Joey, an online product designer focusing on brand identity, advertising, and no-code instruments.
                </p>
            </div>
        </section>
    )
}