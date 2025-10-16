import { MapPin, ExternalLink } from "lucide-react"

const cards = [
  {
    title: "Peta Lokasi",
    subtitle: "Reservasi Bus Tividi Jogja",
    address: "Jl. Raya Wates, Km. 6, Ambarketawang, Yogyakarta",
    href: "https://www.google.com/maps/place/Bus+Efisiensi+Cabang+Yogyakarta/@-7.777902,110.0632325,49387m/data=!3m1!1e3!4m10!1m2!2m1!1stividi+trans+jogja!3m6!1s0x2e7ae47a08110a8f:0x69ddcda70cc5fc54!8m2!3d-7.8029718!4d110.3111333!15sChJ0aXZpZGkgdHJhbnMgam9namFaFCISdGl2aWRpIHRyYW5zIGpvZ2phkgEWdHJhbnNwb3J0YXRpb25fc2VydmljZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSQ2MyVnhRUzEzUlJBQqoBVgoNL2cvMTFoZDhoMG1kNhABKgoiBnRpdmlkaSgmMh8QASIbMyDeQoqBt0-mpjDfRuGl9Tr5pfm7oVNsN-uhMhYQAiISdGl2aWRpIHRyYW5zIGpvZ2ph4AEA-gEECAAQIQ!16s%2Fg%2F1pzq_c01j?hl=id&entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    title: "Peta Lokasi",
    subtitle: "Rest Area Tividi Kebumen",
    address: "JL. Raya Kutoarjo Km. 6, Jatisari Kebumen",
    href: "https://www.google.com/maps/place/Agen+Reservasi+Bus+Efisiensi/@-7.6984108,109.6980174,17z/data=!4m10!1m2!2m1!1sAlamat+kantor+cabang+Kebumen+Jl+Wonosari+KM+6,+Kebumen,+Jawa+Tengah!3m6!1s0x2e7ac9f406a2a635:0x4c7fa75fb78799a0!8m2!3d-7.6988705!4d109.700336!15sCkNBbGFtYXQga2FudG9yIGNhYmFuZyBLZWJ1bWVuIEpsIFdvbm9zYXJpIEtNIDYsIEtlYnVtZW4sIEphd2EgVGVuZ2FoIgJIAVo8IjprYW50b3IgY2FiYW5nIGtlYnVtZW4gamwgd29ub3Nhcmkga20gNiBrZWJ1bWVuIGphd2EgdGVuZ2FokgEWdHJhbnNwb3J0YXRpb25fc2VydmljZZoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOR01tUlFUSGRuUlJBQqoBfxABKhkiFWthbnRvciBjYWJhbmcga2VidW1lbigmMiAQASIcNjK-BVB1B57AiK-0WMp6bXEHcc7cnAJ5H96bpTI-EAIiOmthbnRvciBjYWJhbmcga2VidW1lbiBqbCB3b25vc2FyaSBrbSA2IGtlYnVtZW4gamF3YSB0ZW5nYWjgAQD6AQQIABA6!16s%2Fg%2F11b6d2nsxf?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    title: "Peta Lokasi",
    subtitle: "Rest Area Bus Cilacap",
    address: "JL. Raya Perintis Kemerdekaan No.52, Rejanegara, Cilacap",
    href: "https://www.google.com/maps/dir/-7.6763173,109.6702356/Pool+Efisiensi+Cilacap,+Jl.+Perintis+Kemerdekaan+No.52,+Rejanegara,+Gumilir,+Kec.+Cilacap+Utara,+Kabupaten+Cilacap,+Jawa+Tengah+53231/@-7.6435033,108.6942412,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e656d2e97f6c849:0x30111e5caafe7c8e!2m2!1d109.0377665!2d-7.6887698?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
  },
]

export function MapCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((c, idx) => (
        <a key={idx} href={c.href} target="_blank" rel="noopener noreferrer" className="block">
          <div className="rounded-xl h-80 flex items-center justify-center shadow-2xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer group overflow-hidden relative bg-primary">
            <div className="absolute inset-0 bg-primary/10" aria-hidden="true" />
            <div className="text-center text-primary-foreground relative z-10 px-6">
              <div className="rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary-foreground/40">
                <MapPin className="h-10 w-10" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p className="text-lg opacity-95">{c.subtitle}</p>
              <p className="text-base opacity-90">{c.address}</p>
              <div className="rounded-lg px-3 py-1 inline-block mt-3 border border-primary-foreground/40 bg-primary-foreground/10">
                <p className="text-sm font-medium flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Klik untuk membuka di Google Maps
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
