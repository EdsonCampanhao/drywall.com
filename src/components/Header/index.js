'use client'

import styles from './Header.module.css';
import { IoMdCart } from "react-icons/io";
import MenuHamburguer from '../MenuHamburguer';
import Link from 'next/link';

export default function Header(){

    const verifyRouteActive = (event) =>{
        console.log(event.target)       
    }

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <img className={styles.logo} size={32} alt='logo da empresa' src='/img/logo.svg'/>
                <ul className={styles.lista}>
                    <li className={styles.lista_item}>
                        <Link href='/calculator' onClick={(event)=>{verifyRouteActive(event)}} className={styles.lista_item_link}>Calculadora de materiais</Link >
                    </li>
                    <li className={styles.lista_item}>
                        <Link href='/products' className={styles.lista_item_link}> produtos </Link >
                    </li>
                    <li className={styles.lista_item}>
                        <Link href='/institucional' className={styles.lista_item_link}> institucional </Link >
                    </li>
                </ul>

                <Link href='/shopping_cart'>
                    <IoMdCart size={32} className={styles.carrinho}/>
                </Link>
                <MenuHamburguer></MenuHamburguer>
            </div>
        </header>
    )
}