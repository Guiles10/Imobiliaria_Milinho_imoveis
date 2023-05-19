import { useState, useEffect } from 'react';
import { StyledCardSmall } from './styled'
import { Modal } from '../Modal';


interface CardProps {
    key: number;
    id: number;
    brique: string;
    tipo: string;
    capa: string;
    image: string[];
    title: string;
    area: number;
    price: string;
    level: string;
    description: string;
    destaque: boolean;
}

export const CardSmall = ({ key, id, brique, tipo, capa, image, title, area, price, level, description, destaque }: CardProps) => {

    const [showModal, setShowModal] = useState(false);


    return (
        <>
            {showModal ?
                <Modal key={id} id={id} image={image} title={title} area={area} price={price} level={level} description={description} showModal={showModal} setShowModal={setShowModal}/>
            :
                null
            }
                
            <StyledCardSmall >
                <div className="DivTitle">
                    <h2>{title}</h2>
                </div>
                <img src={capa} alt={title} />
                {/* <h1>Oprunidade !!</h1> */}
                    {/* <div className="DivInfos">
                        <p>Area:<small>{area} m²</small></p>
                        <p>Valor:<small>R$ {price}</small></p>
                        <p>Padrão:<small>{level}</small></p>
                    </div> */}
             <button onClick={() => setShowModal(true)}>Mais Informações</button>
            </StyledCardSmall>
        </>
    )
}
