import styles from "./Footer.module.scss";
import modalStyles from "@src/component/Modal/Modal.module.scss"
import Image from "next/image";





export function Footer() {

    function openModal() {
        const modal = document.querySelector("#Modal");
        modal?.classList.add("Visible");
    }




    return (
        <footer className={styles.Footer} id="Down">
            <div className={styles.Contact}>
                <h1 className={styles.Heading}>Let’s talk!</h1>
                <a className={styles.Link} onClick={openModal}>
                    <p className={styles.Mail}>hello@joey.co</p>
                    <Image className={styles.LinkImage} src="FooterLinkImage.svg" alt=""/>
                </a>
            </div>
            <div className={styles.LightsAndNetwork}>
                <p className={styles.Lights}>2023 © — Made by Djectstudio</p>
                <div className={styles.SocialNetworks}>
                    <a className={styles.SocialNetwork} href="https://dribbble.com/">Dribbble</a>
                    <a className={styles.SocialNetwork} href="https://www.instagram.com/">Instagram</a>
                    <a className={styles.SocialNetwork} href="https://linkedin.com/">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}