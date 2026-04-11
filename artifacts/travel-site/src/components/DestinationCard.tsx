import React from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import { Destination } from "@/lib/data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Link href={`/destinations/${destination.slug}`} className="group block h-full">
      <div className="relative h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card flex flex-col">
        <div className="aspect-[4/3] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
            <span className="text-muted-foreground text-[10px]">от</span> {destination.priceFrom.toLocaleString("ru-RU")} ₽
          </div>
          
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-white text-xl font-bold mb-1">{destination.name}</h3>
            <div className="flex items-center text-white/90 text-sm">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              {destination.country}
            </div>
          </div>
        </div>
        
        <div className="p-5 flex-grow flex flex-col justify-between border-t border-border/50">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
            {destination.description}
          </p>
          <div className="flex items-center text-primary text-sm font-semibold group-hover:text-accent transition-colors">
            Найти билеты <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};
