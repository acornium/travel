import React from "react";
import { Link } from "wouter";
import { Plane, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:scale-105 transition-transform">
            <Plane className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight">AviaSales Pro</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <div className="relative group cursor-pointer">
            <span className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              Направления
            </span>
            <div className="absolute top-full left-0 pt-2 w-48 hidden group-hover:block">
              <div className="bg-card border rounded-lg shadow-lg overflow-hidden py-1">
                <Link href="/destinations/moscow" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">Москва</Link>
                <Link href="/destinations/istanbul" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">Стамбул</Link>
                <Link href="/destinations/dubai" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">Дубай</Link>
                <Link href="/destinations/bangkok" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">Бангкок</Link>
                <Link href="/destinations/paris" className="block px-4 py-2 text-sm hover:bg-muted transition-colors">Париж</Link>
              </div>
            </div>
          </div>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Блог
          </Link>
          <Button variant="default" className="ml-4 font-medium rounded-full shadow-sm hover:shadow-md transition-all">
            Найти билеты
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-foreground/80 hover:text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background absolute top-16 left-0 w-full shadow-lg p-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-muted rounded-md transition-colors">
              Главная
            </Link>
            <div className="space-y-2 p-2">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Направления</div>
              <div className="grid grid-cols-2 gap-2 pl-2">
                <Link href="/destinations/moscow" onClick={() => setIsMobileMenuOpen(false)} className="text-base hover:text-primary">Москва</Link>
                <Link href="/destinations/istanbul" onClick={() => setIsMobileMenuOpen(false)} className="text-base hover:text-primary">Стамбул</Link>
                <Link href="/destinations/dubai" onClick={() => setIsMobileMenuOpen(false)} className="text-base hover:text-primary">Дубай</Link>
                <Link href="/destinations/bangkok" onClick={() => setIsMobileMenuOpen(false)} className="text-base hover:text-primary">Бангкок</Link>
                <Link href="/destinations/paris" onClick={() => setIsMobileMenuOpen(false)} className="text-base hover:text-primary">Париж</Link>
              </div>
            </div>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-muted rounded-md transition-colors">
              Блог
            </Link>
            <Button className="w-full mt-4 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
              Найти билеты
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
