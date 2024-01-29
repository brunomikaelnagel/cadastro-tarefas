// Css
import "./Header.css"


interface IHeaderProps {
    title: string
}

export default function Header( { title } : IHeaderProps ){
    return(
        <header className="header flex_center">
            <h1>{title}</h1>
        </header>
    )
}