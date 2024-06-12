'use client'

import style from './Forms.module.css'
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from 'next/router';
import products from '../products';
import { useState, useEffect } from 'react';
import { IoMdCart } from "react-icons/io";
import Link from 'next/link';





export function FormTeto(props) {

    const { register, handleSubmit } = useForm()
    const [visible, setVisible] = useState(false)



    const onSubmit = (data) => {
        setVisible(true)
        localStorage.clear()

        console.log(props.ref)

        data.larguraTeto = parseInt(data.larguraTeto)
        data.comprimentoTeto = parseInt(data.comprimentoTeto)

        let areaQ = data.larguraTeto * data.comprimentoTeto

        const materials = {
            36: { 'placa st': Math.round(areaQ / 2.16) },
            9: { 'cantoneira': Math.round((data.larguraTeto + data.comprimentoTeto) * 2 / 3) },
            40: { 'perfil f530': Math.round(areaQ * 2 / 3) },
            39: { 'tirante': (Math.round(areaQ * 2 / 3)) * 2 },
            41: { 'regulador': (Math.round(areaQ * 2 / 3)) * 2 },
            32: { 'caixa de parafuso': Math.ceil((areaQ / 2.16) * 30 / 1000) },
            18: { 'fita telada': Math.ceil((areaQ * 2) / 90) },
            28: { 'massa drywall': Math.round(((areaQ / 2 / 5))) },
            25: { 'lã de rocha': Math.round(areaQ / 4.32) },
            26: { 'lã de vidro': Math.round(areaQ / 15) }
        }


        Object.keys(materials).map((key) => {
            if (key == '25') {
                if (data.forroAcustico == 'lã de rocha') {
                    localStorage.setItem(parseInt(key), JSON.stringify(materials[key]))
                }

            } else if (key == '26') {
                if (data.forroAcustico == 'lã de vidro') {
                    localStorage.setItem(parseInt(key), JSON.stringify(materials[key]))
                }

            } else if (key != '25' && key != '26') localStorage.setItem(parseInt(key), JSON.stringify(materials[key]))
        })



    }



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <div className={style.container} >
                    <label className={style.label}>O forro terá revestimento acústico?
                        <select required {...register('forroAcustico')} className={style.select} >
                            <option>não</option>
                            <option>lã de vidro</option>
                            <option>lã de rocha</option>
                        </select>
                    </label>
                </div>
                <div className={style.container} >
                    <label className={style.label} >Qual a altura do rebaixamento em metros? (do teto ao forro)
                        <input required type='number' step="any"  {...register('alturaRebaixamento')} className={style.input}></input>
                    </label>
                </div>
                <div className={style.container}>
                    <label className={style.label}>Qual a largura do teto em metros?
                        <input required type='number' step="any"   {...register('larguraTeto')} className={style.input}></input>
                    </label>
                </div>
                <div className={style.container} >
                    <label className={style.label} >Qual o comprimento do teto em metros?
                        <input required type='number' step="any"   {...register('comprimentoTeto')} className={style.input}></input>
                    </label>
                </div>
                <div className={style.button_container}>
                    <button className={style.button} > calcular material </button>
                </div>
            </form>

            <Link href="/shopping_cart" >

                <div style={visible ? { backgroundColor: 'blue', display: 'flex' } : { display: 'none' }}
                    className={style.carrinho}>
                    <p>ir para o carrinho</p>
                    <IoMdCart size={32}
                    />
                </div >
            </Link>
        </>
    )
}
export function FormParede(props) {
    const { register, handleSubmit } = useForm()
    const [visible, setVisible] = useState(false)

    const onSubmit = (data) => {
        setVisible(true)

        localStorage.clear()

        data.larguraParede = parseInt(data.larguraParede)
        data.peDireito = parseInt(data.peDireito)
        data.espessuraParede = data.espessuraParede.slice(0, 2)



        let areaQ = data.larguraParede * data.peDireito

        const materials = {
            36: { 'placa st': Math.round((areaQ / 2.16) * 2) },
            32: { 'caixa de parafuso': Math.ceil((areaQ / 2.16) * 30 / 1000) },
            18: { 'fita telada': Math.ceil((areaQ * 2) / 90) },
            28: { 'massa drywall': Math.round(((areaQ / 5))) },
            25: { 'lã de rocha': Math.round(areaQ / 4.32) },
            26: { 'lã de vidro': Math.round(areaQ / 15) },
            guia: {
                quantidade: (data.larguraParede + data.peDireito * 2 / 3)

            },
            montante: {
                quantidade: (data.peDireito / 0.6)

            }
        }


        Object.keys(materials).map((key) => {
            if (key == '25') {
                if (data.forroAcustico == 'lã de rocha') {
                    localStorage.setItem(parseInt(key), JSON.stringify(materials[key]))
                }

            } else if (key == '26') {
                if (data.forroAcustico == 'lã de vidro') {
                    localStorage.setItem(parseInt(key), JSON.stringify(materials[key]))
                }

            } else if (key == 'guia') {

                console.log(data.espessuraParede)

                switch (data.espessuraParede) {

                    case '48':
                        localStorage.setItem(22, `{"${products[22].nome}":${Math.round(materials.guia.quantidade)}}`);
                        localStorage.setItem(29, `{"${products[29].nome}":${Math.round(materials.montante.quantidade)}}`);
                        break;

                    case '70':
                        localStorage.setItem(23, `{"${products[23].nome}":${Math.round(materials.guia.quantidade)}}`);
                        localStorage.setItem(30, `{"${products[30].nome}":${Math.round(materials.montante.quantidade)}}`);
                        break;

                    case '90':
                        localStorage.setItem(24, `{"${products[24].nome}":${Math.round(materials.guia.quantidade)}}`);
                        localStorage.setItem(31, `{"${products[31].nome}":${Math.round(materials.montante.quantidade)}}`);
                        break;
                }

            } else if (key != 'montante') {
                localStorage.setItem(parseInt(key), JSON.stringify(materials[key]))
            }
        })


    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <div className={style.container} >
                    <label className={style.label}>O forro terá revestimento acústico?
                        <select required {...register('forroAcustico')} className={style.select} >

                            <option>não</option>
                            <option>lã de vidro</option>
                            <option>lã de rocha</option>
                        </select>
                    </label>
                </div>
                <div className={style.container} >
                    <label className={style.label}>Qual a esspessura da ferragem?
                        <select required {...register('espessuraParede')} className={style.select} >

                            <option>48mm (parede final com 8cm)</option>
                            <option>70mm (parede final com 10cm)</option>
                            <option>90mm (parede final com 12cm)</option>
                        </select>
                    </label>
                </div>
                <div className={style.container}>
                    <label className={style.label}>Qual a altura da parede em metros?
                        <input required type='number' step="any"   {...register('peDireito')} className={style.input}></input>
                    </label>
                </div>
                <div className={style.container} >
                    <label className={style.label} >Qual a largura da parede em metros?
                        <input required type='number' step="any"   {...register('larguraParede')} className={style.input}></input>
                    </label>
                </div>
                <div className={style.button_container}>
                    <button className={style.button} > calcular material </button>
                </div>
            </form>


            <Link href="/shopping_cart" >

                <div style={visible ? { backgroundColor: 'blue', display: 'flex' } : { display: 'none' }}
                    className={style.carrinho}>
                    <p>ir para o carrinho</p>
                    <IoMdCart size={32}
                    />
                </div >
            </Link>




        </>

    )
}

