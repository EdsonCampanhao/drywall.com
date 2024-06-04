import Imput from './Imput/index'
import forms from '@/app/calculator/forms'
import Select from './Select'
import style from './Forms.module.css'
export function FormTeto() {
    return (
        <>
            {Object.keys(forms.teto).map((key) => {

                if (forms.teto[key].type == 'input') {
                    return <Imput text={forms.teto[key].ask} type='number' />
                } else {
                    return <Select text={forms.teto[key].ask} options={Object.values(forms.teto[key].options)}></Select>

                }
            })}
            <div className={style.button_container}>
                <button className={style.button}> gerar pdf </button>
                <button className={style.button}> adicionar ao carrinho </button>
            </div>

        </>
    )
}
export function FormParede() {
    return (
        <>
            {Object.keys(forms.parede).map((key) => {

                if (forms.parede[key].type == 'input') {
                    return <Imput text={forms.parede[key].ask} type='number' />
                } else {
                    return <Select text={forms.parede[key].ask} options={Object.values(forms.parede[key].options)}></Select>

                }
            })}
            <div className={style.button_container}>
                <button className={style.button}> gerar pdf </button>
                <button className={style.button}> adicionar ao carrinho </button>
            </div>
        </>
    )
}

