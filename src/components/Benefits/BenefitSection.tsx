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
      {/* <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-white max-w-3xl w-full rounded-xl p-6 overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.images?.map((img: string, index: number) => (
            <Image
              key={index}
              src={img}
              alt={product.title}
              width={400}
              height={300}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="rounded-lg object-cover"
            />
          ))}
        </div>

        <h3 className="text-2xl font-semibold mt-6">
          {product.title}
        </h3>

        <p className="text-foreground-accent mt-2">
          {product.description}
        </p>

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

          <input type="hidden" name="product" value={product.title} />

          <button
            type="submit"
            className="bg-primary text-black py-2 rounded font-semibold"
          >
            Enquire About {product.title}
          </button>
        </form>
      </motion.div> */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-white max-w-6xl w-full rounded-xl p-6 md:p-10 overflow-y-auto max-h-[90vh]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT: Images */}
          <div className="space-y-4">
            {product.images?.map((img: string, index: number) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <Image
                  src={img}
                  alt={product.title}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-[300px] md:h-[350px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* RIGHT: Content */}
          <div className="flex flex-col justify-start">

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
              {product.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            {/* Contact form */}
            <form className="mt-8 grid grid-cols-1 gap-4">
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
                className="bg-primary text-black py-2 rounded font-semibold hover:opacity-90 transition"
              >
                Enquire About {product.title}
              </button>
            </form>

          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default BenefitSection
