import styles from "./Main.module.scss";


type Props = {
    children: JSX.Element | JSX.Element[];
}

export function Main(props: Props) {
    return (
        <main className={styles.Main} id="Main">
             {props.children}
        </main>
    )
}