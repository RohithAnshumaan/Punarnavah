import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  linkText: string;
}

const Card = ({ id, name, description, image, linkText }: CardProps) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Navigate when clicking the card
  const handleCardClick = () => {
    navigate(`/waste-req-overview/${id}`);
  };

  return (
    <>
      <div
        className="my-8 mx-5 relative w-[300px] h-[370px] bg-white border-2 border-black p-2 overflow-hidden shadow-left-bottom cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleCardClick} // Add onClick handler for the whole card
      >
        <div
          className={`w-full border-2 border-black mb-2 overflow-hidden transition-all duration-300 ${
            hovered ? "h-[210px]" : "h-[270px]"
          }`}
        >
          <img
            src={image}
            alt="Card Image"
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-xl font-bold mb-2 mt-2">{name}</h2>

        <div
          className={`transition-transform duration-300 ${
            hovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          } absolute bottom-0 left-0 w-full p-4 bg-white`}
        >
          <div className="overflow-hidden max-h-[80px]">
            <p className="text-sm mb-2 line-clamp-2">{description}</p>
          </div>
          <span className="text-secondary font-bold text-sm flex items-center mt-2">
            {linkText} <span className="ml-2 text-lg">→</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
