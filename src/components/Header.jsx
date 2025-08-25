import logo from "../assets/react.svg"

export default function Header() 
{ //no name needed here in default export
    return (
        <header className='header'>
            <img src={logo} className='nav-img' alt='react logo' />
            <span>
                React Facts
            </span>
        </header>
    )
}