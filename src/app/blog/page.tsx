import { blogPosts } from "@/data/blog";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Knowledge Center & Blog | Dev Bhoomi Paint Industries | S S WALL MAX",
  description: "Read the latest insights, tips, and news from Dev Bhoomi Paint Industries, manufacturers of S S WALL MAX in UP and Uttarakhand.",
};

export default function BlogIndex() {
  return (
    <div className="bg-db-snow min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-db-charcoal mb-4 tracking-tight">
            Knowledge Center
          </h1>
          <div className="w-24 h-1 bg-db-gold mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, guides, and news from the experts at Dev Bhoomi Paint Industries.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group">
              <div className="flex gap-2 mb-4 flex-wrap">
                {post.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="text-xs font-bold bg-gray-100 text-db-charcoal px-3 py-1 rounded-full uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold text-db-charcoal mb-3 group-hover:text-db-gold transition-colors">{post.title}</h2>
              <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
              
              <div className="mt-auto border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5"><Calendar size={16} /> {post.date}</div>
                </div>
                <span className="inline-flex items-center text-db-gold font-bold">
                  Read Article <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
