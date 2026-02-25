import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from '../src/NavBar.jsx'
import Footer from '../src/Footer.jsx'

createRoot(document.getElementById('nav-bar')).render(
    <StrictMode>
        <NavBar></NavBar>
    </StrictMode>
)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)


createRoot(document.getElementById('footer')).render(
    <StrictMode>
        <Footer />
    </StrictMode>
)


{
    // document.addEventListener('DOMContentLoaded', () => alert('Check out the buttons class for CSS hover effects!'));
}