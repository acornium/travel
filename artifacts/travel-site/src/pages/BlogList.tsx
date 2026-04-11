import React from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/lib/data/blog-posts";

export default function BlogList() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Блог путешественника | AviaSales Pro</title>
        <meta name="description" content="Лайфхаки для путешествий, советы по поиску дешёвых авиабилетов и обзоры лучших направлений." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Блог путешественника</h1>
            <p className="text-xl text-muted-foreground">
              Полезные советы, маршруты и лайфхаки для тех, кто любит открывать мир и экономить на билетах.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogPosts.map((post, i) => (
              <div key={post.slug} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
