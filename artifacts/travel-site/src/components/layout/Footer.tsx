import React from "react";
import { Link } from "wouter";
import { Plane, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:scale-105 transition-transform">
                <Plane className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">AviaSales Pro</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Ваш надежный помощник в поиске самых выгодных авиабилетов по всему миру. Путешествуйте чаще, платите меньше.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-base mb-4">Навигация</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Главная</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Блог</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base mb-4">Популярные направления</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/destinations/istanbul" className="hover:text-primary transition-colors">Билеты в Стамбул</Link></li>
              <li><Link href="/destinations/dubai" className="hover:text-primary transition-colors">Билеты в Дубай</Link></li>
              <li><Link href="/destinations/bangkok" className="hover:text-primary transition-colors">Билеты в Бангкок</Link></li>
              <li><Link href="/destinations/paris" className="hover:text-primary transition-colors">Билеты в Париж</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base mb-4">Правовая информация</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left max-w-2xl">
            Данный сайт является партнёром Travelpayouts. Мы можем получать комиссию за покупки, совершённые по ссылкам на сайте.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Сделано с</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>для путешественников &copy; {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
