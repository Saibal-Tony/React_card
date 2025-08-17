export default function Header() { //no name needed here in default export
    return (
        <header className='header'>
            <img src="assets/react.png" className='nav-img' alt='react logo' />
            <nav>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}