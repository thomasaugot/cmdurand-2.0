"use client";

import { FaStar, FaGoogle } from "react-icons/fa";
import Image from "next/image";

function GoogleWidget() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-4 md:hidden">
        {/* Google + Rating */}
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/img/google.png"
              width={60}
              height={20}
              alt="Google logo"
              className="object-contain"
            />
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                5.0
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-secondary text-xs" />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="flex items-center gap-4 text-white">
            <div className="text-center">
              <div className="text-sm font-bold">
                5+ avis
              </div>
              <div className="text-white/70 text-xs">
                vérifiés
              </div>
            </div>
            <div className="w-px h-6 bg-white/30"></div>
            <div className="text-center">
              <div className="text-sm font-bold">
                100%
              </div>
              <div className="text-white/70 text-xs">
                satisfaits
              </div>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <a
          href="https://www.google.com/search?sca_esv=601739216&rlz=1C1ONGR_frFR1029FR1030&tbm=lcl&sxsrf=ACQVn0-fWAj5KZ3_YMpjnAs56s2pPg6k0w:1706281887129&q=Charpente+Menuiserie+Durand+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NLSwsDC1NLIwszAzMTM0NDA12MDI-IpR2TkjsaggNa8kVcE3Na80szi1KDNVwaW0KDEvRSEotSwztbx4ESsxqgAd6xn9ZgAAAA&rldimm=1188859286864611050&hl=en-FR&sa=X&ved=2ahUKEwjahpOuq_uDAxVmbKQEHTqqAiEQ9fQKegQIRBAF&biw=1366&bih=607&dpr=1#lkt=LocalPoiReviews&lrd=0x480f89d613b78025:0x107fad38f97d46ea,3,,,,"
          target="_blank"
          rel="noreferrer"
          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
        >
          <FaGoogle size={16} />
          Donner un avis
        </a>
      </div>

      {/* Desktop/Tablet Layout */}
      <div className="hidden md:flex items-center justify-center gap-8">
        {/* Logo Google + Note */}
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
          <Image
            src="/assets/img/google.png"
            width={80}
            height={27}
            alt="Google logo"
            className="object-contain"
          />
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">
              5.0
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-secondary text-sm" />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 text-white">
          <div className="text-center">
            <div className="text-xl font-bold">
              5+ avis
            </div>
            <div className="text-white/70 text-sm">
              vérifiés
            </div>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="text-center">
            <div className="text-xl font-bold">
              100%
            </div>
            <div className="text-white/70 text-sm">
              satisfaits
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://www.google.com/search?sca_esv=601739216&rlz=1C1ONGR_frFR1029FR1030&tbm=lcl&sxsrf=ACQVn0-fWAj5KZ3_YMpjnAs56s2pPg6k0w:1706281887129&q=Charpente+Menuiserie+Durand+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NLSwsDC1NLIwszAzMTM0NDA12MDI-IpR2TkjsaggNa8kVcE3Na80szi1KDNVwaW0KDEvRSEotSwztbx4ESsxqgAd6xn9ZgAAAA&rldimm=1188859286864611050&hl=en-FR&sa=X&ved=2ahUKEwjahpOuq_uDAxVmbKQEHTqqAiEQ9fQKegQIRBAF&biw=1366&bih=607&dpr=1#lkt=LocalPoiReviews&lrd=0x480f89d613b78025:0x107fad38f97d46ea,3,,,,"
          target="_blank"
          rel="noreferrer"
          className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2 hover:shadow-lg"
        >
          <FaGoogle size={16} />
          Donner un avis
        </a>
      </div>
    </div>
  );
}

export default GoogleWidget;