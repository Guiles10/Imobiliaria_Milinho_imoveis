import { StyledHeader } from './styled'
import Logo from '../../assets/react.svg'

export const Header = () => {
    return(
        <StyledHeader>
            <div className='DivHeader'>
                <div className='DivLogo'>
                    <img className='Logo' src={Logo} alt="Milinho Imoveis" />
                </div>
                <nav className='Nav'>
                    <ul className='UlHeader'>
                        <li className='LiHeader'><button>Compra</button></li>
                        <li className='LiHeader'><button>Aluga</button></li>
                        <li className='LiHeader'><button>Contato</button></li>
                    </ul>
                </nav>
            </div>
        </StyledHeader>
    )
}
