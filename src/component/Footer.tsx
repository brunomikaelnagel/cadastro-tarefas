// Css
import "./Footer.css"


interface IFooterProps {
    title: string
}

export default function Footer( { title } : IFooterProps ){
    return(
        <footer className="footer flex_center">
            <span>{title}</span> @2023
        </footer>
    )
}