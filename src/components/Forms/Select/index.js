import style from './Select.module.css'
export default function Select(props) {
    return (

        <div className={style.container}>
            <label className={style.label}>{props.text}
                <select required>
                    {props.options.map((option, i) => {
                        return <option key={i}>{option}</option>
                    })}
                </select>
            </label>
        </div>

    )
}