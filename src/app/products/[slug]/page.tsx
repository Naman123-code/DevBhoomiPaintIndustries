import { products, getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight, FileText } from "lucide-react";
import CoverageCalculator from "@/components/Calculator/CoverageCalculator";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.name} | DevBhoomi Paints`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-db-snow min-h-screen pt-24 pb-24">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-sm text-gray-500">
          <Link href="/" className="hover:text-db-gold transition-colors">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link href="/products" className="hover:text-db-gold transition-colors">Products</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-db-charcoal font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Link href="/products" className="inline-flex items-center text-db-charcoal hover:text-db-gold font-medium mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Image & Download TDS */}
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative h-96 lg:h-[600px] w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              <div className="absolute inset-0 bg-db-charcoal/10" />
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-db-charcoal">Technical Data Sheet</h4>
                <p className="text-sm text-gray-500">Download detailed specifications</p>
              </div>
              <button className="flex items-center gap-2 bg-db-snow text-db-charcoal px-4 py-2 rounded-md hover:bg-db-gold hover:text-white transition-colors font-medium border border-gray-200">
                <FileText size={18} /> TDS (PDF)
              </button>
            </div>
          </div>

          {/* Right Column: Product Info */}
          <div>
            <div className="inline-block bg-db-charcoal text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-4">
              {product.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-db-charcoal mb-4 tracking-tight">
              {product.name}
            </h1>
            <p className="text-xl text-db-gold font-medium mb-6">
              {product.tagline}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Features & Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-bold text-db-charcoal mb-4 border-b border-gray-200 pb-2">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 size={20} className="text-db-gold mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-db-charcoal mb-4 border-b border-gray-200 pb-2">Applications</h3>
                <ul className="space-y-3">
                  {product.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-db-charcoal rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-db-charcoal mb-4 border-b border-gray-200 pb-2">Technical Specifications</h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {product.technicalSpecs.map((spec, idx) => (
                      <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-db-snow transition-colors">
                        <th className="py-4 px-6 text-sm font-semibold text-db-charcoal bg-gray-50/50 w-1/3">
                          {spec.label}
                        </th>
                        <td className="py-4 px-6 text-sm text-gray-700">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Packaging */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-db-charcoal mb-4 border-b border-gray-200 pb-2">Available Packaging</h3>
              <div className="flex flex-wrap gap-3">
                {product.packaging.map((pack, idx) => (
                  <div key={idx} className="bg-white border border-db-gold text-db-charcoal px-4 py-2 rounded-md font-semibold text-sm shadow-sm">
                    {pack}
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry CTA */}
            <div className="bg-db-charcoal text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Interested in {product.name}?</h3>
              <p className="text-gray-300 mb-6">Contact our sales team for bulk pricing, dealer inquiries, or technical support.</p>
              <Link 
                href={`/contact?product=${product.slug}`}
                className="inline-block bg-db-gold text-db-charcoal font-bold px-8 py-3 rounded-md hover:bg-white transition-colors w-full text-center"
              >
                Request a Quote
              </Link>
            </div>

          </div>
        </div>

        {/* Coverage Calculator Section */}
        <div className="mt-24">
          <CoverageCalculator productCategory={product.category} productName={product.name} />
        </div>

      </div>
    </div>
  );
}
