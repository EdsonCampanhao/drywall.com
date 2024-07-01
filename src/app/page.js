import style from './Home.module.css'
import { IoDiamondOutline } from "react-icons/io5";
import { TbPigMoney } from "react-icons/tb";
import { SlEarphonesAlt } from "react-icons/sl";
import Product_card from '@/components/Product_card';
import products from '@/components/products';
import NewButton from '@/components/Button';
import Card_feedback from '@/components/Card_feedback';
import Link from 'next/link';



export default function Home() {
  return (
    <main >

      <section className={style.container}>
        <img src='/img/banner.png' className={style.banner} />

      </section>

      <section className={style.container_differences}>
        <ul className={style.differences}>
          <li className={style.differences_item}>
            <IoDiamondOutline size={32} />
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

        <h2> Nossos produtos: </h2>
        <ul className={style.product_wrapper}>

          {Object.keys(products).map((key) => {
            return (
              <li key={key}>
                <Product_card path={products[key].img} product={products[key].nome}></Product_card>
              </li>
            )
          })
          }

        </ul>

      </section>

      <section className={style.cta_container}>

        <div className={style.cta_div}>
          <div className={style.cta_description}>
            <h2>Vai começar uma obra?</h2>
            <div className={style.cta_text}>
              <p>calcule seu material, sem custo, conosco!</p>
              <Link href='/calculator'>
                <div className={style.cta_button}>
                  <p>calcular!</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

      </section>

      <section className={style.container_feedback}>

        <h2> Feedsbacks sobre a nossa loja!</h2>

        <ul className={style.list_feedback}>
          <li>
            <Card_feedback user='Bruce Campanhão'> ótimo atendimento, estão de parabens! </Card_feedback>
          </li>
          <li>
            <Card_feedback user='Misael'> preço baixo e um ótimo cafezinho
              ! </Card_feedback>
          </li>
          <li>
            <Card_feedback user='José'> melhor loja de itaboraí</Card_feedback>
          </li>
          <li>
            <Card_feedback user='Edson Gabryel'> pessoal muito solicito para ajudar! </Card_feedback>
          </li>

        </ul>

      </section>

    </main>
  );
}
