"use client"
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { useSearchParams } from "next/navigation"
import Image from "next/image";
import CountDown from "@/components/CountDown/CountDown";

export default function Home() {
  // const params = useSearchParams();
  // const user = params.get('u');
  const searchParams = useSearchParams();
  const paramValue = searchParams.get('u');

  function capitalizeFirstLetter(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const launchConfetti = () => {
    // var duration = 10 * 1000;
    // var animationEnd = Date.now() + duration;
    // var defaults = { startVelocity: 12, spread: 500, ticks: 100, zIndex: 0 };

    // function randomInRange(min: number, max: number) {
    //   return Math.random() * (max - min) + min;
    // }

    // var interval = setInterval(function () {
    //   var timeLeft = animationEnd - Date.now();

    //   if (timeLeft <= 0) {
    //     return clearInterval(interval);
    //   }

    //   var particleCount = 50 * (timeLeft / duration);
    //   // since particles fall down, start a bit higher than random
    //   confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
    //   confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    // }, 250);

    // const duration = 15 * 1000; // Duración en milisegundos
    // const end = Date.now() + duration;

    // const colors = ['#B78256', '#628cca', '#7EB9E2', '#F7C5A4', '#D7F1FF'];

    // (function frame() {
    //   // Generar confeti
    //   confetti({
    //     particleCount: 5,
    //     angle: 60,
    //     spread: 55,
    //     startVelocity: 20,
    //     // colors: colors,
    //     origin: { x: 0, y: 0.2 }
    //   });
    //   confetti({
    //     particleCount: 5,
    //     angle: 120,
    //     spread: 55,
    //     startVelocity: 20,
    //     // colors: colors,
    //     origin: { x: 1, y: 0.2 }
    //   });

    //   // Continúa lanzando confeti hasta que se alcance la duración
    //   if (Date.now() < end) {
    //     requestAnimationFrame(frame);
    //   }
    // })();


    var count = 300;
    var defaults = {
      origin: { y: 0.7 }
    };



    function fire(particleRatio: any, opts: any) {
      const colors = ['#B78256', '#628cca', '#7EB9E2', '#F7C5A4', '#D7F1FF'];
      confetti({
        ...defaults,
        ...opts,
        colors: colors,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

  };

  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleViewMaps = (latitude: string, longitude: string) => {
    try {
      const url = (latitude !== '' && longitude !== '') ? `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=-3.3225931563607256,-79.81192968225473` : `https://www.google.com/maps/dir/?api=1&destination=-3.3225931563607256,-79.81192968225473`;

      window.open(url, '_blank'); // _blank abre en nueva pestaña
    } catch (error) {

    }
  }


  useEffect(() => {
    // Verifica si la API de Geolocalización está disponible
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Almacena las coordenadas en el estado
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          // Maneja los errores de geolocalización
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("Permiso denegado");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("Posición no disponible");
              break;
            case error.TIMEOUT:
              setError("La solicitud ha caducado");
              break;
            default:
              setError("Ocurrió un error al obtener la ubicación");
              break;
          }
        }
      );
    } else {
      setError("La geolocalización no es compatible con este navegador");
    }
  }, []);



  useEffect(() => {
    launchConfetti();
  }, []);

  return (
    <div className=" flex items-center justify-center">
      <div className="w-full h-full p-5 animate-fade-up animate-duration-2000 animate-delay-500">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-4">
          <img
            src="/osoMain.png"
            alt="oso animado"
            className="w-full h-full object-cover animate-float "
          />
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-0 items-center">
                <span className="text-[#2a2b2a] font-fredoka sm:text-xl text-lg text-center ">
                  Hola {capitalizeFirstLetter(paramValue || '')}! te invitamos a celebrar con nosotros el
                </span>
                <h1 className="text-[#628cca] font-distant sm:text-9xl text-7xl animate-fade-up animate-duration-1000 animate-delay-500">
                  Baby Shower
                </h1>
                <span className="text-[#2a2b2a] font-fredoka sm:text-xl text-lg text-center">
                  de nuestro amado hijo.
                </span>
              </div>
              <div className="flex flex-col sm:items-end items-center gap-2 sm:mt-4 mt-0 px-0 sm:px-10">
                <span className="sm:text-xl text-base font-hachi sm:text-right text-center">{`"Antes de darte la vida, ya te había yo escogido; antes de que nacieras, ya te había yo apartado; te había destinado a ser profeta de las naciones"`}</span>
                <span className="text-xl font-fredoka">{`Jeremías 1:5`}</span>
              </div>
              <div className="flex flex-col gap-1 sm:mt-5 mt-0  justify-center items-center w-full animate-jump-in animate-duration-2000 animate-delay-500">
                <div className="relative flex items-center gap-10 justify-center border-dotted border-[#B78256] border-2 sm:border-none rounded-lg py-1 px-5 sm:bg-none bg-opacity-5 sm:backdrop-filter-none backdrop-blur-md before:absolute before:inset-0 before:bg-white/20 before:backdrop-blur-lg before:rounded-lg sm:before:hidden">
                  <span className="relative text-[#B78256] font-hachi text-xl sm:text-3xl">{`SÁBADO`}</span>
                  <div className="relative h-6 w-px bg-[#B78256]"></div>
                  <span className="relative text-[#B78256] font-hachi text-xl sm:text-3xl">{`05 Oct 15:00`}</span>
                </div>


              </div>
            </div>
          </div>
          <div className="col-span-1 sm:col-span-2">
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:p-10 p-0  gap-4" >
              <div className="w-full sm:w-2/3">
                <div className=" flex flex-col gap-2 border-dotted border-[#B78256] border-2  rounded-lg  bg-opacity-5  backdrop-blur-md before:absolute before:inset-0 before:bg-white/20 before:backdrop-blur-lg before:rounded-lg " >
                  <img src="/2.jpeg" alt="img1" className="w-full sm:w-full h-auto shadow-md rounded-t-lg animate-jump animate-duration-2000 animate-delay-500" />
                  <div className="flex justify-center items-center p-2">
                    <span className="text-[#2a2b2a] font-hachi text-xl sm:text-xl text-center" >Ya sabemos que será un varoncito 🥰</span>
                  </div>
                </div>

              </div>
              <div className="flex justify-center items-center">
                <CountDown />
              </div>
              <div className="flex flex-col gap-4  border-dotted border-[#B78256] border-2 bg-white  rounded-lg  bg-opacity-15 sm:px-0 sm:py-0 py-5  " >
                <span className="text-[#2a2b2a] font-fredoka text-2xl sm:text-xl text-center" >¿Dónde va a ser? 🤔</span>
                <span className="text-[#2a2b2a] font-fredoka text-2xl sm:text-xl text-center" >{`Dirección `}🪧 </span>
                <span className="text-[#2a2b2a] font-fredoka text-xl sm:text-xl text-center" >David Carmona entre Rafael Flores y Municipalidad</span>
                <button onClick={() => handleViewMaps(location?.latitude.toString() || '', location?.longitude.toString() || '')} className="flex justify-center px-10 py-2 rounded-lg bg-[#EF763E] text-white font-hachi text-center text-xl mx-5 " >
                  Ver ubicación ahora!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
