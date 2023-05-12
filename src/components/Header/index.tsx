import { StyledHeader } from './styled'
import Logo from '../../assets/react.svg'
import { useState } from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
      setActive(!active);;
    };

    return(
        <StyledHeader>
            <div className='DivHeader'>
                <div className='DivLogo'>
                    <img className='Logo' src={Logo} alt="Milinho Imoveis" />
                </div>
                {/* <nav className={`Nav ${menuOpen ? 'open' : ''}`}>
                    <ul className='UlHeader'>
                        <li className='LiHeader'><button>Compra</button></li>
                        <li className='LiHeader'><button>Aluga</button></li>
                        <li className='LiHeader'><button>Contato</button></li>
                    </ul>
                </nav>

                    <div className='MenuButton' onClick={toggleMenu}>
                        {menuOpen ? <AiOutlineClose className='close' /> : <AiOutlineAlignLeft className='open'/>}
                    </div>
                
                {active ? 
                <>

                    <nav className="navMobile">
                        <ul>
                            <li className='navIten'><button>Compra</button></li>
                            <li className='navIten'><button>Aluga</button></li>
                            <li className='navIten'><button>Contato</button></li>
                            <li className='navIten'><button>Portfolio</button></li>
                        </ul> 
                    </nav>
                </>
                :
                    null} */}
            </div>
        </StyledHeader>
    )
}
