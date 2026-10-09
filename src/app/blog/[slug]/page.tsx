import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Dev Bhoomi Paint Industries`,
    description: post.excerpt,
    keywords: post.tags,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-db-snow min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-db-gold mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Knowledge Center
        </Link>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex gap-2 mb-6 flex-wrap">
            {post.tags.map((tag, i) => (
              <span key={i} className="text-xs font-bold bg-db-gold/10 text-db-gold px-3 py-1 rounded-full uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-db-charcoal mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-10 pb-10 border-b border-gray-100">
            <div className="flex items-center gap-2"><Calendar size={18} /> {post.date}</div>
            <div className="flex items-center gap-2"><User size={18} /> {post.author}</div>
          </div>
          
          {/* Article Content */}
          <article 
            className="prose prose-lg max-w-none prose-headings:text-db-charcoal prose-a:text-db-gold hover:prose-a:text-db-gold-light"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
}
