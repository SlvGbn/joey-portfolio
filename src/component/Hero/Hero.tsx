import styles from "./Hero.module.scss";
import Image from "next/image";

export function Hero() {
    return (
        <section className={styles.Hero} id="Home">
            <h1 className={styles.Heading}>Websites&<br/>Branding</h1>
            <a className={styles.ScrollDown} href="#Down">
                <p className={styles.ScrollText}>SCROLL DOWN</p>
                <Image className={styles.ScrollImg} src="ScrollImg.svg" alt=""/>
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
                    Hello, I&apos;m Joey, an online product designer focusing on brand identity, advertising, and no-code instruments.
                </p>
            </div>
        </section>
    )
}