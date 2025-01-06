import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    name: 'GeodNet',
    image: './image-1.jpeg'
  },
  {
    name: 'Sky',
    image: './image-2.png'
  },
  {
    name: 'Nubila',
    image: './image-3.webp'
  },
  {
    name: 'Helium',
    image: './image-4.webp'
  },
  {
    name: 'Rovr',
    image: './image-5.webp'
  }
]

export default function MiningStore() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => {
    setActiveIndex((current) => 
      current === products.length - 3 ? 0 : current + 1
    )
  }

  const prev = () => {
    setActiveIndex((current) => 
      current === 0 ? products.length - 3 : current - 1
    )
  }

  return (
    <div className="bg-[#1a0b2e] min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Mine more with
              <span className="block text-purple-500">Block Store</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor amet, consectetuer adipiscing elit.
              Natoque fermentum et ridiculus interdum quis integer.
              netus auguie.
            </p>
            <div className="space-x-4">
              <button className="bg-purple-700 hover:bg-purple-800 px-6 py-2 rounded-lg transition-colors">
                Estimate Mining Rewards
              </button>
              <button className="border border-purple-700 hover:bg-purple-700/20 px-6 py-2 rounded-lg transition-colors">
                Buy a Miner
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 relative">
              <div className="absolute right-0 top-0 w-4/5 h-4/5">
                <div className="w-full h-full rounded-full border border-purple-500/20 relative">
                  <div className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-500/20 to-transparent rounded-full" />
                </div>
                <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full" />
                <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full" />
                <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex items-center space-x-4 mb-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-purple-700/20 hover:bg-purple-700/40 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-purple-700/20 hover:bg-purple-700/40 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 33.33}%)` }}
            >
              {products.map((product, idx) => (
                <div 
                  key={product.name}
                  className="min-w-[33.33%] p-4"
                >
                  <div className="bg-purple-900/40 p-6 rounded-xl hover:bg-purple-900/60 transition-colors cursor-pointer">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-20 h-20 mb-4 mx-auto"
                    />
                    <h3 className="text-center font-medium">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}