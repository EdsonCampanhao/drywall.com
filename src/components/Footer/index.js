import style from './Footer.module.css';
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer(){
    return(

        <section className={style.footer} >
            <div className={style.container} >
                
                <div className={style.logo_container}>
                    <img className={style.logo} src='/img/logo.svg'/>
                </div>

                <div className={style.endereco}>
                    <h2> Onde nos encontrar: </h2>
                    <p>Av. 22 de maio, n° 8273</p>
                    <p> Loja 1, Itaboraí</p>
                    <p> R. Dr. Matos</p>
                    <p>Centro - Rio Bonito</p>

                </div>

                <div className={style.redes}>
                    <h2> Siga nos em nossas redes sociais </h2>
                    <div className={style.icones}>
                        <a>
                            <TiSocialInstagram size={32} />
                        </a>
                        <a>
                            <IoLogoWhatsapp size={32}/>
                        </a>
                    </div>

                </div>

            </div>
        </section>

    )
}