import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  CreditCard,
  Banknote,
  Landmark,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Al Mumin Travels UK</h3>
            <p className="text-sm text-background/70 leading-relaxed mb-4">
              Your trusted partner for Umrah and Hajj pilgrimages. Delivering
              excellence in Islamic travel since 2008.
            </p>
            <p className="text-xs text-background/60 leading-relaxed">
              Many of the flights and flight-inclusive holidays on this website
              are financially protected by the ATOL scheme. ATOL protection does
              not apply to all travel services. Please ask us to confirm what
              protection applies to your booking. If you do not receive an ATOL
              Certificate, your booking will not be ATOL protected. For more
              information visit{" "}
              <a
                href="https://www.atol.org.uk/ATOLCertificate"
                target="_blank"
                className="underline hover:text-background"
              >
                www.atol.org.uk
              </a>
              .
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {[
                ["Home", "/home"],
                ["Umrah Packages", "/umrah-packages"],
                ["Hajj Packages", "/hajj-packages"],
                ["Guide", "/guide"],
                ["Halal Tours", "/halal-tours"],
                ["About Us", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="hover:text-background transition"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+447482795318" className="hover:text-background">
                  +44 7482 795318
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:Info@almumintravels.co.uk"
                  className="hover:text-background"
                >
                  Info@almumintravels.co.uk
                </a>
              </li>

              <li className="flex items-center gap-2">
                <MessageCircle size={16} />
                <a
                  href="https://wa.me/447482795318"
                  target="_blank"
                  className="hover:text-background"
                >
                  WhatsApp Live Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Offices & Payments */}
          <div>
            <h4 className="font-bold mb-4">Offices</h4>
            <div className="space-y-4 text-sm text-background/70 mb-6">
              <div className="flex gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-background">Near London</p>
                  <p>
                    9a, 1st Floor, Waterborne Walk, Leighton Buzzard, LU7 1DH
                  </p>
                </div>
              </div>

              {/* <div className="flex gap-2">
                <MapPin size={16} className="mt-1 shrink-0" />
                <div>
                  <p className="font-semibold text-background">
                    Near Manchester
                  </p>
                  <p>302 Colne Road, Burnley, BB10 1DZ</p>
                </div>
              </div> */}
            </div>

            {/* Payments */}
            <h4 className="font-bold mb-3">Payments Accepted</h4>
            <div className="flex flex-wrap gap-3 items-center">
              <img
                src="https://traveltoharam.co.uk/wp-content/uploads/2025/10/payment_icon-1-1-min-1.png"
                alt="Payment 1"
                className="h-8 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Trust Logos */}
        <div className="border-t border-background/20 pt-6 mt-6 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://www.haj.gov.sa/"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://traveltoharam.co.uk/wp-content/uploads/2025/10/ministry-hajj.webp"
              alt="Ministry of Hajj"
              className="h-10 object-contain"
            />
          </a>

          <a
            href="https://www.umrah.gov.sa/"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://ziyarateumrahtravel.co.uk/wp-content/uploads/2024/08/images-removebg-preview.png"
              alt="Ministry of Umrah"
              className="h-10 object-contain"
            />
          </a>

          <a
            href="https://www.atol.org.uk/ATOLCertificate"
            target="_blank"
            className="hover:opacity-80 transition"
          >
            <img
              src="https://ziyarateumrahtravel.co.uk/wp-content/uploads/2024/08/IATA-logo-3CE0FA8A11-seeklogo.com_.png"
              alt="ATOL Protected"
              className="h-10 object-contain"
            />
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between mt-6">
          <p className="text-sm text-background/60">
            © 2026 Al Mumin Travels UK. All rights reserved.
          </p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/almumintravelsuk"
              target="_blank"
              className="hover:text-background"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/1KJXwzAdDr/"
              target="_blank"
              className="hover:text-background"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
