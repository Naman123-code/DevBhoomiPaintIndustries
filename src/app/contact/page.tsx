import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/Forms/ContactForm";

export const metadata = {
  title: "Contact Us | Dev Bhoomi Paint Industries",
  description: "Get in touch with Dev Bhoomi Paint Industries in UP and Uttarakhand for inquiries, bulk orders, and dealership opportunities for S S WALL MAX and paints.",
};

export default function ContactPage() {
  return (
    <div className="bg-db-snow min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-db-charcoal mb-4 tracking-tight">
            Let's <span className="text-db-gold">Connect</span>
          </h1>
          <div className="w-24 h-1 bg-db-gold mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for a dealership, bulk order, or technical assistance, our team is ready to help you build better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-db-charcoal text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-db-gold/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-db-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">+91 8218616992</p>
                    <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">+91 6397212360</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-db-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">contactus@devbhoomipaint.co.in</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-db-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Office</p>
                    <p className="text-gray-300 leading-relaxed text-sm mb-4">
                      Opp Govt Primary School, Khamia Road, Shantipuri no 3, Kichha, Udham Singh Nagar, Uttrakhand, 263148
                    </p>
                    <p className="font-semibold mb-1">Plant</p>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      Ward no 2, Khet no 763, Near New Mandi, Sonera, Kichha, Udham Singh Nagar, Uttrakhand, 263148
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-db-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Working Hours</p>
                    <p className="text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-[400px] lg:h-[500px] w-full relative group mt-8">
          <iframe
            src="https://maps.google.com/maps?q=Kichha,+Udham+Singh+Nagar,+Uttrakhand,+263148&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
            title="Dev Bhoomi Paint Location"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
