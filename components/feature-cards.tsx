import { Bus, Shield, Star } from "lucide-react"

const features = [
  {
    icon: Bus,
    title: "Armada Modern",
    description: "Bus dengan fasilitas lengkap dan terawat untuk kenyamanan perjalanan Anda.",
  },
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description: "Sopir berpengalaman dan sistem keamanan terdepan untuk perjalanan yang aman.",
  },
  {
    icon: Star,
    title: "Pelayanan Prima",
    description: "Layanan 24/7 dengan customer service yang responsif dan profesional.",
  },
]

export function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map(({ icon: Icon, title, description }) => (
        <div key={title} className="text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary/15">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      ))}
    </div>
  )
}
