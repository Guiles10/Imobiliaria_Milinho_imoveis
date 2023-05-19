import { StyledFooter } from './styled'
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

export const Footer = () => {
    return (
        <StyledFooter >
        <div className='DivFooter'>
            <div className='DivLogo'>
                <h1>LOGO</h1>
            </div>
            <div className='DivItens'>
                <a className='Insta' href="https://www.instagram.com/milinhoo20/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a className='Face' href="https://www.facebook.com/profile.php?id=100054228650872" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <p className='Fone'><FiPhone /><small>(55)99907-6059</small></p>
            </div>
        </div>
    </StyledFooter>
    )
}