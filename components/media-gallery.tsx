"use client"

import { useState } from "react"
import { Camera, Film, Star, Heart, Sparkles, Volume2, VolumeX } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MediaItem {
  id: number
  type: "photo" | "video"
  icon: any
  text: string
  color: string
  src?: string // URL do arquivo real
  placeholder?: string // Placeholder quando não há arquivo
}

export default function MediaGallery() {
  const [mutedVideos, setMutedVideos] = useState<{ [key: number]: boolean }>({})

  // 🎥 CONFIGURE SEUS ARQUIVOS AQUI:
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "photo", // ou "video"
      icon: Camera,
      text: "Nossa primeira foto juntos",
      color: "from-pink-400 to-rose-500",
      src: "/media/primeira-foto.jpg", // ⬅️ Coloque o caminho da sua foto/vídeo
      placeholder: "Primeira foto especial 📸",
    },
    {
      id: 2,
      type: "video", // ou "photo"
      icon: Film,
      text: "Nosso primeiro vídeo juntos",
      color: "from-amber-400 to-orange-500",
      src: "/media/primeiro-video.mp4", // ⬅️ Coloque o caminho do seu vídeo
      placeholder: "Primeiro vídeo especial 🎬",
    },
    {
      id: 3,
      type: "photo",
      icon: Heart,
      text: "Um momento especial nosso",
      color: "from-purple-400 to-pink-500",
      src: "/media/momento-especial.jpg",
      placeholder: "Momento romântico 💕",
    },
    {
      id: 4,
      type: "video",
      icon: Sparkles,
      text: "Risadas e diversão",
      color: "from-blue-400 to-cyan-500",
      src: "/media/diversao.mp4",
      placeholder: "Momentos divertidos 🎉",
    },
    {
      id: 5,
      type: "photo",
      icon: Star,
      text: "Um momento favorito",
      color: "from-emerald-400 to-teal-500",
      src: "/media/momento-favorito.jpg",
      placeholder: "Momento inesquecível ⭐",
    },
  ]

  const toggleVideoMute = (videoId: number) => {
    setMutedVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }))
  }

  const renderMediaItem = (item: MediaItem) => {
    if (item.type === "video" && item.src) {
      return (
        <div className="relative w-full h-full">
          <video
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted={mutedVideos[item.id] !== false} // Por padrão mutado
            playsInline
            onError={() => console.log(`Erro ao carregar vídeo: ${item.src}`)}
          >
            <source src={item.src} type="video/mp4" />
            <source src={item.src.replace(".mp4", ".webm")} type="video/webm" />
            Seu navegador não suporta vídeos HTML5.
          </video>

          {/* Controle de Som */}
          <Button
            onClick={() => toggleVideoMute(item.id)}
            size="sm"
            className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white border-0 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            {mutedVideos[item.id] !== false ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>

          {/* Indicador de Vídeo */}
          <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
            <Film className="w-3 h-3" />
            <span>Vídeo</span>
          </div>
        </div>
      )
    } else if (item.type === "photo" && item.src) {
      return (
        <img
          src={item.src || "/placeholder.svg"}
          alt={item.text}
          className="w-full h-full object-cover rounded-2xl"
          onError={(e) => {
            console.log(`Erro ao carregar imagem: ${item.src}`)
            // Fallback para placeholder se a imagem não carregar
            e.currentTarget.style.display = "none"
          }}
        />
      )
    }

    // Fallback: Placeholder quando não há arquivo
    return (
      <div
        className={`bg-gradient-to-br ${item.color} p-8 rounded-2xl shadow-lg h-full flex flex-col items-center justify-center text-white text-center`}
      >
        <item.icon className="w-12 h-12 mb-4 animate-bounce" />
        <p className="font-medium text-sm leading-relaxed mb-2">{item.text}</p>
        <p className="text-xs opacity-80">{item.placeholder}</p>
        <p className="text-xs mt-2 opacity-60">
          {item.type === "video" ? "Adicione um vídeo aqui" : "Adicione uma foto aqui"}
        </p>
      </div>
    )
  }

  return (
    <Card className="mb-16 p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl animate-fade-in-up">
      <div className="text-center mb-8">
        <h3
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          style={{ fontFamily: "Dancing Script, cursive" }}
        >
          💕 Nossa Galeria de Momentos 💕
        </h3>
        <p className="text-gray-600 mt-2" style={{ fontFamily: "Caveat, cursive" }}>
          Fotos e vídeos especiais do nosso amor
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <div className="h-64 rounded-2xl overflow-hidden shadow-lg relative">
              {renderMediaItem(item)}

              {/* Overlay com texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium text-sm" style={{ fontFamily: "Caveat, cursive" }}>
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

    </Card>
  )
}
