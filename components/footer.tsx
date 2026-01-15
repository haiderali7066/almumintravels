import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Al Mumin Travels UK</h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Your trusted partner for Umrah and Hajj pilgrimages. Delivering excellence in Islamic travel since 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#home" className="hover:text-background transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#umrah" className="hover:text-background transition">
                  Umrah Packages
                </a>
              </li>
              <li>
                <a href="#hajj" className="hover:text-background transition">
                  Hajj Packages
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-background transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+447482795318" className="hover:text-background transition">
                  +44 7482 795318
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:Info@alhmumintravel.com" className="hover:text-background transition">
                  Info@alhmumintravel.com
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold mb-4">Offices</h4>
            <div className="space-y-4 text-sm text-background/70">
              <div className="flex gap-2">
                <MapPin size={16} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-background">Near London</p>
                  <p>9a, 1st Floor, Waterborne Walk, Leighton Buzzard, LU7 1DH</p>
                </div>
              </div>
              <div className="flex gap-2">
                <MapPin size={16} className="shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-background">Near Manchester</p>
                  <p>302 Colne Road, Burnley, BB10 1DZ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-background/60">© 2026 Al Mumin Travels UK. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/almumintravelsuk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1KJXwzAdDr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-background transition"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
