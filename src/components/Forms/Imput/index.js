import style from './Imput.module.css'

export default function Imput(props){
    return(
        <div className={style.container}>
            <label className={style.label}>{props.text}
                <input className={style.input} type={props.type} />
            </label>
        </div>
    )
}