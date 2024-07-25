'use client'
import CardCart from "@/components/CardCart/CardCart"
import products from "@/components/products"
import style from './shopping_cart.module.css'
import { useState, useEffect } from "react"
import { color } from "framer-motion"
import { jsPDF } from "jspdf";

export default function shopping_cart() {

    const [load, setLoad] = useState(false);
    let hasItens = false

    useEffect(() => {
        setLoad(true);
    }, []);

    return (
        <div className={style.container}>

            <h2 className={style.title}> lista de compras</h2>
            {load ? (
                Object.keys(localStorage).length > 0 ? (
                    Object.keys(localStorage).map((key) => {
                        try {
                            const obj = JSON.parse(localStorage[key]);
                            hasItens = true
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
                    <p style={{ color: 'black' }}>Nenhum item encontrado no carrinho.</p>
                )
            ) : (
                <p style={{ color: 'black' }}>Carregando...</p>
            )}
            {hasItens ? <button
                onClick={() => {
                    const doc = new jsPDF();

                    doc.text('Lista de materiais ', 70, 30);
                    const items = []



                    Object.keys(localStorage).map((key) => {

                        const item = JSON.parse(localStorage[key])

                        console.log(item)

                        return items.push(`${Object.keys(item)[0]}: ${item[Object.keys(item)[0]]}\n`)

                    })

                    doc.text(items, 10, 40);
                    
                    doc.save("lista_de_materiais.pdf");

                }}
            >imprimir pdf</button> : ''}

        </div>
    );
};