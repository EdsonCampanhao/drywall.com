import Imput from './Imput/index'
import forms from '@/app/calculator/forms'
export function FormTeto() {
    return (
        <>
        {Object.keys(forms.teto).map((key)=>{

            if(forms.teto[key].type=='input'){
                return <Imput text={forms.teto[key].ask} type='number' /> 
            }else{

            }
        })}
            <button></button>
        </>
    )
}
export function FormParede() {
    return (
        <>
        {Object.keys(forms.parede).map((key)=>{

            if(forms.parede[key].type=='input'){
                return <Imput text={forms.parede[key].ask} type='number' /> 
            }else{

            }
        })}
            <button></button>
        </>
    )
}

