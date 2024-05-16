import style from './Product_card.module.css';
import { IoMdCart } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";

export default function Product_card(props){
    return(
        <div className={style.card}>
            <img src={props.path} className={style.product} />
            <h3>{props.product}</h3>
            
            <div className={style.car}>
                <IoMdCart size={32} />
            </div>
            <div className={style.help}>
                <FaRegQuestionCircle size={16}/>
            </div>
        </div>
     )
}