'use client'
import style from './calculator.module.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import forms from './forms'

function openForms(event){
    event.preventDefault();
    
    

    if(event.target[0].value == 'parede' || event.target[0].value == 'teto'){
        
        console.log(forms[event.target.children[0].value])
        



    } else{
         alert('por favor, selecione um serviço!')
    }

}

export default function calculator() {
    return (
        <>
            <section className={style.container}>
                <div className={style.container_img}>
                    <img src='/img/icon_label.png' className={style.img}></img>
                </div>
                <form onSubmit={(event)=>{openForms(event)}} className={style.form} id='form'>
                    <select title="Escolha uma opção" className={style.form_field} required>
                    <option disabled selected>Qual o tipo de serviço?</option>
                        <option value="teto" key="teto">Teto</option>
                        <option value="parede" key="parede">Parede</option>
                    </select>

                    <button className={style.button}><FaArrowAltCircleRight size={24} fill='rgb(136, 135, 135)' /> 
                    </button>
                </form>
            </section>

        </>
    )
}