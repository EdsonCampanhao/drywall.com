'use client'

import styles from './Header.module.css';
import { IoMdCart } from "react-icons/io";
import MenuHamburguer from '../MenuHamburguer';
import Link from 'next/link';

export default function Header(){

    const activeRoute = (event) =>{
        const links = event.target.parentNode.parentNode.children
        const linksA = Array.from(links)

        linksA.forEach((a)=>{
            if(a.classList.contains('active')){
                a.classList.toggle('active')
                a.style.backgroundColor='';
                a.style.color=''
            }
            if (a == event.target.parentNode){
                a.classList.toggle('active');
                console.log(a.classList);
                console.log(a.classList.contains('active'))
                a.style.backgroundColor='#fff';
                a.style.color='black'
            } 
        })             
    }
    const desactiveRoute = (event) =>{
        const links = event.target.previousElementSibling.children
        const linksA = Array.from(links)

        
        linksA.forEach((a)=>{
            if(a.classList.contains('active')){
                a.classList.toggle('active')
                a.style.backgroundColor='';
                a.style.color=''
            }
        })
        


    }

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href='/' onClick={(event)=>{desactiveRoute(event)}}>
                    <img className={styles.logo} size={32} alt='logo da empresa' src='/img/logo.svg'/>
                </Link>
                <ul className={styles.lista}>
                    <li className={styles.lista_item}>
                        <Link href='/calculator' onClick={(event)=>{activeRoute(event)}} className={styles.lista_item_link}>Calculadora de materiais</Link >
                    </li>
                    <li className={styles.lista_item}>
                        <Link href='/products' onClick={(event)=>{activeRoute(event)}} className={styles.lista_item_link}> produtos </Link >
                    </li>
                </ul>

                <Link href='/shopping_cart' onClick={(event)=>{desactiveRoute(event)}} className={styles.link_cart} >
                    <IoMdCart  size={32} className={styles.carrinho}/>
                </Link>
                <MenuHamburguer></MenuHamburguer>
            </div>
        </header>
    )
}