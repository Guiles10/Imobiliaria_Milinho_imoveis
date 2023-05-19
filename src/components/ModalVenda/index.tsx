import { useState, useEffect } from 'react';
import { StyledModalVenda } from './styled';
import { FaWhatsappSquare } from 'react-icons/fa'
interface IPropsModal {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalVenda = ({ setModalOpen }: IPropsModal ) => {

    return (
    <StyledModalVenda >
        <div className="DivModal">
            <div className='DivHeaderModal'>
                <h1>Venda</h1>
                <button className="CloseBtn" onClick={() => setModalOpen(false)}>X</button>
            </div>
            <div className="BodyModal">
                <h3>Quero vendar meu imóvel !!</h3>
            </div>
            <div className="DivInfos">
                <p>Clique no botão abaixo para entrar em contato com nossos corretores e anunciar meu imóvel</p> 
                <a className="contact-button" href="https://api.whatsapp.com/send?phone=55999076059" target="_blank" rel="noopener noreferrer">Anunciar Imóvel</a>
            </div>
        </div>
    </StyledModalVenda>
  );
};
