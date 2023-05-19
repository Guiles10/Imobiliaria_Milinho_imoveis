
import { StyledBtnWhats } from './styled'
import { FaWhatsappSquare } from 'react-icons/fa'


export const WhatsApp = ({}) => {

    return (
        <StyledBtnWhats href="https://api.whatsapp.com/send?phone=55999076059" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className='WhatsApp'/>
        </StyledBtnWhats>

    )
}
