
import style from './Product.module.css'
import productsList from '@/components/products'
import Product_card from '@/components/Product_card'

export default function products() {
    return (
        <>
            <h1 className={style.tittle}> Nossos produtos </h1>
            <section className={style.container}>
                <ul className={style.product_list}>
                    {Object.keys(productsList).map((key) => {
                        return (
                            <li key={key}>
                                <Product_card path={productsList[key].img} product={productsList[key].nome}></Product_card>
                            </li>
                        )
                    })
                    }
                </ul>
            </section>
        </>
    )
}