"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const products = [
  { id: 1, name: "Sour Apple 27mg", description: "27 mg 7-hydroxymitragynine  *lab tested", price: "$40 for 10 packs, $180 50 packs, $300 100 packs. Samples available", images: ["/images/sour_apple.jpg", "/images/sour_apple1.jpeg", "/images/sourapple_lab.jpg"] },
  { id: 2, name: "Green Apple 23mg", description: "23 mg 7-hydroxymitragynine *lab tested", price: "$40 for 10 packs, $180 50 packs, $300 100 packs. Samples available", images: ["/images/green_apple.jpg", "/images/green_apple1.jpg", "/images/greenapple_lab.jpg"] },
  { id: 3, name: "Fruit Punch 30mg", description: "30 mg 7-hydroxymitragynine *lab tested", price: "$40 for 10 packs, $180 50 packs, $300 100 packs. Samples available", images: ["/images/fruit_punch.jpeg", "/images/fruit_punch_sample.jpg", "/images/fruitpunch_lab.jpg"] },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-sm md:max-w-4xl">
      <nav className="mb-6">
        <Link href="/about" className="mr-4 text-green-900 font-bold text-2xl">About</Link>
        <Link href="/faq" className="mr-4 text-green-900 font-bold text-2xl">FAQ</Link>
        <Link href="/contact" className="mr-4 text-green-900 font-bold text-2xl">Contact</Link>
        <Link href="/disclaimer" className="mr-4 text-green-900 font-bold text-2xl">Disclaimer</Link>
      </nav>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="border p-4 rounded w-full bg-white">
              <h2 className="text-xl font-semibold text-green-800">{product.name}</h2>
              <p className="text-black font-semibold">{product.description}</p>
              <p className="text-gray-900">{product.price}</p>
            </div>
            <div className="mt-4 md:space-y-2 flex md:flex-col space-x-2 md:space-x-0 w-full overflow-x-auto">
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${product.name} Image ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full md:w-full h-auto object-cover rounded cursor-pointer"
                  onClick={() => openImage(image)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}
    </div>
  );
}
