import Link from "next/link";
import styles from "./MorePage.module.scss"
import Image from "next/image";



export function MorePage() {
    return (
        <main className={styles.MoreMain}>
            <Image className={styles.Background} src="Cover.png" alt=""/>
            <Link className={styles.LinkHome} href="/">Home</Link>
        </main>

    )
}