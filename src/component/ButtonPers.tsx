import { ButtonHTMLAttributes, ReactNode } from "react"
import "./ButtonPers.css"

export interface TButtonPersProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export default function ButtonPers({ children, ...restProps } : TButtonPersProps ){
    return(
        <button {...restProps} className="button_pers">
            {children}
        </button>
    )
}