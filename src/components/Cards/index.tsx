import { useState, useEffect } from 'react';
import { StyledCard } from './styled'

interface CardProps {
    id: number;
    image: string;
    title: string;
    area: number;
    value: number;
    level: string;
}

export const Cards = ({ id, image, title, area, value, level }: CardProps) => {

    return (
        <StyledCard>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{area} m²</p>
            <p>R$ {value}</p>
            <p>{level}</p>
        </StyledCard>
    )
}
