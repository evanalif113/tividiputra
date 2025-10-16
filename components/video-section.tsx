export function VideoSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Video Profil Perusahaan</h2>
        <p className="mt-4 text-lg text-muted-foreground">Lihat bagaimana kami memberikan layanan terbaik</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
          <div className="w-full">
            <iframe
              className="w-full h-96 md:h-[500px]"
              src="https://www.youtube.com/embed/Eec_ozXcj_E"
              title="Video Profil Bus Tividi Pariwisata"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Tentang Video Ini</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Video ini menampilkan profil lengkap Bus Tividi Pariwisata, mulai dari fasilitas interior yang nyaman,
            eksterior yang elegan, hingga testimoni dari pelanggan yang puas dengan layanan kami.
          </p>
        </div>
      </div>
    </div>
  )
}
