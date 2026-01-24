"use client"

import { useState } from "react"
import Image from "next/image"
import { benefits } from "@/data/benefits"
import { IBenefit } from "@/types"
import ProductModal from "./BenefitSection"

const Benefits: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<IBenefit | null>(null)

  return (
    <section id="products" className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Products
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {benefits.map((product, index) => (
          <div
            key={index}
            onClick={() => setActiveProduct(product)}
            className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform"
          >
            {/* <Image
              src={product.imageSrc}
              alt={product.title}
              width={400}
              height={400}
              className="object-cover w-full h-64"
            /> */}
            <Image
              src={product.imageSrc}
              alt={product.title}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover w-full h-64"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-sm text-foreground-accent mt-1">
                {product.description}
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

export default Benefits
