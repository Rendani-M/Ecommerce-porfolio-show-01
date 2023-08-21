import React, { useState, useEffect } from "react";
import "./Slider.scss"; 

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const data = [
    "https://bubblegumclub.co.za/wp-content/uploads/2022/04/Sheinx_May_Finale_1228-scaled-e1635444955252.webp",
    "https://images.squarespace-cdn.com/content/v1/5950a68720099e6f69ce32e4/1629358350508-YT42A1MPHF5URL7BSJUT/Yu+Hang+Ashley+%7C+Made+Suits+Cape+Suit+made+for+women+suits+singapore.jpeg",
    "https://www.businessmagazine.org/wp-content/uploads/2021/12/Shopping.jpg",
    "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMHN1aXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    "https://i.pinimg.com/736x/e5/6b/79/e56b799b365e63c41041feb38fb7e965--guy-models-men-fashion.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/promotional-mega-sale-ad-design-template-eb67cbc64c446c45ec235cbec4ad60ec_screen.jpg?ts=1566609909"
  ];

  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };
  
    const updateImageWidth = () => {
      const screenWidth = window.innerWidth;
      setImageWidth(screenWidth);
    };
  
    // Update image width on initial load and window resize
    updateImageWidth();
    window.addEventListener('resize', updateImageWidth);
  
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
  
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', updateImageWidth);
    };
  }, [data.length]);
  

  return (
    <div className="slider">
      <div
        className="container"
        style={{
          transform: `translateX(-${currentSlide * imageWidth}px)`,
          width: `${data.length * imageWidth}px`,
        }}
      >
        {data.map((image, index) => (
          <div
            className="image"
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: `${imageWidth}px`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

