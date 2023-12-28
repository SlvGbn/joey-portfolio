import classNames from "classnames";
import styles from "./Header.module.scss";
import { useEffect, useRef } from "react";






export function Header() {

    function addClassActiv(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        const links = document.querySelectorAll<HTMLDivElement>("." + styles.Link);
        links.forEach((link) => {
            link.classList.remove(styles.Activ);
        });
        event.currentTarget.classList.add(styles.Activ);
    }


    useEffect(() => {
        window.onscroll = () => {
            const links = document.querySelectorAll("." + styles.Link);
            // const sec = document.querySelectorAll<HTMLDivElement>("main > *");
            const sec = [
                document.querySelector<HTMLDivElement>("#Home"),
                document.querySelector<HTMLDivElement>("#Projects"),
                document.querySelector<HTMLDivElement>("#Expertise"), 
                document.querySelector<HTMLDivElement>("#Down"), 
                document.querySelector<HTMLDivElement>("#Feedback")
            ];

            sec.forEach((section) => {
                if (!section) return;
                let top = window.scrollY + 0.5 * window.innerHeight;
                let offset = section.offsetTop;
                let height = section.offsetHeight;
                let id = section.getAttribute("id");

                if (top >= offset && top < offset + height) {
                    
                    links.forEach((link) => {
                        if (!link) return;
                        link.classList.remove(styles.Activ);
                        const href = link.getAttribute("href");
                        if (href && href.includes(section.id)) link.classList.add(styles.Activ);
                    })
                }
            })
        }
    },[]);

   
    const NavigationPanelElement = [
        {
            href: "#Home",
            label: "Home"
        },
        {
            href: "#Projects",
            label: "Projects",
            imgSrc: "Number.svg"
        },
        {
            href: "#Expertise",
            label: "About"
        },
        {
            href: "#Feedback",
            label: "Feedback"
        },
        {
            href: "#Down",
            label: "Contact"
        },
    ].map((elem, index) => (
        <a className={classNames(styles.Link, {[styles.Activ]: !index})} href={elem.href} key={index} onClick={addClassActiv}>
            {
                elem.imgSrc 
                    ? <img className={styles.Number} src={elem.imgSrc}/> 
                    : null
            }
            
            <p className={styles.LinkName}>{elem.label}</p>
        </a>
    ));


    return (
        <header className={styles.Header}>
            <img className={styles.Heading} src="HeaderHeading.svg"/>
            <nav className={styles.NavigationPanel}>
               {NavigationPanelElement}
            </nav>
            <button className={styles.Popup}>
                <img className={styles.PupupImg} src="menu.svg"/>
            </button>
        </header>
    )


    // return (
    //     <header className={styles.Header}>
    //         <img className={styles.Heading} src="HeaderHeading.svg"/>
    //         <div className={styles.NavigationPanel}>
    //             <a className={styles.Link + " " + styles.Activ} href="#Main">
    //                 <p className={styles.LinkName}>Home</p>
    //             </a>
    //             <a className={styles.Link} href="#Projects">
    //                 <img className={styles.Number} src="Number.svg"/>
    //                 <p className={styles.LinkName}>Projects</p>
    //             </a>
    //             <a className={styles.Link} href="#Expertise">
    //                 <p className={styles.LinkName}>About</p>
    //             </a>
    //             <a className={styles.Link} href="#Down">
    //                 <p className={styles.LinkName}>Contact</p>
    //             </a>
    //         </div>
    //     </header>
    // )
}