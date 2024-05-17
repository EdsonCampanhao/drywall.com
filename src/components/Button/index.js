import style from './Button.module.css'

export default function NewButton(props){

   return ( <div className={style.button} style={{backgroundColor:props.bgColor}}>

        <p className={style.text} style={{color:props.color}}>{props.children}</p>

    </div>)

}