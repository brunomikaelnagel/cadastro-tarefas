import { InputHTMLAttributes } from "react"
import "./InputPers.css"

export interface TInputPersProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function InputPers({ label, ...restProps } : TInputPersProps ){
    return(
        <label className="input_pers_container">
            <b>{label}:</b>
            <input {...restProps } className="input_pers"/>
        </label>
    )
}