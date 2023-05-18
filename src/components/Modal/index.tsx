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

    const modalClass = showModal ? "modalshow" : "modalhide";

    return (
    <StyledModal >
        <div className="DivModal">
                <div className='DivHeaderModal'>
                    <h1>{title}</h1>
                    <button className="CloseBtn" onClick={toggleModal}>X</button>
                </div>
            <section>
                <div className={modalClass}>
                    <div className="DivImg">
                        <button className="prev-button" onClick={handlePrev}>&#10094;</button>
                        <img src={image[currentIndex]} alt={title} />
                        <button className="next-button" onClick={handleNext}>&#10095;</button>
                    </div>
                </div>
                <div className="DivInfos">
                    <div>
                        <p>Area: </p>
                        <small>{area} m²</small>
                    </div>
                    <div>
                        <p>Price: </p>
                        <small>R$ {price}</small>
                    </div>
                    <div>
                        <p>Level: </p>
                        <small>{level}</small>
                    </div>
                    <div>
                        <p>Description: </p>
                        <small>{description}</small>
                    </div>
                <a className="contact-button" href="https://api.whatsapp.com/send?phone=55996950011" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare className='WhatsApp'/>Mais Informações</a>
                </div>
            </section>
        </div>
    </StyledModal>
  );
};
