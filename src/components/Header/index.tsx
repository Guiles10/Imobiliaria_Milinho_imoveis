import { StyledHeader } from './styled'
import Logo from '../../assets/react.svg'
import { useState } from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

interface IPropsModal {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const Header = ({ setModalOpen, setFilter }: IPropsModal ) => {
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
                <nav className={`Nav ${menuOpen ? 'open' : ''}`}>
                    <ul className='UlHeader'>
                        <li className='LiHeader'><button onClick={() => setModalOpen(true)}>Venda</button></li>
                        <li className='LiHeader'><button onClick={() => setFilter('Todos')}>Todos</button></li>
                        <li className='LiHeader'><button onClick={() => setFilter('Venda')}>Compra</button></li>
                        <li className='LiHeader'><button onClick={() => setFilter('Aluguel')}>Aluga</button></li>
                    </ul>
                </nav>

                    <div className='MenuButton' onClick={toggleMenu}>
                        {menuOpen ? <AiOutlineClose className='close' /> : <AiOutlineAlignLeft className='open'/>}
                    </div>
                
                {active ? 
                <>

                    <nav className="navMobile">
                        <ul>
                            <li className='navIten'><button onClick={() => setModalOpen(true)}>Venda</button></li>
                            <li className='navIten'><button onClick={() => setFilter('Todos')}>Todos</button></li>
                            <li className='navIten'><button onClick={() => setFilter('Venda')}>Compra</button></li>
                            <li className='navIten'><button onClick={() => setFilter('Aluguel')}>Aluga</button></li>
                        </ul> 
                    </nav>
                </>
                :
                    null}
            </div>
        </StyledHeader>
    )
}
