type HeroProps = {
  imageUrl: string
  title: string
  description: string
}

export function Hero({ imageUrl, title, description }: HeroProps) {
  return (
    <div
      className="relative text-white"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        minHeight: "600px",
      }}
      aria-label="Hero cover"
    >
      {/* overlay to ensure text readability */}
      <div className="absolute inset-0 bg-foreground/10" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex items-center min-h-[600px]">
        <div className="text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance drop-shadow">{title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto drop-shadow">{description}</p>
        </div>
      </div>
    </div>
  )
}
