
import style from './Forms.module.css'
import { useForm, SubmitHandler } from "react-hook-form"

export function FormTeto() {

    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
       localStorage.clear()

       data.larguraTeto=parseInt(data.larguraTeto)
       data.comprimentoTeto=parseInt(data.comprimentoTeto)

       const materials = {
       36:{ 'placa st':Math.round((data.larguraTeto*data.comprimentoTeto)/2.16)},
       9:{'cantoneira':Math.round((data.larguraTeto+data.comprimentoTeto)*2/3)},
       1:{'perfil f530':Math.round((data.larguraTeto*data.comprimentoTeto)*2/3)},
       39:{'tirante':(Math.round((data.larguraTeto*data.comprimentoTeto)*2/3))*2},
       2:{'regulador':(Math.round((data.larguraTeto*data.comprimentoTeto)*2/3))*2},
       32:{'caixa de parafuso':Math.round(((data.larguraTeto*data.comprimentoTeto)/2.16)*30/100)},
       18:{'fita telada':Math.ceil(((data.larguraTeto*data.comprimentoTeto)*2)/90)},
       28:{'massa drywall':Math.round((((data.larguraTeto*data.comprimentoTeto)/2/5)))},
       25:{'lã de rocha':Math.round((data.larguraTeto*data.comprimentoTeto)/4.32)},
       26:{'lã de vidro':Math.round((data.larguraTeto*data.comprimentoTeto)/15)}
       }
       

       Object.keys(materials).map((key)=>{
        localStorage.setItem(parseInt(key),JSON.stringify(materials[key]))
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
                    <button className={style.button}> calcular material </button>
                </div>
            </form>
        </>
    )
}
export function FormParede() {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

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
                    <button className={style.button}> calcular material </button>
                </div>
            </form>
        </>

    )
}

