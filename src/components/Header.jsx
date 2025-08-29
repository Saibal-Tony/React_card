import logo from "../assets/react.svg"

export default function Header() 
{ //no name needed here in default export
    return (
        <header>
            <nav>
                <img src={logo} className='nav-img' alt='react logo' />
                <span>
                    React Facts
                </span>
            </nav>
        </header>
    )
}