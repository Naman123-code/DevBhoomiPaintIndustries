import Link from "next/link";
import { Mail, Phone, MapPin, Settings } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-db-charcoal text-db-snow pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center p-1">
                <img src="/images/logo.png" alt="Dev Bhoomi Paint Industries - S S Wall Max Manufacturer UP & UK" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl tracking-tight text-db-white leading-tight">
                Dev Bhoomi <br />Paint Industries
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading manufacturers of premium white cement, putty, and high-performance building materials. 
              Committed to strength, whiteness, and durability.
            </p>
            <div className="flex flex-col gap-4">
              <div className="bg-gray-800/60 border border-gray-700/50 px-4 py-3 rounded-lg shadow-sm w-[220px]">
                <span className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase block mb-1">Registration Number</span>
                <span className="text-sm font-bold text-db-gold tracking-wide">UDYAM-UK-12-0099995</span>
              </div>
              <div className="flex items-center justify-center w-[220px]">
                <img 
                  src="/images/make_in_india.png" 
                  alt="Make in India" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-db-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-db-gold transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-db-gold transition-colors text-sm">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-db-gold transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-db-gold transition-colors text-sm">
                  Knowledge Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-db-white font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/ss-wall-max-putty" className="text-gray-400 hover:text-db-gold transition-colors text-sm">
                  SS Wall Max Putty
                </Link>
              </li>
              <li>
                <Link href="/products/white-cement" className="text-gray-400 hover:text-db-gold transition-colors text-sm">
                  Premium White Cement
                </Link>
              </li>
              <li>
                <Link href="/products/tile-adhesive" className="text-gray-400 hover:text-db-gold transition-colors text-sm">
                  Tile Adhesives
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-db-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="text-db-gold shrink-0 mt-0.5" size={18} />
                <span>
                  <strong className="text-gray-300">Office:</strong> Opp Govt Primary School, Khamia Road, Shantipuri no 3, Kichha, Udham Singh Nagar, Uttrakhand, 263148
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="text-db-gold shrink-0 mt-0.5" size={18} />
                <span>
                  <strong className="text-gray-300">Plant:</strong> Ward no 2, Khet no 763, Near New Mandi, Sonera, Kichha, Udham Singh Nagar, Uttrakhand, 263148
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="text-db-gold shrink-0 mt-0.5" size={18} />
                <div className="flex flex-col space-y-1">
                  <span>+91 8218616992</span>
                  <span>+91 6397212360</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="text-db-gold shrink-0" size={18} />
                <a href="mailto:contactus@devbhoomipaint.co.in" className="hover:text-db-white transition-colors break-all">
                  contactus@devbhoomipaint.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dev Bhoomi Paint Industries. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-db-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-db-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
