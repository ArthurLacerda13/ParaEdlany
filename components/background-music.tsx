"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BackgroundMusicProps {
  autoStart?: boolean
}

export default function BackgroundMusic({ autoStart = false }: BackgroundMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.4)
  const [previousVolume, setPreviousVolume] = useState(volume)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Configurar o áudio
    audio.volume = volume
    audio.loop = true

    // Se autoStart for true, tocar imediatamente
    if (autoStart) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.error("Erro ao iniciar música:", error)
        })
    }
  }, [autoStart])

  // Atualizar volume do áudio
  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      // Reinicia o áudio se estiver no fim
      if (audio.currentTime === audio.duration) {
        audio.currentTime = 0
      }
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (error) {
        console.error("Erro ao tocar música:", error)
      }
    }
  }

  const toggleMute = () => {
    if (isMuted) {
      setVolume(previousVolume > 0 ? previousVolume : 0.4)
      setIsMuted(false)
    } else {
      setPreviousVolume(volume)
      setVolume(0)
      setIsMuted(true)
    }
  }

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number.parseFloat(event.target.value)
    setVolume(newVolume)
    if (newVolume > 0) {
      setIsMuted(false)
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 items-center">
      {/* Elemento de áudio */}
      <audio ref={audioRef} preload="auto">
        <source src="/music/romantic-song.mp3" type="audio/mpeg" />
        <source src="/music/romantic-song.ogg" type="audio/ogg" />
        Seu navegador não suporta áudio HTML5.
      </audio>

      {/* Controle de Volume */}
      <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-3 py-2">
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-16 h-1 bg-white/30 rounded-full appearance-none cursor-pointer"
          title={`Volume: ${Math.round(volume * 100)}%`}
        />
        <span className="text-white text-xs font-medium min-w-[2rem] text-center">{Math.round(volume * 100)}%</span>
      </div>

      {/* Botão Play/Pause */}
      <Button
        onClick={togglePlay}
        size="sm"
        className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full"
        title={isPlaying ? "Pausar música" : "Tocar música"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </Button>

      {/* Botão Mute */}
      <Button
        onClick={toggleMute}
        size="sm"
        className="bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 rounded-full"
        title={isMuted ? "Ativar som" : "Silenciar"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </Button>

      {/* Indicador visual quando está tocando */}
      {isPlaying && (
        <div className="flex items-center gap-1 px-3 py-2 bg-green-500/80 backdrop-blur-md border border-green-400/50 rounded-full">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-white/70 rounded animate-pulse" style={{ animationDelay: "0ms" }}></div>
            <div className="w-1 h-4 bg-white/70 rounded animate-pulse" style={{ animationDelay: "150ms" }}></div>
            <div className="w-1 h-3 bg-white/70 rounded animate-pulse" style={{ animationDelay: "300ms" }}></div>
          </div>
          <span className="text-white text-xs ml-2">🎵</span>
        </div>
      )}

      {/* CSS para o slider */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ffffff;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  )
}
