import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  TravelpayoutsResults,
  TravelpayoutsWhiteLabel,
} from "@/components/TravelpayoutsWhiteLabel";
import { DestinationCard } from "@/components/DestinationCard";
import { destinations } from "@/lib/data/destinations";
import { ShieldCheck, Globe, Zap, ArrowRight } from "lucide-react";

export default function Home() {
  const popularDestinations = destinations.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>AviaSales Pro - Найди дешёвые авиабилеты по всему миру</title>
        <meta name="description" content="Поиск самых дешёвых авиабилетов. Сравнивайте цены и экономьте на путешествиях с AviaSales Pro." />
        <meta property="og:title" content="AviaSales Pro - Найди дешёвые авиабилеты" />
        <meta property="og:description" content="Экономьте на перелётах вместе с нами." />
      </Helmet>

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-blue-900 z-0" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop')] opacity-20 mix-blend-overlay bg-cover bg-center z-0" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
              Найди дешёвые <br className="hidden md:block"/> авиабилеты
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
              Сравниваем цены сотен авиакомпаний и агентств, чтобы вы могли тратить деньги на впечатления, а не на перелёты.
            </p>

            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <TravelpayoutsWhiteLabel />
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Результаты поиска авиабилетов
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                После запуска поиска виджет Travelpayouts покажет доступные
                билеты прямо на этой странице.
              </p>
            </div>
            <TravelpayoutsResults />
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные направления</h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Откройте для себя самые вдохновляющие уголки планеты по лучшим ценам.
                </p>
              </div>
              <Link href="/blog" className="hidden md:flex items-center text-primary font-semibold hover:text-accent transition-colors mt-4 md:mt-0">
                Все статьи блога <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularDestinations.map((dest) => (
                <div key={dest.slug} className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
                  <DestinationCard destination={dest} />
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link href="/blog" className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors">
                Все статьи блога <ArrowRight className="w-5 h-5 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/50 border-y">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Почему выбирают нас</h2>
              <p className="text-muted-foreground text-lg">
                Мы делаем планирование путешествий простым, понятным и выгодным.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-sm border text-center group hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Надежные партнеры</h3>
                <p className="text-muted-foreground">
                  Мы ищем билеты только по проверенным агентствам и официальным сайтам авиакомпаний.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-sm border text-center group hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Молниеносный поиск</h3>
                <p className="text-muted-foreground">
                  Наш алгоритм обрабатывает тысячи вариантов за считанные секунды, выдавая лучшие результаты.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-sm border text-center group hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Без наценок</h3>
                <p className="text-muted-foreground">
                  Мы не берем комиссию за поиск. Вы видите финальную цену без скрытых платежей.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hot Offers Widget Area */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Специальные предложения</h2>
              <p className="text-muted-foreground">Успейте купить билеты по самым выгодным тарифами</p>
            </div>
            <TPWidget type="hotOffers" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
