import styles from './Header.module.css';
import { IoMdCart } from "react-icons/io";


export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <img className={styles.logo} size={32} alt='logo da empresa' src='/img/logo.svg'/>
                <ul className={styles.lista}>
                    <li className={styles.lista_item}>
                        <a className={styles.lista_item_link}>Calculadora de materiais</a>
                    </li>
                    <li className={styles.lista_item}>
                        <a className={styles.lista_item_link}> produtos </a>
                    </li>
                    <li className={styles.lista_item}>
                        <a className={styles.lista_item_link}> institucional </a>
                    </li>
                </ul>
                <a>
                    <IoMdCart size={32} className={styles.carrinho}/>
                </a>
            </div>
        </header>
    )
}