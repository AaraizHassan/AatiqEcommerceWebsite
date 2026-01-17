"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { IBenefit } from "@/types"

interface ProductModalProps {
  product: IBenefit
  onClose: () => void
}

const BenefitSection: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-white max-w-3xl w-full rounded-xl p-6 overflow-y-auto max-h-[90vh]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.images?.map((img: string, index: number) => (
            <Image
              key={index}
              src={img}
              alt={product.title}
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          ))}
        </div>

        {/* Product info */}
        <h3 className="text-2xl font-semibold mt-6">
          {product.title}
        </h3>

        <p className="text-foreground-accent mt-2">
          {product.description}
        </p>

        {/* Contact form */}
        <form className="mt-6 grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="border px-4 py-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            className="border px-4 py-2 rounded"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="border px-4 py-2 rounded"
          />

          {/* Hidden product name */}
          <input type="hidden" name="product" value={product.title} />

          <button
            type="submit"
            className="bg-primary text-black py-2 rounded font-semibold"
          >
            Enquire About {product.title}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default BenefitSection
