import logo from "../assets/react.svg";

export default function Main() {
    return (
        <main> 
            {/* <img src={logo} alt="React logo" className="react-logo" /> */}
            <h1>Fun facts about react</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K on Github</li>
                <li>Is mentained by meta</li>
                <li>Powers thousands of enterprise app, including mobile apps</li>
            </ul> 
        </main>
    )
}