'use client'
import style from './calculator.module.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';
import { FormTeto, FormParede } from '../../components/Forms/index'



export default function calculator() {
    const [stateForm, setStateForm] = useState(false)
    const [typeForm, setTypeForm] = useState('')



    return (
        <>
            <section className={style.container}>
                <div className={style.container_img}>
                    <img src='/img/icon_label.png' className={style.img}></img>
                </div>



                {stateForm == false ?

                    <>


                        <div className={style.container_select} >
                            <label className={style.label}>qual será o tipo de serviço?
                                <select required id='select' className={style.select} >
                                    <option value="teto" key="teto"> teto </option>
                                    <option value="parede" key="parede"> parede </option>
                                </select>
                            </label>
                        </div>


                        

                        <button className={style.button} onClick={(event) => {
                            event.preventDefault();
                            let typeSelected = () => { return document.querySelector('#select').value }
                            setTypeForm(typeSelected())

                            setStateForm(true)
                            console.log(typeForm)

                        }}>
                            <FaArrowAltCircleRight size={24} fill='rgb(136, 135, 135)' />
                        </button>
                    </>
                    : typeForm == 'parede' ? <FormParede></FormParede> : <FormTeto></FormTeto>

                }





            </section>

        </>
    )
}