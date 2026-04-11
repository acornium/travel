import React, { useEffect } from "react";
import { Plane, Calendar as CalendarIcon, Tag } from "lucide-react";

interface TPWidgetProps {
  type: "search" | "calendar" | "hotOffers";
  config?: Record<string, any>;
  className?: string;
}

export const TPWidget = ({ type, config, className = "" }: TPWidgetProps) => {
  // В реальном приложении здесь будет загрузка скрипта Travelpayouts
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = `//www.travelpayouts.com/widgets/v1/${type}_widget.js`;
  //   script.async = true;
  //   // добавление конфигурации
  //   document.getElementById(`tp-widget-${type}`)?.appendChild(script);
  // }, [type, config]);

  const getWidgetInfo = () => {
    switch (type) {
      case "search":
        return {
          icon: <Plane className="w-8 h-8 mb-3 text-primary opacity-80" />,
          title: "Форма поиска авиабилетов",
          desc: "Здесь будет отображаться виджет поиска Travelpayouts"
        };
      case "calendar":
        return {
          icon: <CalendarIcon className="w-8 h-8 mb-3 text-primary opacity-80" />,
          title: "Календарь низких цен",
          desc: "Здесь будет отображаться календарь цен Travelpayouts"
        };
      case "hotOffers":
        return {
          icon: <Tag className="w-8 h-8 mb-3 text-accent opacity-80" />,
          title: "Горящие билеты",
          desc: "Здесь будут отображаться горящие предложения"
        };
    }
  };

  const info = getWidgetInfo();

  return (
    <div 
      className={`w-full bg-card rounded-2xl shadow-sm border overflow-hidden ${className}`}
      id={`tp-widget-${type}`}
    >
      {/* ВСТАВИТЬ КОД TRAVELPAYOUTS WHITE LABEL WIDGET ЗДЕСЬ */}
      <div className="w-full min-h-[200px] border-2 border-dashed border-primary/20 bg-primary/5 rounded-xl m-4 p-8 flex flex-col items-center justify-center text-center max-w-[calc(100%-2rem)]">
        <div className="bg-background p-4 rounded-full shadow-sm mb-4">
          {info.icon}
        </div>
        <h3 className="font-semibold text-lg mb-2 text-foreground">{info.title}</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          {info.desc}
          <br/>
          <span className="text-xs opacity-70 mt-2 block">(Заглушка для интеграции партнерской программы)</span>
        </p>
      </div>
    </div>
  );
};
