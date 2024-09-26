import { useEffect, useState } from "react";

function Countdown() {
  const [mounted, setMounted] = useState(false); // Verifica si está montado en el cliente
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-10-05T15:00:00-05:00"); // Fecha objetivo (Ecuador)
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    // Solo monta el contador una vez que el componente esté en el cliente
    setMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  // Si el componente no está montado, no renderiza el contador
  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center flex-col space-y-4 mt-8">
      <h1 className="text-2xl font-fredoka  ">Falta muy poquito para la fecha 🥳</h1>
      <div className="sm:flex sm:space-x-4 grid grid-cols-2 gap-4   text-center">
        <div className="p-4 bg-[#F7C5A4] text-white rounded-lg">
          <p className="text-4xl font-bold">{timeLeft.days}</p>
          <span className="sm:text-xl text-lg font-hachi">Días</span>
        </div>
        <div className="p-4 bg-[#94C9E7] text-white rounded-lg">
          <p className="text-4xl font-bold">{timeLeft.hours}</p>
          <span className="sm:text-xl text-lg font-hachi" >Horas</span>
        </div>
        <div className="p-4 sm:bg-[#F7C5A4] bg-[#94C9E7] text-white rounded-lg">
          <p className="text-4xl font-bold">{timeLeft.minutes}</p>
          <span className="sm:text-xl text-lg font-hachi" >Minutos</span>
        </div>
        <div className="p-4 bg-[#F7C5A4] sm:bg-[#94C9E7] text-white rounded-lg">
          <p className="text-4xl font-bold">{timeLeft.seconds}</p>
          <span className="sm:text-xl text-lg font-hachi">Segundos</span>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
