import style from './Home.module.css'
import { IoDiamondOutline } from "react-icons/io5";
import { TbPigMoney } from "react-icons/tb";
import { SlEarphonesAlt } from "react-icons/sl";
import Product_card from '@/components/Product_card';
import products from '@/components/products';




export default function Home() {
  return (
    <main >

      <section className={style.container}>
        <img src='/img/banner.png' className={style.banner} />
      </section>

      <section className={style.container_differences}>
        <ul className={style.differences}>
          <li className={style.differences_item}>
            <IoDiamondOutline size={32}/>
            <p className={style.differences_text}>Produtos de qualidade</p>
          </li>
          <li className={style.differences_item}>
            <TbPigMoney size={32} />
            <p className={style.differences_text}>Preço competitivo</p>
          </li>
          <li className={style.differences_item}>
            <SlEarphonesAlt size={32} />
            <p className={style.differences_text}>Atendimento especializado</p>
          </li>
        </ul>
      </section>

      <section className={style.container_products}>

        <ul className={style.product_wrapper}>

          {Object.keys(products).map((key)=>{
            return(
          <Product_card path={products[key].img} key={key} product={products[key].nome}></Product_card>
          )})
           }

        </ul>
       
      </section>

    </main>
  );
}
