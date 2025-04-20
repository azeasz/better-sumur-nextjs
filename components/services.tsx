import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    id: 1,
    icon: "/icons/drilling.png",
    title: "Pengeboran Sumur",
    description: "Jasa pengeboran sumur dalam dengan mesin modern dan tim ahli berpengalaman. Hasil dijamin memuaskan.",
    features: ["Kedalaman hingga 100 meter", "Garansi air", "Bebas endapan", "Pemasangan pompa"],
  },
  {
    id: 2,
    icon: "/icons/well.png",
    title: "Gali Sumur Manual",
    description: "Jasa pembuatan sumur manual dengan teknik tradisional yang terbukti awet dan berkualitas.",
    features: ["Konstruksi kokoh", "Batu bata berkualitas", "Pemasangan cincin", "Pembersihan sumur"],
  },
  {
    id: 3,
    icon: "/icons/pump.png",
    title: "Service Pompa Air",
    description: "Layanan perbaikan dan perawatan pompa air oleh teknisi berpengalaman dengan harga terjangkau.",
    features: ["Semua jenis pompa", "Penggantian sparepart", "Pemasangan baru", "Konsultasi gratis"],
  },
  {
    id: 4,
    icon: "/icons/jetpump.png",
    title: "Pemasangan Jet Pump",
    description: "Jasa pemasangan jet pump untuk kebutuhan rumah tangga maupun industri dengan garansi.",
    features: ["Berbagai merk pompa", "Instalasi pipa", "Setting otomatis", "Garansi service"],
  },
  {
    id: 5,
    icon: "/icons/water.png",
    title: "Sumur Resapan",
    description: "Pembuatan sumur resapan untuk mencegah banjir dan konservasi air tanah yang ramah lingkungan.",
    features: ["Desain sesuai lahan", "Material berkualitas", "Ramah lingkungan", "Sesuai standar"],
  },
  {
    id: 6,
    icon: "/icons/pipe.png",
    title: "Instalasi Pipa Air",
    description: "Pemasangan jaringan pipa air bersih untuk rumah, gedung, dan industri dengan material berkualitas.",
    features: ["Pipa PVC & HDPE", "Desain sistem", "Instalasi rapi", "Uji tekanan"],
  },
]

export default function Services() {
  return (
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Layanan Kami</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan pengeboran dan gali sumur dengan kualitas terbaik dan harga terjangkau. Tim
          ahli kami siap membantu kebutuhan air bersih Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="border-t-4 border-t-yellow-500">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
              </div>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{service.description}</CardDescription>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Selengkapnya
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
          Konsultasi Gratis
        </Button>
      </div>
    </div>
  )
}
