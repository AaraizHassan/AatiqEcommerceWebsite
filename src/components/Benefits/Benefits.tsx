// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { benefits } from "@/data/benefits"
// import { IBenefit } from "@/types"
// import ProductModal from "./BenefitSection"

// const Benefits: React.FC = () => {
//   const [activeProduct, setActiveProduct] = useState<IBenefit | null>(null)

//   return (
//     <section id="products" className="mt-24">
//       <h2 className="text-3xl font-bold text-center mb-12">
//         Our Products
//       </h2>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {benefits.map((product, index) => (
//           <div
//             key={index}
//             onClick={() => setActiveProduct(product)}
//             className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
//           >
//             <Image
//               src={product.imageSrc}
//               alt={product.title}
//               width={400}
//               height={400}
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className="object-contain w-full h-64 bg-gray-100"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold text-lg">{product.title}</h3>
//               <p className="text-sm text-foreground-accent mt-1">
//                 {product.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {activeProduct && (
//         <ProductModal
//           product={activeProduct}
//           onClose={() => setActiveProduct(null)}
//         />
//       )}
//     </section>
//   )
// }

// export default Benefits

"use client"

import { useState } from "react"
import Image from "next/image"
import { benefits } from "@/data/benefits"
import { IBenefit } from "@/types"
import ProductModal from "./BenefitSection"

const Benefits: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<IBenefit | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedAge, setSelectedAge] = useState("All")

  // Filter logic
  const filteredBenefits = benefits.filter(product => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory

    const ageMatch =
      selectedAge === "All" || product.age === selectedAge

    return categoryMatch && ageMatch
  })

  return (
    <section id="products" className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Products
      </h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="border rounded px-4 py-2"
        >
          <option value="All">All Categories</option>
          <option value="Coins">Coins</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Antiques">Antiques</option>
        </select>

        {/* Age Filter */}
        <select
          value={selectedAge}
          onChange={e => setSelectedAge(e.target.value)}
          className="border rounded px-4 py-2"
        >
          <option value="All">All Ages</option>
          <option value="1st-5th Century">1st-5th Century</option>
          <option value="7th Century">7th Century</option>
          <option value="7th-8th Century">7th-8th Century</option>
          <option value="8th Century">8th Century</option>
          <option value="9th–10th Century">9th–10th Century</option>
          <option value="10th Century">10th Century</option>
          <option value="10th–11th Century">10th–11th Century</option>
          <option value="11th Century">11th Century</option>
          <option value="12th Century">12th Century</option>
          <option value="15th Century">15th Century</option>
          <option value="15th-16th Century">15th-16th Century</option>
          <option value="16th Century">16th Century</option>
          <option value="17th-18th Century">17th-18th Century</option>
          <option value="18th Century">18th Century</option>
          <option value="18th-19th Century">18th-19th Century</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredBenefits.map((product, index) => (
          <div
            key={index}
            onClick={() => setActiveProduct(product)}
            className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
          >
            <Image
              src={product.imageSrc}
              alt={product.title}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain w-full h-64 bg-gray-100"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">
                {product.title}
              </h3>

              <p className="text-sm text-foreground-accent mt-1">
                {product.description}
              </p>

              <p className="text-xs text-gray-500 mt-2">
                {product.category} • {product.age}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </section>
  )
}

export default Benefits
