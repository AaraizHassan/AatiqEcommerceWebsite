"use client"

import { useState } from "react"
import Image from "next/image"
import { benefits } from "@/data/benefits"
import { IBenefit } from "@/types"
import ProductModal from "@/components/Benefits/BenefitSection"

const CoinsPage = () => {
  const [activeProduct, setActiveProduct] = useState<IBenefit | null>(null)

  const coins = benefits.filter(
    product => product.category === "Coins"
  )

  return (
    <section className="mt-24 px-4">
      <h1 className="text-3xl font-bold text-center mb-12">
        Coins
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {coins.map((product, index) => (
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
                {product.age}
              </p>
            </div>
          </div>
        ))}
      </div>

      {activeProduct && (
        <ProductModal
          product={activeProduct}
          onClose={() => setActiveProduct(null)}
        />
      )}
    </section>
  )
}

export default CoinsPage
