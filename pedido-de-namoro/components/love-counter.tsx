"use client"

import { useState, useEffect } from "react"
import { Heart, Calendar, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"

interface TimeData {
  years: number
  months: number
  days: number
  totalDays: number
}

export default function LoveCounter() {
  const [timeData, setTimeData] = useState<TimeData>({
    years: 0,
    months: 0,
    days: 0,
    totalDays: 0,
  })

  useEffect(() => {
    // 🌟 ALTERE ESTA DATA para quando vocês se conheceram
    // Formato: YYYY-MM-DD
    const startDate = new Date("2025-06-10") // ⬅️ MUDE AQUI!

    const calculateTime = () => {
      const now = new Date()
      const diffTime = Math.abs(now.getTime() - startDate.getTime())
      const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

      // Calcular anos, meses e dias de forma simples
      const years = Math.floor(totalDays / 365)
      const remainingDaysAfterYears = totalDays % 365
      const months = Math.floor(remainingDaysAfterYears / 30)
      const days = remainingDaysAfterYears % 30

      setTimeData({ years, months, days, totalDays })
    }

    // Calcular imediatamente
    calculateTime()

    // Atualizar a cada hora
    const interval = setInterval(calculateTime, 1000 * 60 * 60)

    return () => clearInterval(interval)
  }, []) // Array de dependências vazio para evitar loops

  return (
    <Card className="mb-16 p-8 bg-gradient-to-br from-rose-50/90 to-pink-50/90 backdrop-blur-sm border-2 border-rose-200 shadow-2xl animate-fade-in-up">
      <div className="text-center space-y-6">
        {/* Título */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
          <h3
            className="text-3xl md:text-4xl font-bold text-rose-600"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            Nossa História de Amor
          </h3>
          <Heart className="w-8 h-8 text-rose-500 animate-pulse" />
        </div>

        {/* Contador Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Anos */}
          <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
            <Calendar className="w-8 h-8 mx-auto mb-3 animate-bounce" />
            <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "Pacifico, cursive" }}>
              {timeData.years}
            </div>
            <div className="text-lg font-medium" style={{ fontFamily: "Caveat, cursive" }}>
              {timeData.years === 1 ? "Ano" : "Anos"}
            </div>
          </div>

          {/* Meses */}
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
            <Clock className="w-8 h-8 mx-auto mb-3 animate-bounce" style={{ animationDelay: "0.2s" }} />
            <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "Pacifico, cursive" }}>
              {timeData.months}
            </div>
            <div className="text-lg font-medium" style={{ fontFamily: "Caveat, cursive" }}>
              {timeData.months === 1 ? "Mês" : "Meses"}
            </div>
          </div>

          {/* Dias */}
          <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300">
            <Heart className="w-8 h-8 mx-auto mb-3 animate-bounce" style={{ animationDelay: "0.4s" }} />
            <div className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: "Pacifico, cursive" }}>
              {timeData.days}
            </div>
            <div className="text-lg font-medium" style={{ fontFamily: "Caveat, cursive" }}>
              {timeData.days === 1 ? "Dia" : "Dias"}
            </div>
          </div>
        </div>

        {/* Total de Dias */}
        <div className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 rounded-2xl p-6 text-white shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-2xl">✨</span>
            <h4 className="text-2xl font-bold" style={{ fontFamily: "Great Vibes, cursive" }}>
              Total de Dias Juntos
            </h4>
            <span className="text-2xl">✨</span>
          </div>
          <div className="text-5xl md:text-6xl font-bold mb-2" style={{ fontFamily: "Dancing Script, cursive" }}>
            {timeData.totalDays.toLocaleString()}
          </div>
          <p className="text-lg opacity-90" style={{ fontFamily: "Sacramento, cursive" }}>
            dias de felicidade e amor 💕
          </p>
        </div>

        {/* Mensagem Romântica */}
        <div className="mt-8 p-6 bg-white/50 rounded-xl border border-rose-200">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: "Satisfy, cursive" }}>
            "Cada dia ao seu lado é um presente especial que guardo no coração. Obrigado por tornar minha vida mais
            colorida e cheia de amor! 💖"
          </p>
        </div>
      </div>
    </Card>
  )
}
