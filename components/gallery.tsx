"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    image: "/gallery/gallery-1.jpg",
    title: "Pengeboran Sumur Dalam",
    category: "Pengeboran",
  },
  {
    id: 2,
    image: "/gallery/gallery-2.jpg",
    title: "Gali Sumur Manual",
    category: "Sumur Manual",
  },
  {
    id: 3,
    image: "/gallery/gallery-3.jpg",
    title: "Pemasangan Jet Pump",
    category: "Jet Pump",
  },
  {
    id: 4,
    image: "/gallery/gallery-4.jpg",
    title: "Service Pompa Air",
    category: "Service",
  },
  {
    id: 5,
    image: "/gallery/gallery-5.jpg",
    title: "Sumur Resapan",
    category: "Resapan",
  },
  {
    id: 6,
    image: "/gallery/gallery-6.jpg",
    title: "Instalasi Pipa",
    category: "Instalasi",
  },
  {
    id: 7,
    image: "/gallery/gallery-7.jpg",
    title: "Pengeboran Sumur Industri",
    category: "Pengeboran",
  },
  {
    id: 8,
    image: "/gallery/gallery-8.jpg",
    title: "Sumur Bor Perumahan",
    category: "Pengeboran",
  },
]

const categories = ["Semua", "Pengeboran", "Sumur Manual", "Jet Pump", "Service", "Resapan", "Instalasi"]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredGallery =
    selectedCategory === "Semua" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Galeri Pekerjaan</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Berikut adalah dokumentasi dari berbagai proyek yang telah kami kerjakan. Kualitas dan kepuasan pelanggan
          adalah prioritas kami.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category ? "bg-yellow-500 text-black" : "bg-muted hover:bg-muted/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(item.id)}
          >
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>

            <div className="relative aspect-video">
              <Image
                src={galleryItems.find((item) => item.id === selectedImage)?.image || ""}
                alt={galleryItems.find((item) => item.id === selectedImage)?.title || ""}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-medium">{galleryItems.find((item) => item.id === selectedImage)?.title}</h3>
              <p className="text-white/80">{galleryItems.find((item) => item.id === selectedImage)?.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
