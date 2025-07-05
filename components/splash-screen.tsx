"use client"

import { useState } from "react"
import { Heart, Music, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SplashScreenProps {
  onStart: () => void
}

export default function SplashScreen({ onStart }: SplashScreenProps) {
  const [isStarting, setIsStarting] = useState(false)

  const handleStart = () => {
    setIsStarting(true)
    setTimeout(() => {
      onStart()
    }, 1000)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 transition-all duration-1000 ${isStarting ? "opacity-0 scale-110" : "opacity-100 scale-100"}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 animate-pulse" />

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 30 + 20}px`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center space-y-8 px-8 relative z-10">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Sparkles className="w-12 h-12 text-yellow-300 animate-twinkle" />
            <Heart className="w-16 h-16 text-pink-300 animate-pulse" />
            <Sparkles className="w-12 h-12 text-yellow-300 animate-twinkle" />
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-down"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            💕 Para Edlany 💕
          </h1>

          <p
            className="text-xl md:text-2xl text-white/90 font-medium animate-fade-in-up"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Uma experiência sensacional te aguarda...
          </p>
        </div>

        {/* Music Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-8 h-8 text-white animate-bounce" />
            <span className="text-white text-lg font-medium">Experiência com Música</span>
          </div>
          <p className="text-white/80 text-sm">Clique no botão abaixo para iniciar essa jornada deveras incrível, feita com muito carinho 🎵</p>
        </div>

        {/* Start Button */}
        <Button
          onClick={handleStart}
          disabled={isStarting}
          className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 hover:from-pink-600 hover:via-red-600 hover:to-pink-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-pink-500/50 border-0 animate-bounce-in animation-delay-600"
          style={{ borderRadius: "50px" }}
        >
          {isStarting ? (
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Iniciando...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 animate-pulse" />
              <span style={{ fontFamily: "Caveat, cursive" }}>🎵 Iniciar Experiência 🎵</span>
              <Heart className="w-6 h-6 animate-pulse" />
            </div>
          )}
        </Button>

        {/* Subtitle */}
        <p className="text-white/70 text-sm animate-fade-in-up animation-delay-800">
          ✨ Prepare-se para algo muito especial! ✨
        </p>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(-90deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 1.5s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1.5s ease-out; }
        .animate-bounce-in { animation: bounce-in 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
        
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
      `}</style>
    </div>
  )
}
