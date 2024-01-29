import styles from "./MorePage.module.scss"




export function MorePage() {
    return (
        <main className={styles.MoreMain}>
            <img className={styles.Background} src="Cover.png"/>
            <a className={styles.LinkHome} href="/">Home</a>
        </main>

    )
}