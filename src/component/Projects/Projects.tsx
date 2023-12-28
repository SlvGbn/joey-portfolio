import classNames from "classnames";
import styles from "./Projects.module.scss";




export function Projects() {

    const projects = [
        {
            imageSrc: "CrtlyImg.png",
            signatureHeading: "Crtly",
            signatureText: "Mobile App",
            hasImage: true
        },
        {
            imageSrc: "TanstoImg.png",
            signatureHeading: "Tansto",
            signatureText: "Web Design"
        },
        {
            imageSrc: "SentaImg.png",
            signatureHeading: "Senta",
            signatureText: "Mobile App & Branding"
        },
        {
            imageSrc: "CrintImg.png",
            signatureHeading: "Crint",
            signatureText: "Mobile App"
        },
    ].map((elem, index) => (
        <div className={styles.ProjectsContentBlock} key={index}>
            <div className={classNames(styles.Background, {[styles.BackgroundCrtly]: elem.hasImage})}>
            {/* <div className={`${styles.Background} ${ elem.hasImage ? styles.BackgroundCrtly : ""}`}> */}
                <img className={classNames(styles.Image, {[styles.ImageCrtly]: elem.hasImage})} src={elem.imageSrc}/>
            </div>
            <div className={styles.Signature}>
                <h2 className={styles.SignatureHeading}>{elem.signatureHeading}</h2>
                <p className={styles.SignatureText}>{elem.signatureText}</p>
            </div>
        </div>
    ));



    return (
        <section className={styles.Projects} id="Projects">
            <div className={styles.Heading}>
                <h1 className={styles.Head}>Projects</h1>
                <p className={styles.Text}>As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
                <a className={styles.More} href="more">
                    <p className={styles.MoreText}>More</p>
                    <img className={styles.MoreImg} src="ProjectMore.svg"/>
                </a>
            </div>
            <div className={styles.ProjectsMain}>
                   {projects}
            </div>
        </section>
    );

    // return (
    //     <section className={styles.Projects} id="Projects">
    //         <div className={styles.Heading}>
    //             <h1 className={styles.Head}>Projects</h1>
    //             <p className={styles.Text}>As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
    //         </div>
    //         <div className={styles.ProjectsMain}>

    //             <div className={styles.ProjectsMainTop}>
    //                 <div className={styles.Crtly + " " + styles.ProjectsContentBlock}>
    //                     <div className={styles.Background + " " + styles.BackgroundCrtly}>
    //                         <img className={styles.ImageCrtly} src="CrtlyImg.png"/>
    //                     </div>
    //                     <div className={styles.Signature}>
    //                         <h2 className={styles.SignatureHeading}>Crtly</h2>
    //                         <p className={styles.SignatureText}>Mobile App</p>
    //                     </div>
    //                 </div>
    //                 <div className={styles.Tansto + " " + styles.ProjectsContentBlock}>
    //                     <div className={styles.Background}>
    //                         <img className={styles.Image} src="TanstoImg.png"/>
    //                     </div>
    //                     <div className={styles.Signature}>
    //                         <h2 className={styles.SignatureHeading}>Tansto</h2>
    //                         <p className={styles.SignatureText}>Web Design</p>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className={styles.ProjectsMainBottom}>
    //                 <div className={styles.Senta + " " + styles.ProjectsContentBlock}>
    //                     <div className={styles.Background}>
    //                         <img className={styles.Image} src="SentaImg.png"/>
    //                     </div>
    //                     <div className={styles.Signature}>
    //                         <h2 className={styles.SignatureHeading}>Senta</h2>
    //                         <p className={styles.SignatureText}>Mobile App & Branding</p>
    //                     </div>
    //                 </div>
    //                 <div className={styles.Crint + " " + styles.ProjectsContentBlock}>
    //                         <div className={styles.Background}>
    //                             <img className={styles.Image} src="CrintImg.png"/>
    //                         </div>
    //                         <div className={styles.Signature}>
    //                             <h2 className={styles.SignatureHeading}>Crint</h2>
    //                             <p className={styles.SignatureText}>Mobile App</p>
    //                         </div>
    //                     </div>
    //                 </div>

    //         </div>
    //     </section>
    // )
}