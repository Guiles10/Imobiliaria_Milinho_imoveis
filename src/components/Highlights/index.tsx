import { Cards } from '../Cards';
import { StyledHighlights} from './styled'

interface HighlightsProps {
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

interface HighlightsProp {
    propertiesData: HighlightsProps[];
}

export const Highlights = ({ propertiesData }: HighlightsProp ) => {
    return (
        <StyledHighlights>
            <div className='DivHighlights'>
                <h1 className='Title'>Melhores Negócios</h1>
                <ul className='UlCards'>
                    {propertiesData.map((propertie, index) => {
                        if (propertie.destaque === true){
                            return <Cards
                                    key={index}
                                    id={propertie.id}
                                    brique={propertie.brique}
                                    tipo={propertie.tipo}
                                    capa={propertie.capa}
                                    image={propertie.image}
                                    title={propertie.title}
                                    area={propertie.area}
                                    price={propertie.price}
                                    level={propertie.level}
                                    description={propertie.description}
                                    destaque={propertie.destaque}  />
                    }})}
                </ul>
            </div>
        </StyledHighlights>
    )
}