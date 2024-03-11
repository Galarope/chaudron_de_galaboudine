import '../styles/Banner.css'
import logo from '../assets/logo.png'


function Banner() {

    return (
    <div className='cdg-banner'>
        <img src={logo} alt='Chaudron de Galaboudine' className='cdg-logo'/>
        <h1 className='cdg-title'>Le chaudron de Galaboudine</h1>
    </div>) 
}

export default Banner