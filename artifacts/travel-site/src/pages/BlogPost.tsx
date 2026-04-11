import React from "react";
import { Helmet } from "react-helmet-async";
import { useRoute, Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/lib/data/blog-posts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import NotFound from "./not-found";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!post) return <NotFound />;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | AviaSales Pro</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={post.image} />
      </Helmet>

      <Header />

      <main className="flex-grow pb-20">
        {/* Article Header */}
        <div className="container mx-auto px-4 pt-10 pb-8">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад в блог
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 max-w-5xl mb-12">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg prose-blue dark:prose-invert">
            <p className="text-xl text-muted-foreground font-medium mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            {post.body.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
