"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Budi Santoso",
    location: "Sleman, Yogyakarta",
    image: "/testimonials/person-1.jpg",
    rating: 5,
    text: "Sangat puas dengan jasa pengeboran sumur dari Ahli Sumur. Airnya melimpah dan jernih. Tim kerjanya profesional dan cepat. Terima kasih Ahli Sumur!",
  },
  {
    id: 2,
    name: "Siti Rahayu",
    location: "Bantul, Yogyakarta",
    image: "/testimonials/person-2.jpg",
    rating: 5,
    text: "Sudah 2 kali menggunakan jasa Ahli Sumur untuk rumah dan toko saya. Hasilnya selalu memuaskan. Harga bersaing dan kualitas terjamin. Recommended!",
  },
  {
    id: 3,
    name: "Ahmad Hidayat",
    location: "Kota Yogyakarta",
    image: "/testimonials/person-3.jpg",
    rating: 4,
    text: "Awalnya ragu karena harga lebih mahal dari tukang sumur biasa, tapi ternyata hasilnya jauh lebih baik. Sumur tidak pernah kering meski musim kemarau. Worth it!",
  },
  {
    id: 4,
    name: "Dewi Lestari",
    location: "Kulon Progo, Yogyakarta",
    image: "/testimonials/person-4.jpg",
    rating: 5,
    text: "Pelayanannya ramah dan informatif. Mereka menjelaskan dengan detail proses pengeboran dan memberikan saran terbaik untuk kebutuhan air di rumah kami. Hasilnya memuaskan!",
  },
  {
    id: 5,
    name: "Hendra Wijaya",
    location: "Gunung Kidul, Yogyakarta",
    image: "/testimonials/person-5.jpg",
    rating: 5,
    text: "Daerah kami terkenal sulit air, tapi Ahli Sumur berhasil menemukan sumber air yang bagus. Sekarang tidak perlu lagi beli air tangki. Terima kasih Ahli Sumur!",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleTestimonials = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + visibleTestimonials >= testimonials.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, testimonials.length - visibleTestimonials) : prev - 1))
  }

  return (
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Testimoni Pelanggan</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Apa kata pelanggan kami tentang layanan jasa pengeboran dan gali sumur yang kami berikan.
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground flex-grow">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md rounded-full p-2 z-10"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md rounded-full p-2 z-10"
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
