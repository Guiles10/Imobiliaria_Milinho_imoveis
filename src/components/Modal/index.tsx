import { useState, useEffect } from 'react';
import { StyledModal } from './styled';
import { FaWhatsappSquare } from 'react-icons/fa'

interface CardProps {
    id: number;
    image: string[];
    title: string;
    area: number;
    price: string;
    level: string;
    description: string;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ id, image, title, area, price, level, description, showModal, setShowModal }: CardProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex === image.length - 1) {
        setCurrentIndex(0);
        } else {
        setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex === 0) {
        setCurrentIndex(image.length - 1);
        } else {
        setCurrentIndex(currentIndex - 1);
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const modalClass = showModal ? "modal show" : "modal hide";

    return (
    <StyledModal >
        <div className="DivModal">
            <div className='DivHeaderModal'>
                <h1>{title}</h1>
                <button className="CloseBtn" onClick={toggleModal}>X</button>
            </div>
            <div className={modalClass}>
                <div className="DivImg">
                    <button className="prev-button" onClick={handlePrev}>&#10094;</button>
                    <img src={image[currentIndex]} alt={title} />
                    <button className="next-button" onClick={handleNext}>&#10095;</button>
                </div>
            </div>
            <div className="DivInfos">
                {/* <p>ID: <small>{id}</small></p> */}
                <p>Area: <small>{area} m²</small></p>
                <p>Price: <small>R$ {price}</small></p>
                <p>Level: <small>{level}</small></p>
                <p>Description: <small>{description}</small></p>
            </div>
            <a className="contact-button" href="https://wa.me/whatsappphonenumber"><FaWhatsappSquare className='WhatsApp'/>Enviar Mensagem</a>
        </div>
    </StyledModal>
  );
};
