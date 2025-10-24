import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { FeatureCards } from "@/components/feature-cards"
import { VideoSection } from "@/components/video-section"
import { MapCards } from "@/components/map-cards"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  // Content replacing PHP variables
  const company = {
    company_name: "Tividi Bus Pariwisata",
    description: "Transportasi Pariwisata Terpercaya untuk Perjalanan Wisata Anda",
  }

  const hero = {
    image: "/cover.png",
    title: company.company_name,
    description: company.description,
  }

  return (
    <>
      <SiteNav />
      <main className="pt-16">
        <section id="home">
          <Hero imageUrl={hero.image} title={hero.title} description={hero.description} />
        </section>

        <section id="tentang" className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Selamat Datang di Tividi Bus Pariwisata</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
                Tividi hadir untuk memberikan pengalaman perjalanan yang tak terlupakan dengan layanan bus pariwisata
                terbaik di kelasnya. Armada kami dilengkapi dengan fasilitas modern dan kenyamanan maksimal, mulai dari
                kursi yang luas dan empuk, pendingin udara yang sejuk, hingga sistem hiburan yang membuat perjalanan
                Anda semakin menyenangkan.
              </p>
            </div>
            <FeatureCards />
          </div>
        </section>

        <section id="video" className="py-16 bg-muted">
          <VideoSection />
        </section>

        <section id="lokasi" className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Lokasi Kantor</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Kunjungi kantor kami untuk konsultasi dan reservasi langsung
              </p>
            </div>
            <MapCards />
          </div>
        </section>
      </main>
      <SiteFooter
        companyName={company.company_name}
        description="Transportasi pariwisata terpercaya dengan layanan berkualitas tinggi"
      />
    </>
  )
}
