import React, { useEffect, useState } from 'react';
import './Rocket.css'; // Asegúrate de importar el archivo CSS

const Rocket = () => {
  const [position, setPosition] = useState(0);
  const [haze, setHaze] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev < window.innerWidth ? prev + 5 : -100)); // Regresa al inicio
      setHaze(true);
      setTimeout(() => setHaze(false), 500); // Desactiva el humo después de un tiempo
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`rocket absolute top-1/2 transform -translate-y-1/2 transition-transform duration-1000`}
        style={{ left: `${position}px` }}
      >
        🚀
      </div>
      {haze && (
        <div className="haze absolute top-1/2 transform -translate-y-1/2">
          <div className="haze-effect"></div>
          <div className="haze-effect"></div>
          <div className="haze-effect"></div>
        </div>
      )}
    </div>
  );
};

export default Rocket;
