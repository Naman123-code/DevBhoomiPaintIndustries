import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-db-charcoal text-db-snow pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center p-1">
                <img src="/images/logo.png" alt="Dev Bhoomi Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl tracking-tight text-db-white leading-tight">
                Dev Bhoomi <br />Paint Industries
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading manufacturers of premium white cement, putty, and high-performance building materials. 
              Committed to strength, whiteness, and durability.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-db-gold transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-db-gold transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-db-gold transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
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
                  <span>+91 8077116992</span>
                  <span>+91 6397212360</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="text-db-gold shrink-0" size={18} />
                <a href="mailto:info@devbhoomipaints.com" className="hover:text-db-white transition-colors">
                  info@devbhoomipaints.com
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
