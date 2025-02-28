"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const products = [
  { id: 1, name: "Sour Apple 30mg", description: "Amazing taste: 27 mg 7-hydroxymitragynine  *lab tested", price: "$4 < 25 pieces, $3.50 > 24 pieces", images: ["/images/sour_apple.jpg", "/images/sour_apple1.jpeg", "/images/sourapple_lab.jpg"] },
  { id: 2, name: "Green Apple 30mg", description: "Spectacular taste: 23 mg 7-hydroxymitragynine *lab tested", price: "$4 < 25 pieces, $3.50 > 24 pieces", images: ["/images/green_apple.jpg", "/images/green_apple1.jpg", "/images/greenapple_lab.jpg"] },
  { id: 3, name: "Fruit Punch 45mg", description: "Great taste: 30 mg 7-hydroxymitragynine *lab tested", price: "$4 < 25 pieces, $3.50 > 24 pieces", images: ["/images/fruit_punch.jpeg", "/images/fruit_punch_sample.jpg", "/images/fruitpunch_lab.jpg"] },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="max-w-4xl mx-auto p-4">
    <nav className="mb-6">
      <Link href="/about" className="mr-4 text-green-900 font-bold text-2xl">About</Link>
      <Link href="/faq" className="mr-4 text-green-900 font-bold text-2xl">FAQ</Link>
      <Link href="/contact" className="text-green-900 font-bold text-2xl">Contact Us</Link>
    </nav>
      <h1 className="text-2xl font-bold mb-6">Fresh 7ohBoys drop **2/27</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="border p-4 rounded w-full">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-gray-600">{product.price}</p>
            </div>
            <div className="mt-4 space-y-2 w-full">
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${product.name} Image ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover rounded cursor-pointer"
                  onClick={() => openImage(image)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Image Preview */}
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
