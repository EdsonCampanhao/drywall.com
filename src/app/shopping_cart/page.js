'use client'
import CardCart from "@/components/CardCart/CardCart"
import products from "@/components/products"
import style from './shopping_cart.module.css'

export default function shopping_cart() {
    return (

        <div className={style.container}>

            {
                Object.keys(localStorage).map((key) => {

                    const obj=JSON.parse(localStorage[parseInt(key)]);
                    
                    return (<CardCart
                        key={key}
                        id={key}
                        src={products[key].img}
                        alt={products[key].nome}
                        name={products[key].nome} 
                        value={obj[products[key].nome]} />)

                }
                )
            }
            <CardCart src={products[1].img} alt={products[1].nome} name={products[1].nome} value={3} >  </CardCart>
        </div>

    )
}