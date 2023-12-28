import styles from "./Modal.module.scss";




export function Modal() {

    function hidden() {
        const modal = document.querySelector("#Modal");
        modal?.classList.remove("Visible");
    }

    return(
        <section className={styles.Modal} id="Modal">
            <div className={styles.Form}>
                <div className={styles.Talk}>
                <h1 className={styles.Heading}>Let’s talk!</h1>
                <button className={styles.Exit} onClick={hidden}>
                    <img src="exit.png" className={styles.ExitImg}/>
                </button>
                </div>
                <div className={styles.DataBlock}>
                    <input type="text" className={styles.Label + " " + styles.Input} placeholder="Label"/>
                    <input type="Mail" className={styles.Mail + " " + styles.Input} placeholder="E-Mail"/>
                    <input type="Phone" className={styles.Phone + " " + styles.Input} placeholder="Phone"/>
                </div>
                <textarea className={styles.AboutProject} rows={10} placeholder="Tell us more about your project"/>
                <button className={styles.Submit}>
                     Submit
                </button>
            </div>
            <div className={styles.Overlay}></div>
        </section>
    )
}