import { products } from "@/data/products";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";

export const metadata = {
  title: "Products | DevBhoomi Paints",
  description: "Browse our premium range of white cement, wall putty, and tile adhesives.",
};

export default function ProductsPage() {
  return (
    <div className="bg-db-snow min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-db-charcoal mb-4 tracking-tight">
            Our Products
          </h1>
          <div className="w-24 h-1 bg-db-gold mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of high-performance building materials, engineered for uncompromising strength and beauty.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="bg-white block cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group/card">
              
              <div className="relative h-64 overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 group-hover/card:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-db-charcoal/20 group-hover:bg-db-charcoal/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-db-charcoal uppercase tracking-wider">
                  {product.category}
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-db-charcoal mb-2">{product.name}</h2>
                <p className="text-db-gold font-medium text-sm mb-4">{product.tagline}</p>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="mt-auto space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Box size={16} className="text-db-gold" />
                    <span>Available in: {product.packaging.join(", ")}</span>
                  </div>
                  
                  <div 
                    className="inline-flex items-center justify-center w-full py-3 bg-db-charcoal text-white rounded-sm group-hover/card:bg-db-gold group-hover/card:text-db-charcoal font-semibold transition-colors duration-300 group"
                  >
                    View Details <ArrowRight size={18} className="ml-2 group-hover/card:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
