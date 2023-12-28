import styles from "./Expertise.module.scss";




export function Expertise() {

    const expertise = [
        {
            name: "Branding",
            text: "Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.",
        },
        {
            name: "UI Design",
            text: "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites."
        },
        {
            name: "UX Design",
            text: "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements."
        },
        {
            name: "Development",
            text: "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites."
        },
    ].map((elem, index) => (
        <div className={styles.ContentBlock} key={index}>
            <h2 className={styles.ContetHeading}>
                <img src="Rectangle.svg"/>
                {elem.name}
            </h2>
            <p className={styles.ContentText}>{elem.text}</p>
        </div>
    ));

   

    return (
        <section className={styles.Expertise} id="Expertise">
            <h1 className={styles.ExpertiseHeading}>Expertise</h1>
            <div className={styles.ExpertiseMain}>
                {expertise}
            </div>
        </section>
    )



    // return (
    //     <section className={styles.Expertise} id="Expertise">
    //         <h1 className={styles.ExpertiseHeading}>Expertise</h1>
    //         <div className={styles.ExpertiseMain}>
    //             <div className={styles.ExpertiseMainTop}>
    //                 <div className={styles.ContentBlock}>
    //                     <h2 className={styles.ContetHeading}>Branding</h2>
    //                     <p className={styles.ContentText}>Collaborating closely, we'll develop an impactful brand identity for your emerging enterprise. The full spectrum of brand analysis and design is addressed, culminating in a visually stunning, evergreen logo concept.</p>
    //                 </div>
    //                 <div className={styles.ContentBlock}>
    //                     <h2 className={styles.ContetHeading}>UI Design</h2>
    //                     <p className={styles.ContentText}>I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.</p>
    //                 </div>
    //             </div>
    //             <div className={styles.ExpertiseMainBottom}>
    //                 <div className={styles.ContentBlock}>
    //                     <h2 className={styles.ContetHeading}>UX Design</h2>
    //                     <p className={styles.ContentText}>I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual conveyance are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.</p>
    //                 </div>
    //                 <div className={styles.ContentBlock}>
    //                     <h2 className={styles.ContetHeading}>Development</h2>
    //                     <p className={styles.ContentText}>I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome, complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // )
}