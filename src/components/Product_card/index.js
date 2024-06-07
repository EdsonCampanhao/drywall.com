'use client'
import style from './Product_card.module.css';
import { IoMdCart } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import products from '../products';
import { useEffect } from 'react';

export default function Product_card(props) {


    useEffect(() => {
        if (typeof window !== 'undefined') {
            return (
                <div className={style.card}>
                    <img src={props.path} className={style.product} />
                    <h3 className={style.product_text}>{props.product}</h3>

                    <div className={style.car}>
                        <IoMdCart size={32} onClick={() => {
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
                        }} />
                    </div>
                    <div className={style.help}>
                        <FaRegQuestionCircle size={16} />
                    </div>
                </div>
            )
        }
    }, []);

}