import style from './Card_feedback.module.css';
import { VscFeedback } from "react-icons/vsc";  

export default function Card_feedback(props){
    return(
        <div className={style.card}>
            <div className={style.icon}>
                <VscFeedback stroke={8} size={32} />
            </div>
            <h3>{props.user}</h3>
            <p className={style.text}>{props.feedback}</p>
        </div>
    )
}