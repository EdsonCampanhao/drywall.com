'use client'
import style from './Product_card.module.css';
import { IoMdCart } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import products from '../products';
import { useEffect, useState } from 'react';


export default function Product_card(props) {

    const [audio, setAudio] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const newAudio = new Audio('/click_effect.mp3');
            setAudio(newAudio);
        }
    }, []);
    return (
        <div className={style.card}>
            <img src={props.path} className={style.product} />
            <h3 className={style.product_text}>{props.product}</h3>

            <div className={style.car}>
                <IoMdCart size={32} onClick={(e) => {
                    if (Object.keys(localStorage).indexOf(props.product) < 0) {

                        for (let product in products) {
                            if (products[product].nome == props.product) {
                                const item = {}

                                item[props.product] = 1

                                localStorage.setItem(product, JSON.stringify(item));
                                break
                            }
                        }
                    }

                    if (e.target.parentNode.style.backgroundColor != 'gray') {
                        e.target.parentNode.style.backgroundColor = "gray";
                        audio.play()
                    }




                }} />
            </div>
            <div className={style.help}>
                <FaRegQuestionCircle size={16} />
            </div>
        </div>
    )


}