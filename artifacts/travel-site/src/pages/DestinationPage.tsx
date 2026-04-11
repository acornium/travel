import React from "react";
import { Helmet } from "react-helmet-async";
import { useRoute, Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TPWidget } from "@/components/TPWidget";
import { destinations } from "@/lib/data/destinations";
import { MapPin, ArrowLeft } from "lucide-react";
import NotFound from "./not-found";

export default function DestinationPage() {
  const [, params] = useRoute("/destinations/:city");
  const dest = destinations.find(d => d.slug === params?.city);

  if (!dest) return <NotFound />;

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Авиабилеты в {dest.name} | AviaSales Pro</title>
        <meta name="description" content={`Самые дешёвые авиабилеты в ${dest.name}, ${dest.country}. ${dest.description}`} />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Destination Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
            <img 
              src={dest.image} 
              alt={dest.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-20">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors mb-6 backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Все направления
            </Link>
            <div className="flex items-center gap-2 text-white/90 text-lg mb-2 font-medium">
              <MapPin className="w-5 h-5" />
              {dest.country}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
              {dest.name}
            </h1>
          </div>
        </section>

        {/* Content & Widgets */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-2xl font-medium text-muted-foreground leading-relaxed mb-8">
                    {dest.description}
                  </p>
                  {dest.guide.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-6 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">Календарь низких цен</h2>
                  <p className="text-muted-foreground">
                    Выберите самые выгодные даты для перелёта в {dest.name}.
                  </p>
                  <TPWidget type="calendar" />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-card rounded-2xl shadow-sm border p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4">Найти билеты</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Лучшие цены на перелёты в {dest.name} из вашего города
                    </p>
                    <TPWidget type="search" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
