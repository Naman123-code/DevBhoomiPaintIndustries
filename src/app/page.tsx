import Hero from "@/components/Home/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/Forms/ContactForm";

export default function Home() {
  const products = [
    {
      title: "DECORATIVE WHITE CEMENT",
      description: "Class 1 white cement, ideal for premium decorative finishes and architectural brilliance.",
      link: "/products/white-cement",
      image: "/images/white_cement_1789736729812.jpg"
    },
    {
      title: "PREMIUM WALL PUTTY",
      description: "Superior strength, smooth surface, and excellent workability for interior and exterior walls.",
      link: "/products/ss-wall-max-putty",
      image: "/images/wall_putty_1789736742925.jpg"
    },
    {
      title: "TILE ADHESIVE",
      description: "Modern floor and wall tiling solutions with robust bonding capabilities.",
      link: "/products/tile-adhesive",
      image: "/images/tile_adhesive_1789736755757.jpg"
    },
    {
      title: "TILE GROUT",
      description: "Fills gaps between tiles securely and smoothly. Highly durable and stain-resistant.",
      link: "/products/tile-grout",
      image: "/images/tile_grout_1789736767453.jpg"
    },
    {
      title: "WHITE WASH",
      description: "High-quality white wash for a traditional, bright, and hygienic finish on your walls.",
      link: "/products/white-wash",
      image: "/images/white_wash.jpg"
    }
  ];

  const features = [
    { title: "SUPERIOR QUALITY", image: "/images/feature_quality_1789736792618.jpg" },
    { title: "DURABLE FINISH", image: "/images/feature_durable_1789736804549.jpg" },
    { title: "ECO-FRIENDLY", image: "/images/feature_eco_1789736821564.jpg" },
    { title: "RELIABLE SOLUTIONS", image: "/images/feature_reliable_1789736837074.jpg" }
  ];

  return (
    <>
      <Hero />
      
      {/* Our Core Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-db-charcoal tracking-wide uppercase mb-2">
              Our Core Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform duration-300">
                <div className="h-40 rounded-xl overflow-hidden mb-6">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  />
                </div>
                <h3 className="text-lg font-bold text-db-charcoal mb-3 leading-snug">{product.title}</h3>
                <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <Link href={product.link} className="inline-block text-sm font-semibold text-db-charcoal hover:text-db-gold border-b-2 border-db-gold/30 hover:border-db-gold pb-1 transition-colors self-start">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-db-snow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-db-charcoal tracking-wide uppercase">
              About Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-db-charcoal mb-6 leading-tight">
                State-of-the-Art Manufacturing & Quality Control
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                DevBhoomi Paints Industries operates at the forefront of building materials technology. We pride ourselves on maintaining an advanced manufacturing ecosystem that guarantees precision, consistency, and superior quality across our entire product range.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                By investing in rigorous quality control and adopting sustainable practices, we ensure every batch of our White Cement, Wall Putty, and Adhesives meets the highest industry standards, delivering exceptional reliability for builders and architects alike.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-db-gold rounded-sm hover:bg-db-gold-light transition-colors shadow-md"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-video relative">
              <img 
                src="/images/factory_interior.jpg" 
                alt="Modern Manufacturing Facility" 
                className="absolute inset-0 w-full h-full object-cover scale-[1.08] origin-top-left"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder / CEO Section */}
      <section className="py-24 bg-db-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-db-gold shadow-2xl relative">
                <div 
                  className="w-full h-full bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: "url('/images/founder.jpg')" }}
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="mb-6">
                <span className="text-db-gold font-bold tracking-widest uppercase text-sm mb-2 block">Leadership</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">G S Singh</h2>
                <p className="text-gray-400 text-lg">Founder, DevBhoomi Paints Industries</p>
              </div>
              <blockquote className="text-xl md:text-2xl font-light italic text-gray-300 leading-relaxed mb-8 border-l-4 border-db-gold pl-6">
                "We are embarking on an exciting journey to revolutionize the construction materials industry. Our commitment is to bring unparalleled innovation, exceptional quality, and steadfast reliability to every project we touch, building a legacy of trust."
              </blockquote>
              <p className="text-gray-400 leading-relaxed">
                As the visionary founder of this new enterprise, G S Singh brings a fresh perspective and an unwavering dedication to excellence. Under his dynamic leadership, DevBhoomi Paints Industries is poised to set new benchmarks and become a leading force in delivering top-tier, future-ready building solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Enquiry Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Features Row */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-db-charcoal tracking-wide uppercase mb-12">
              Why Choose Dev Bhoomi?
            </h2>
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md relative">
                    <div 
                      className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-125"
                      style={{ backgroundImage: `url('${feature.image}')` }}
                    />
                    <div className="absolute inset-0 bg-db-charcoal/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  <span className="text-sm font-bold text-db-charcoal w-32 text-center group-hover:text-db-gold transition-colors">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-100 my-16" />

          {/* Request Enquiry Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 bg-db-snow p-8 md:p-12 lg:p-16 rounded-3xl shadow-sm border border-gray-100 items-center">
            <div className="flex flex-col justify-center lg:col-span-2">
              <h3 className="text-3xl lg:text-4xl font-bold text-db-charcoal mb-6 leading-tight">
                Ready to Work <br/>With Us?
              </h3>
              <p className="text-gray-600 mb-8 max-w-sm text-lg">
                Get in touch with us for bulk orders, dealership inquiries, or detailed product specifications.
              </p>
              <div className="hidden lg:block w-24 h-1 bg-db-gold rounded-full" />
            </div>
            <div className="lg:col-span-3">
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
