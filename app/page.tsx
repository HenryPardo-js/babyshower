"use client"
import { useEffect } from "react";
import confetti from "canvas-confetti";
import Rocket from "@/components/Rocket/Rocket";

export default function Home() {
  // Función para lanzar el confeti
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
    const duration = 15 * 1000; // Duración en milisegundos
    const end = Date.now() + duration;

    const colors = ['#FF0D72', '#0DC2FF', '#0DFF72', '#F8FF0D', '#FF0D57'];

    (function frame() {
      // Generar confeti
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        startVelocity: 20,
        // colors: colors,
        origin: { x: 0, y: 0.2 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        startVelocity: 20,
        // colors: colors,
        origin: { x: 1, y: 0.2 }
      });

      // Continúa lanzando confeti hasta que se alcance la duración
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };



  useEffect(() => {
    launchConfetti();
  }, []);

  return (
    <div className=" flex items-center justify-center">
      <div className="w-full h-full p-5 animate-fade-up animate-duration-2000 animate-delay-500">
        <div className="grid sm:grid-cols-2 grid-cols-1">
          <img
            src="/osoMain.png"
            alt="oso animado"
            className="w-full h-full object-cover animate-float hidden sm:block "
          />
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-0 items-center">
                <span className="text-[#2a2b2a] font-fredoka text-xl">
                  Hola Henry! te invitamos a celebrar con nosotros el
                </span>
                <h1 className="text-[#628cca] font-distant text-9xl animate-fade-up animate-duration-1000 animate-delay-500">
                  Baby Shower
                </h1>
                <span className="text-[#2a2b2a] font-fredoka text-xl">
                  de nuestro amado hijo.
                </span>
              </div>
              <div className="flex flex-col items-end gap-2 mt-4 px-10">
                <span className="text-xl font-hachi text-right">{`"Antes de darte la vida, ya te había yo escogido; antes de que nacieras, ya te había yo apartado; te había destinado a ser profeta de las naciones"`}</span>
                <span className="text-xl font-fredoka">{`Jeremías 1:5`}</span>
              </div>
              <div className="flex flex-col gap-1 mt-5 justify-center items-center w-full animate-jump-in animate-duration-2000 animate-delay-500">
                <div className="flex items-center gap-10 justify-center">
                  <span className="text-[#B78256] font-hachi text-3xl">{`SÁBADO`}</span>
                  <div className="h-6 w-px bg-[#B78256]"></div>
                  <span className="text-[#B78256] font-hachi text-3xl">{`05 Oct 15:00`}</span>
                </div>
              </div>
            </div>
            {/* <Rocket /> */}

          </div>
          <img
            src="/osoMain.png"
            alt="oso animado"
            className="w-full h-full object-cover animate-float sm:hidden block "
          />
        </div>
      </div>
    </div>
  );
}
