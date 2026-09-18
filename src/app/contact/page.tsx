import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/Forms/ContactForm";

export const metadata = {
  title: "Contact Us | DevBhoomi Paints",
  description: "Get in touch with DevBhoomi Paints Industries for inquiries, bulk orders, and dealership opportunities.",
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
                    <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">+91 98765 43210</p>
                    <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-db-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">info@devbhoomipaints.com</p>
                    <p className="text-gray-300 hover:text-white transition-colors cursor-pointer">sales@devbhoomipaints.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-db-gold mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Corporate Office</p>
                    <p className="text-gray-300 leading-relaxed">
                      123 Industrial Estate, Phase II<br />
                      Dehradun, Uttarakhand 248001<br />
                      India
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
            
            {/* Google Map Embed */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-64 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74317112009!2d77.94709403847702!3d30.32541334645207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                title="DevBhoomi Paints Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}
