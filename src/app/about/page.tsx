import Image from "next/image";
import { Award, Target, Eye, Users } from "lucide-react";

export const metadata = {
  title: "About Us | DevBhoomi Paints",
  description: "Learn about DevBhoomi Paints Industries, our history, ISO certifications, and manufacturing excellence.",
};

export default function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "15+" },
    { label: "Satisfied Clients", value: "10K+" },
    { label: "Tons Manufactured", value: "500K+" },
    { label: "Retail Partners", value: "500+" },
  ];

  return (
    <div className="bg-db-snow min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-db-charcoal mb-4 tracking-tight">
            Our Legacy of <span className="text-db-gold">Quality</span>
          </h1>
          <div className="w-24 h-1 bg-db-gold mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to redefine the construction materials industry, DevBhoomi Paints Industries has grown into a trusted name synonymous with unparalleled strength, pristine finishes, and enduring quality.
          </p>
        </div>

        <div className="relative h-96 md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/about_us_manufacturing_1789737434145.jpg')" }}
          />
          <div className="absolute inset-0 bg-db-charcoal/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-db-charcoal-dark via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-10 left-10 text-white z-10">
            <h3 className="text-3xl font-bold mb-2">State of the Art Manufacturing</h3>
            <p className="text-gray-300 max-w-xl">Our modern facilities ensure precision and consistency in every batch we produce.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-db-charcoal text-white py-16 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4">
                <p className="text-4xl md:text-5xl font-bold text-db-gold mb-2">{stat.value}</p>
                <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-db-gold/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
            <Target className="w-12 h-12 text-db-gold mb-6" />
            <h2 className="text-3xl font-bold text-db-charcoal mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To deliver innovative, sustainable, and high-performance building materials that empower architects, builders, and homeowners to construct spaces of enduring beauty and structural integrity.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-db-charcoal/5 rounded-bl-full group-hover:scale-150 transition-transform duration-700" />
            <Eye className="w-12 h-12 text-db-charcoal mb-6" />
            <h2 className="text-3xl font-bold text-db-charcoal mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the most preferred and trusted brand in the construction materials sector nationwide, recognized for our commitment to quality, technological advancement, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 md:p-16 shadow-lg border border-gray-200 text-center">
          <Award className="w-16 h-16 text-db-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-db-charcoal mb-4">ISO Certified Excellence</h2>
          <div className="w-16 h-1 bg-db-gold mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Quality is not just a promise; it's embedded in our process. DevBhoomi Paints Industries is proudly ISO certified, adhering to the highest international standards of manufacturing, safety, and environmental responsibility.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
             <div className="px-6 py-3 bg-white shadow-sm border border-gray-200 rounded-full font-bold text-db-charcoal">ISO 9001:2015</div>
             <div className="px-6 py-3 bg-white shadow-sm border border-gray-200 rounded-full font-bold text-db-charcoal">ISO 14001:2015</div>
          </div>
        </div>
      </section>

    </div>
  );
}
