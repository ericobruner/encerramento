'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/encerramento.png', 
  '/images/encerramento (18).jpg',
  '/images/encerramento (19).jpg',
  '/images/encerramento (20).jpg',
  '/images/encerramento (21).jpg',
  '/images/encerramento (22).jpg',
  '/images/encerramento (23).jpg',
  '/images/encerramento (24).jpg',
  '/images/encerramento (25).jpg',
  '/images/encerramento (26).jpg',
  '/images/encerramento (27).jpg',
  '/images/encerramento (28).jpg',
  '/images/encerramento (29).jpg',
  '/images/encerramento (30).jpg',
  '/images/encerramento (31).jpg',
  '/images/encerramento (1).jpg',
  '/images/encerramento (2).jpg',
  '/images/encerramento (3).jpg',
  '/images/encerramento (4).jpg',
  '/images/encerramento (6).jpg',
  '/images/encerramento (7).jpg',
  '/images/encerramento (8).jpg',
  '/images/encerramento (9).jpg',
  '/images/encerramento (10).jpg',
  '/images/encerramento (11).jpg',
  '/images/encerramento (12).jpg',
  '/images/encerramento (13).jpg',
  '/images/encerramento (14).jpg',
  '/images/encerramento (15).jpg',
  '/images/encerramento (16).jpg',
  '/images/encerramento (17).jpg',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowImage(prev => !prev); // Alterna entre mostrar e esconder a imagem
      console.log("entrou")
    }, 1000); // A cada 6 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
    <div className="carousel-container">
      <button className={`arrow left`} onClick={handleLeftClick}>
        &lt;
      </button>
      
      <div className="image-container">
        {images[currentImageIndex] && (
          <Image 
            src={images[currentImageIndex]} 
            alt={`Imagem ${currentImageIndex + 1}`} 
            layout="fill" 
            objectFit="contain"
            className="image" 
          />
        )}
      </div>

      <button className={`arrow right`} onClick={handleRightClick}>
        &gt;
      </button>
    </div>
    </>
  );
}
