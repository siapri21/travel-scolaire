import React, { useState, useEffect } from 'react';
import '../composantes/styles/carroussel.css'; 
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";

export default function Carroussel(){
    
  const slides = [
    { id: 1, name: "Switzerland", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", img: "https://i.ibb.co/qCkd9jS/img1.jpg" },
    { id: 2, name: "Finland", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", img: "https://i.ibb.co/jrRb11q/img2.jpg" },
    { id: 3, name: "Iceland", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", img: "https://i.ibb.co/NSwVv8D/img3.jpg" },
    { id: 4, name: "Australia", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", img: "https://i.ibb.co/Bq4Q0M8/img4.jpg" },
    { id: 5, name: "Netherland", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", img: "https://i.ibb.co/jTQfmTq/img5.jpg" },
    { id: 6, name: "Ireland", des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!", img: "https://i.ibb.co/RNkk6L0/img6.jpg" },
  ];
  const [items, setItems] = useState([]);

// Initialiser les items avec les slides au montage du composant
useEffect(() => {
    setItems(slides);
  }, []);

  // Fonction pour gérer le clic sur le bouton "Suivant"
function handleNext() {
  setItems(prevItems => {
    const [first, ...rest] = prevItems;
    return [...rest, first];
});
}

// Fonction pour gérer le clic sur le bouton "Précédent"
function handlePrev() {
  setItems(prevItems => {
    const last = prevItems[prevItems.length - 1];
    const rest = prevItems.slice(0, prevItems.length - 1);
    return [last, ...rest];
});
}

  return (
    <div className="conteneur">
      <div className="conteneur-slide">
        {slides.map(slide => (
          <div key={slide.id} className="conteneur-item" style={{ backgroundImage: `url(${slide.img})` }}>
            <div className="conteneur-content">
              <div className="name">{slide.name}</div>
              <div className="des">{slide.des}</div>
              <button>See More</button>
            </div>
          </div>
        ))}
      </div>
      <div class="button">
          <button class="prev" onClick={handlePrev}><GiFastBackwardButton  className="icon"   /></button>
          <button class="next" onClick={handleNext}><GiFastForwardButton  className="icon"    /></button>
      </div>
    </div>
  );
};


