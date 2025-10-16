type FooterProps = {
  companyName: string
  description: string
}

import { Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

export function SiteFooter({ companyName, description }: FooterProps) {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div>
            <img src="/logo.png" alt={`${companyName} logo`} className="h-16 w-auto mb-4" />
            <p className="opacity-90">{description}</p>
          </div>

          {/* add lucide icons to contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Informasi Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="sr-only">Telepon</span>
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="sr-only">WhatsApp</span>
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="sr-only">Email</span>
                <span>info@bustividipariwisata.com</span>
              </div>
            </div>
          </div>

          {/* add lucide icons to social links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Media Sosial Kami</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 opacity-90 hover:opacity-100">
                <Facebook className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center gap-3 opacity-90 hover:opacity-100">
                <Instagram className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Instagram</span>
              </a>
              <a
                href="http://www.youtube.com/@BUSEFISIENSIOFFICIAL"
                className="flex items-center gap-3 opacity-90 hover:opacity-100"
              >
                <Youtube className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="opacity-90">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
