"use client";
import React, { useEffect, useRef } from 'react';

interface PropsController {
    play: boolean; // Estado para saber si el audio debe reproducirse
    setPlay: () => void; // Función para actualizar el estado de reproducción
}

const HiddenAudioPlayer: React.FC<PropsController> = ({ play, setPlay }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const handleUserInteraction = () => {
            // if (audioRef.current) {
            //     audioRef.current.play().catch((error) => {
            //         console.error("Error al intentar reproducir el audio:", error);
            //     });
            // }
            setPlay();

            // Remover el listener después de la primera interacción
            document.removeEventListener('click', handleUserInteraction);
        };

        // Agregar un evento de clic en todo el documento
        document.addEventListener('click', handleUserInteraction);

        return () => {
            // Remover el listener cuando se desmonte el componente
            document.removeEventListener('click', handleUserInteraction);
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (play) {
                audioRef.current.play().catch((error) => {
                    console.error("Error al intentar reproducir el audio:", error);
                });
            } else {
                audioRef.current.pause(); // Pausar el audio si play es false
            }
        }
    }, [play]); // Ejecutar efecto cuando cambie el estado de play

    return (
        <audio ref={audioRef} loop style={{ display: 'none' }}>
            <source src="/song.mp3" type="audio/mp3" />
            Tu navegador no soporta el elemento de audio.
        </audio>
    );
};

export default HiddenAudioPlayer;
