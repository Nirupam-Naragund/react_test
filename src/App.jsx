// import { useState } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const products = [
//   {
//     name: 'GeodNet',
//     image: './image-1.jpeg'
//   },
//   {
//     name: 'Sky',
//     image: './image-2.png'
//   },
//   {
//     name: 'Nubila',
//     image: './image-3.webp'
//   },
//   {
//     name: 'Helium',
//     image: './image-4.webp'
//   },
//   {
//     name: 'Rovr',
//     image: './image-5.webp'
//   }
// ]

// export default function MiningStore() {
//   const [activeIndex, setActiveIndex] = useState(0)

//   const next = () => {
//     setActiveIndex((current) => 
//       current === products.length - 3 ? 0 : current + 1
//     )
//   }

//   const prev = () => {
//     setActiveIndex((current) => 
//       current === 0 ? products.length - 3 : current - 1
//     )
//   }

//   return (
//     <div className="bg-[#1a0b2e] min-h-screen text-white p-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
//           <div>
//             <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//               Mine more with
//               <span className="block text-purple-500">Block Store</span>
//             </h1>
//             <p className="text-gray-400 mb-8">
//               Lorem ipsum dolor amet, consectetuer adipiscing elit.
//               Natoque fermentum et ridiculus interdum quis integer.
//               netus auguie.
//             </p>
//             <div className="space-x-4">
//               <button className="bg-purple-700 hover:bg-purple-800 px-6 py-2 rounded-lg transition-colors">
//                 Estimate Mining Rewards
//               </button>
//               <button className="border border-purple-700 hover:bg-purple-700/20 px-6 py-2 rounded-lg transition-colors">
//                 Buy a Miner
//               </button>
//             </div>
//           </div>
//           <div className="relative">
//             <div className="w-full h-96 relative">
//               <div className="absolute right-0 top-0 w-4/5 h-4/5">
//                 <div className="w-full h-full rounded-full border border-purple-500/20 relative">
//                   <div className="absolute inset-0 blur-xl bg-gradient-to-r from-purple-500/20 to-transparent rounded-full" />
//                 </div>
//                 <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full" />
//                 <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full" />
//                 <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-purple-500 rounded-full" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="relative">
//           <div className="flex items-center space-x-4 mb-4">
//             <button 
//               onClick={prev}
//               className="p-2 rounded-full bg-purple-700/20 hover:bg-purple-700/40 transition-colors"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button 
//               onClick={next}
//               className="p-2 rounded-full bg-purple-700/20 hover:bg-purple-700/40 transition-colors"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
          
//           <div className="overflow-hidden">
//             <div 
//               className="flex transition-transform duration-300 ease-in-out"
//               style={{ transform: `translateX(-${activeIndex * 33.33}%)` }}
//             >
//               {products.map((product, idx) => (
//                 <div 
//                   key={product.name}
//                   className="min-w-[33.33%] p-4"
//                 >
//                   <div className="bg-purple-900/40 p-6 rounded-xl hover:bg-purple-900/60 transition-colors cursor-pointer">
//                     <img 
//                       src={product.image} 
//                       alt={product.name}
//                       className="w-20 h-20 mb-4 mx-auto"
//                     />
//                     <h3 className="text-center font-medium">{product.name}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { useState, useEffect } from 'react'
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    // Initial check
    checkMobile()
    
    // Add event listener
    window.addEventListener('resize', checkMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const getVisibleItems = () => {
    if (isMobile) return 1
    return window.innerWidth < 1024 ? 2 : 3
  }

  const next = () => {
    if (isMobile) {
      setActiveIndex((current) => 
        current === products.length - 1 ? 0 : current + 1
      )
    } else {
      const visibleItems = getVisibleItems()
      setActiveIndex((current) => 
        current === products.length - visibleItems ? 0 : current + 1
      )
    }
  }

  const prev = () => {
    if (isMobile) {
      setActiveIndex((current) => 
        current === 0 ? products.length - 1 : current - 1
      )
    } else {
      const visibleItems = getVisibleItems()
      setActiveIndex((current) => 
        current === 0 ? products.length - visibleItems : current - 1
      )
    }
  }

  return (
    <div className="bg-[#1a0b2e] min-h-screen text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-8 lg:mb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Mine more with
              <span className="block text-purple-500">Block Store</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
              Lorem ipsum dolor amet, consectetuer adipiscing elit.
              Natoque fermentum et ridiculus interdum quis integer.
              netus auguie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center lg:justify-start">
              <button className="bg-purple-700 hover:bg-purple-800 px-4 sm:px-6 py-2 rounded-lg transition-colors w-full sm:w-auto text-sm sm:text-base">
                Estimate Mining Rewards
              </button>
              <button className="border border-purple-700 hover:bg-purple-700/20 px-4 sm:px-6 py-2 rounded-lg transition-colors w-full sm:w-auto text-sm sm:text-base">
                Buy a Miner
              </button>
            </div>
          </div>
          <div className="relative hidden sm:block">
            <div className="w-full h-64 sm:h-80 lg:h-96 relative">
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
          <div className="flex items-center justify-center sm:justify-start space-x-4 mb-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-purple-700/20 hover:bg-purple-700/40 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-purple-700/20 hover:bg-purple-700/40 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * (100 / getVisibleItems())}%)`,
                width: `${(100 * products.length) / getVisibleItems()}%`
              }}
            >
              {products.map((product, idx) => (
                <div 
                  key={product.name}
                  className="p-2 sm:p-4"
                  style={{ width: `${100 / getVisibleItems()}%` }}
                >
                  <div className="bg-purple-900/40 p-4 sm:p-6 rounded-xl hover:bg-purple-900/60 transition-colors cursor-pointer">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 mx-auto object-contain"
                    />
                    <h3 className="text-center font-medium text-sm sm:text-base">{product.name}</h3>
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