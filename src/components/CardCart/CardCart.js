'use client';
import style from './CardCart.module.css';
import { useState, useRef } from 'react';
import React from 'react';
import products from '../products';

function CardCart(props) {

    const [number, setNumber] = useState(props.value);
    const elementRef = useRef();

    return (
        <div ref={elementRef} className={style.container}>

            <div className={style.description}>
                <img src={props.src} alt={props.alt} className={style.description_image} />
                <h2> {props.name} </h2>
            </div>
            <div className={style.quant_field}>
                <p className={style.text}> Quantidade </p>
                <div className={style.quant_field__buttons}>

                    <p className={style.button} onClick={
                        () => {

                            setNumber(number + 1)


                            let obj = JSON.parse(localStorage[parseInt(props.id)])

                            { obj[props.name] = number +1 }

                            localStorage.setItem(props.id, JSON.stringify(obj))

                            
                        }

                    }>+</p>

                    <p className={style.number}>{number}</p>

                    <p className={style.button} onClick={() => {
                        if (number > 1) {
                            setNumber(number - 1)

                            let obj = JSON.parse(localStorage[parseInt(props.id)])

                            { obj[props.name] = number - 1 }

                            localStorage.setItem(props.id, JSON.stringify(obj))

                            


                        } else {
                            delete localStorage[parseInt(props.id)]

                          
                            
                            elementRef.current.remove()
                        }
                    }}>-</p>

                </div>
            </div>

        </div>
    )
}

export default CardCart