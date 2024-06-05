
import style from './Forms.module.css'
import { useForm, SubmitHandler } from "react-hook-form"

export function FormTeto() {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <div className={style.container} >
                    <label className={style.label}>O forro terá revestimento acústico?
                        <select required {...register('forro acustico')} className={style.select} >
                            <option>não</option>
                            <option>lã de vidro</option>
                            <option>lã de rocha</option>
                        </select>
                    </label>
                </div>
                <div className={style.container} >
                    <label className={style.label} >Qual a altura do rebaixamento em metros? (do teto ao forro)
                        <input required type='number' step="any"  {...register('altura rebaixamento')} className={style.input}></input>
                    </label>
                </div>
                <div className={style.container}>
                    <label className={style.label}>Qual a largura do teto em metros?
                        <input required type='number' step="any"   {...register('largura teto')} className={style.input}></input>
                    </label>
                </div>
                <div className={style.container} >
                    <label className={style.label} >Qual o comprimento do teto em metros?
                        <input required type='number' step="any"   {...register('comprimento teto')} className={style.input}></input>
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
                        <select required {...register('forro acustico')} className={style.select} >

                            <option>não</option>
                            <option>lã de vidro</option>
                            <option>lã de rocha</option>
                        </select>
                    </label>
                </div>
                <div className={style.container} >
                    <label className={style.label}>Qual a esspessura da ferragem?
                        <select required {...register('espessura parede')} className={style.select} >

                            <option>48mm (parede final com 8cm)</option>
                            <option>70mm (parede final com 10cm)</option>
                            <option>90mm (parede final com 12cm)</option>
                        </select>
                    </label>
                </div>
                <div className={style.container}>
                    <label className={style.label}>Qual a altura da parede em metros?
                        <input required type='number' step="any"   {...register('pe direito')} className={style.input}></input>
                    </label>
                </div>
                <div className={style.container} >
                    <label className={style.label} >Qual a largura da parede em metros?
                        <input required type='number' step="any"   {...register('largura parede')} className={style.input}></input>
                    </label>
                </div>
                <div className={style.button_container}>
                    <button className={style.button}> calcular material </button>
                </div>
            </form>
        </>

    )
}

