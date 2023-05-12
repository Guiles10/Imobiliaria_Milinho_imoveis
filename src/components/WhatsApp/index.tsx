
import { StyledBtnWhats } from './styled'
import { FaWhatsappSquare } from 'react-icons/fa'


export const WhatsApp = ({}) => {

    return (
        <StyledBtnWhats href="https://wa.me/whatsappphonenumber" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className='WhatsApp'/>
        </StyledBtnWhats>

    )
}
