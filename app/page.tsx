"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Sparkles, Coffee, Film, Smartphone, Github } from "lucide-react"
import BackgroundMusic from "@/components/background-music"
import SplashScreen from "@/components/splash-screen"
import LoveCounter from "@/components/love-counter"
import MediaGallery from "@/components/media-gallery"

export default function PedidoNamoro() {
  const [showSplash, setShowSplash] = useState(true)
  const [musicStarted, setMusicStarted] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showContract, setShowContract] = useState(false)
  const [showFinalMessage, setShowFinalMessage] = useState(false)
  const [warningMessage, setWarningMessage] = useState("")
  const [showWarning, setShowWarning] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })

  const [celebrationAudio] = useState(
    typeof window !== "undefined"
      ? new Audio("/music/aplauso.mp3")
      : null
  )
  const [noAudio] = useState(
    typeof window !== "undefined"
      ? new Audio("/music/nha-pou.mp3")
      : null
  )
  // Novo áudio para o "Sim"
  const [extraSimAudio] = useState(
    typeof window !== "undefined"
      ? new Audio("/music/celebration.mp3")
      : null
  )

  const warningMessages = [
    "É... acho q c errou o botão, não?`",
    "Oxi, dnv? ué",
    "Vc ta se confundindo?",
    "Tem certeza disso?",
    "Última chance de clicar no lugar certo! 😘",
    "Sério mesmo? O sim é o outro botão 💕",
    "Tá bom né, se vc ta insistindo em apertar aqui, oq eu posso fazer né 🌟",
  ]

  const contractClauses = [
    {
      icon: Coffee,
      title: "Cláusula 1:",
      text: "A contratada (Edlany) concorda em aceitar cafés da manhã na cama preparados pelo contratante, mesmo que ele queime a torrada ocasionalmente. 🍞☕",
    },
    {
      icon: Film,
      title: "Cláusula 2:",
      text: "O contratante se compromete a sempre deixar a contratada escolher o filme, mesmo que seja uma comédia romântica pela 50ª vez. 🎬💕",
    },
    {
      icon: Heart,
      title: "Cláusula 3:",
      text: "Ambas as partes concordam em compartilhar batata frita, mas a última batata sempre será da Edlany (lei universal do relacionamento). 🍟",
    },
    {
      icon: Smartphone,
      title: "Cláusula 4:",
      text: 'O contratante promete debuggar qualquer problema tecnológico da contratada, incluindo "Por que meu celular está lento?" às 2h da manhã. 📱💻',
    },
    {
      icon: Github,
      title: "Cláusula 5:",
      text: "A contratada tem direito vitalício a abraços reconfortantes, beijos de bom dia e declarações de amor via commit messages no GitHub. 🤗💋",
    },
    {
      icon: Sparkles,
      title: "Cláusula 6:",
      text: "Este contrato é válido até que a velocidade da luz diminua, o WiFi funcione perfeitamente para sempre, ou até que os bugs sejam extintos. 🌟",
    },
  ]

  const handleStartExperience = () => {
    setShowSplash(false)
    setMusicStarted(true)
  }

  useEffect(() => {
    // Criar partículas flutuantes
    if (!showSplash) {
      const createParticles = () => {
        const particles = document.querySelectorAll(".particle")
        particles.forEach((particle) => particle.remove())

        for (let i = 0; i < 20; i++) {
          const particle = document.createElement("div")
          particle.className = "particle fixed pointer-events-none z-0"
          particle.style.left = Math.random() * 100 + "%"
          particle.style.animationDelay = Math.random() * 8 + "s"
          particle.style.animationDuration = Math.random() * 4 + 6 + "s"
          document.body.appendChild(particle)

          setTimeout(() => {
            if (document.body.contains(particle)) {
              document.body.removeChild(particle)
            }
          }, 10000)
        }
      }

      createParticles()
      const interval = setInterval(createParticles, 8000)
      return () => clearInterval(interval)
    }
  }, [showSplash])

  const handleNoClick = () => {
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)

    // Toca o áudio do "não"
    if (noAudio) {
      noAudio.currentTime = 0
      noAudio.play()
    }

    if (newClickCount <= warningMessages.length) {
      setWarningMessage(warningMessages[newClickCount - 1])
      setShowWarning(true)

      setTimeout(() => {
        setShowWarning(false)
      }, 3000)

      // Mover botão para posição aleatória
      const newX = Math.random() * 200 - 100
      const newY = Math.random() * 100 - 50
      setNoButtonPosition({ x: newX, y: newY })
    }
  }

  const handleYesClick = () => {
    setShowCelebration(true)
    createHeartExplosion()
    if (celebrationAudio) {
      celebrationAudio.currentTime = 0
      celebrationAudio.play()
    }
    // Toca o novo áudio 2 segundos depois
    if (extraSimAudio) {
      setTimeout(() => {
        extraSimAudio.currentTime = 0
        extraSimAudio.play()
      }, 3650)
    }
    setTimeout(() => {
      setShowContract(true)
    }, 3000)
  }

  const handleAcceptContract = () => {
    setShowContract(false)
    setTimeout(() => {
      setShowFinalMessage(true)
      createHeartExplosion()
    }, 500)
  }

  const createHeartExplosion = () => {
    const hearts = ["💖", "💕", "💗", "💓", "💝", "💘", "💞", "💟", "❤️", "🧡", "💛", "💚", "💙", "💜"]

    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const heart = document.createElement("div")
        heart.className = "fixed pointer-events-none z-50 text-4xl animate-bounce"
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)]
        heart.style.left = Math.random() * 100 + "%"
        heart.style.top = "100%"
        heart.style.animation = `floatUp 3s ease-out forwards`
        document.body.appendChild(heart)

        setTimeout(() => {
          if (document.body.contains(heart)) {
            document.body.removeChild(heart)
          }
        }, 3000)
      }, i * 100)
    }
  }

  // Mostrar splash screen primeiro
  if (showSplash) {
    return <SplashScreen onStart={handleStartExperience} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 relative overflow-hidden">
      {/* Background Music - inicia automaticamente após splash */}
      <BackgroundMusic autoStart={musicStarted} />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 animate-pulse" />

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 20}px`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="relative inline-block">
            <h1
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4 animate-pulse"
              style={{ fontFamily: "Great Vibes, cursive" }}
            >
              💕 Para Edlany 💕
            </h1>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl animate-twinkle">✨</div>
          </div>
          <p
            className="text-xl md:text-2xl text-gray-700 font-medium"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Um pedido especial de alguém que te ama muito...
          </p>
        </div>

        {/* Media Gallery - Fotos e Vídeos */}
        <MediaGallery />

        {/* Love Counter */}
        <LoveCounter />

        {/* Message Section */}
        <Card className="mb-16 p-12 bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-sm border-0 shadow-2xl animate-fade-in-up">
          <div className="text-center space-y-6">
            <h2
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-8"
              style={{ fontFamily: "Pacifico, cursive" }}
            >
              Edlany...
            </h2>
            <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p className="animate-fade-in-text">
                Desde que você chegou na minha vida, a tornou mais colorida! 🌈
              </p>
              <p className="animate-fade-in-text animation-delay-200">
                Cada momento que eu passo ao seu lado é um presente que eu guardo no coração. 💝
              </p>
              <p className="animate-fade-in-text animation-delay-400">
                Você torna meus dias mais felizes e minhas noites mais doces, com um carinho e um cuidado que transbordam em cada gesto. ✨
              </p>
              <p className="animate-fade-in-text animation-delay-600">
                E agora, preciso fazer uma pergunta muito importante ...
              </p>
            </div>
          </div>
        </Card>

        {/* Question Section */}
        {!showCelebration && (
          <Card className="mb-16 p-12 bg-gradient-to-br from-purple-100/90 to-pink-100/90 backdrop-blur-sm border-2 border-purple-200 shadow-2xl animate-fade-in-up relative">
            <div className="text-center">
              <h2
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-12 animate-pulse"
                style={{ fontFamily: "Kaushan Script, cursive" }}
              >
                💖 Você quer namorar comigo? 💖
              </h2>

              <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                {/* Warning Message */}
                {showWarning && (
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-full shadow-lg animate-bounce z-10">
                    {warningMessage}
                  </div>
                )}

                <Button
                  onClick={handleYesClick}
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-pink-500/50 border-0"
                  style={{ borderRadius: "50px" }}
                >
                  <Heart className="w-6 h-6 mr-2" />
                  Sim! 💕
                </Button>

                <Button
                  onClick={handleNoClick}
                  className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 border-0"
                  style={{
                    borderRadius: "50px",
                    transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px) ${clickCount >= 3 ? "rotate(" + (Math.random() * 20 - 10) + "deg)" : ""}`,
                    scale: clickCount >= 5 ? 0.8 + Math.random() * 0.4 : 1,
                  }}
                >
                  {clickCount >= 7 ? "Não! 😤" : "Não"}
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Celebration */}
        {showCelebration && !showContract && (
          <Card className="mb-16 p-12 bg-gradient-to-br from-yellow-100/90 to-pink-100/90 backdrop-blur-sm border-0 shadow-2xl animate-bounce-in text-center">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-8">
              🎉 EBAAAA! 🎉
            </h2>
            <div className="text-6xl mb-8 animate-bounce">💕 💖 💕 💖 💕</div>
            <p className="text-2xl text-gray-700 font-medium">Agora bora oficializar isso...</p>
          </Card>
        )}

        {/* Contract */}
        {showContract && !showFinalMessage && (
          <Card className="mb-16 p-12 bg-white/95 backdrop-blur-sm border-0 shadow-2xl animate-slide-in-bottom">
            <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-12">
              📋 CONTRATO DE NAMORO OFICIAL 📋
            </h3>

            <div className="space-y-6 mb-12">
              {contractClauses.map((clause, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-l-4 border-purple-400 hover:shadow-lg transition-all duration-300 hover:translate-x-2"
                >
                  <clause.icon className="w-8 h-8 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-purple-600">{clause.title}</span>
                    <span className="text-gray-700 ml-2">{clause.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={handleAcceptContract}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 text-white px-16 py-6 text-xl font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 border-0"
                style={{ borderRadius: "50px" }}
              >
                <Heart className="w-6 h-6 mr-2" />
                Eu aceito os termos! 💖
              </Button>
            </div>
          </Card>
        )}

        {/* Final Message */}
        {showFinalMessage && (
          <Card className="p-12 bg-gradient-to-br from-yellow-100/95 to-pink-100/95 backdrop-blur-sm border-0 shadow-2xl animate-final-celebration text-center">
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-8">
              🎊 CONTRATO ASSINADO COM SUCESSO! 🎊
            </h2>
            <div className="space-y-6 text-xl md:text-2xl text-gray-700">
              <p>Agora somos oficialmente namorados! 💑</p>
              <p>Obrigado por tornar minha vida mais feliz, Edlany! 💕</p>
              <p className="italic font-medium">~ Com todo meu amor, seu novo namorado desenvolvedor 👨‍💻💖</p>
            </div>
          </Card>
        )}
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-text {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(-90deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes slide-in-bottom {
          from { opacity: 0; transform: translateY(100px) scale(0.8); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes final-celebration {
          0% { transform: scale(0) rotate(-360deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(-180deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-fade-in-down { animation: fade-in-down 1.5s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1.5s ease-out 0.5s both; }
        .animate-fade-in-text { animation: fade-in-text 0.8s ease-out both; }
        .animate-bounce-in { animation: bounce-in 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
        .animate-slide-in-bottom { animation: slide-in-bottom 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .animate-final-celebration { animation: final-celebration 2s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        
        .particle {
          width: 4px;
          height: 4px;
          background: rgba(255, 182, 193, 0.8);
          border-radius: 50%;
          animation: floatUp 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
