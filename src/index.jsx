import { createRoot } from 'react-dom/client'

import Header from './components/Header'; // import custom component
// {} - not needed for default export
import Body from './components/Body'; 
import Footer from './components/Footer';

const root = createRoot(document.getElementById('root'));

// console.log(<h1>HEllo<h1/>) --> it just return an object

function MainBody() { // this is custom component - PascalCase
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

root.render(
    <MainBody />
)

