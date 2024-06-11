'use client'
import CardCart from "@/components/CardCart/CardCart"
import products from "@/components/products"
import style from './shopping_cart.module.css'
import { useState,useEffect } from "react"


export default function shopping_cart() {

    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
    }, []);

    return (
        <div className={style.container}>
            {load ? (
                Object.keys(localStorage).length > 0 ? (
                    Object.keys(localStorage).map((key) => {
                        try {
                            const obj = JSON.parse(localStorage[key]);
                            if (!products[key]) {
                                return null; // Pule chaves que não existem no products
                            }
                            return (
                                <CardCart
                                    key={key}
                                    id={key}
                                    src={products[key].img}
                                    alt={products[key].nome}
                                    name={products[key].nome}
                                    value={obj[products[key].nome]} />
                            );
                        } catch (e) {
                            console.error(`Error parsing JSON for key ${key}:`, e);
                            return null;
                        }
                    })
                ) : (
                    <p>Nenhum item encontrado no carrinho.</p>
                )
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};