import { useState, useEffect } from 'react';
import { StyledSlides } from './styled'

export const Slides = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        'https://picsum.photos/id/1018/600/400',
        'https://picsum.photos/id/1020/600/400',
        'https://picsum.photos/id/1024/600/400',
        'https://picsum.photos/id/1042/600/400',
        'https://picsum.photos/id/1052/600/400'
    ];

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
      };
    
      const handlePrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
      };
    
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(intervalId);
    }, [currentSlide, images.length]);

    return(
        <StyledSlides>
            <div className='DivSlides'>
                <button className="button-prev" onClick={handlePrevSlide}>&lt;&lt;</button>
                <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                <button className="button-next" onClick={handleNextSlide}>&gt;&gt;</button>
            </div>
        </StyledSlides>
    )
}
