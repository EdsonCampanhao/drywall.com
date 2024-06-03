'use client'
import style from './calculator.module.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';
import forms from './forms';
import {FormTeto,FormParede} from '../../components/Forms/index'



export default function calculator() {
    const [stateForm, setStateForm] = useState(false)
    const [typeForm,setTypeForm]=useState('')
    
    

    return (
        <>
            <section className={style.container}>
                <div className={style.container_img}>
                    <img src='/img/icon_label.png' className={style.img}></img>
                </div>

                <form onSubmit={(event) => {
                    event.preventDefault();
                    let typeSelected=()=>{return document.querySelector('#select').value} 
                    setTypeForm(typeSelected())
                    
                    setStateForm(true)
                    console.log(typeForm)

                }} className={style.form} id='form'>

                    {stateForm == false ?

                        <select id='select' title="Escolha uma opção" className={style.form_field} required>
                            <option value="teto" key="teto"> serviço de teto </option>
                            <option value="parede" key="parede"> serviço de parede </option>
                        </select>
                        : typeForm==''?<FormParede></FormParede>:<FormTeto></FormTeto>
                        
                        }


                    <button className={style.button}>
                        <FaArrowAltCircleRight size={24} fill='rgb(136, 135, 135)' />
                    </button>
                </form>

            </section>

        </>
    )
}