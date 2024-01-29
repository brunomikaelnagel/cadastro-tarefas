//imports
import { ReactNode } from "react"

//Css
import "./Modal.css"

interface IModalProps {
    open: boolean
    children: ReactNode
}

export default function Modal( { children, open }: IModalProps ){
    return(
        <>
            {open && (
                <div id="modal_container">
                    <div className="fade"></div>
                    <div className="modal_content">
                        {children}
                    </div>
                </div>
            )}
            {!open && null}
        </>
    )
}