import React from 'react';
import { 
  Cpu, 
  Map, 
  Satellite, 
  CloudRain, 
  Navigation, 
  Network, 
  Activity,
  Route
} from 'lucide-react';
import { CAPABILITIES } from '../data/landingData';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Map,
  Satellite,
  CloudRain,
  Navigation,
  Network,
  Activity,
  Route,
};

const capabilityMeta: Record<string, { tag: string; iconBg: string }> = {
  ai: { tag: 'Neural', iconBg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' },
  gis: { tag: 'Geospatial', iconBg: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white' },
  satellite: { tag: 'Copernicus', iconBg: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white' },
  weather: { tag: 'IMD Feeds', iconBg: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white' },
  gps: { tag: 'Telemetry', iconBg: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' },
  ml: { tag: 'Predictive', iconBg: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white' },
  accessibility: { tag: 'Isochrone', iconBg: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white' },
  routing: { tag: 'A* Pathing', iconBg: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' },
};

export function CapabilitiesSection() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left sm:text-center sm:mx-auto mb-12 sm:mb-16">
          <div className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-2.5">
            Integrated Data Architecture
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Intelligence Platform. Multiple Data Sources.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Transform fragmented regional terrain, telemetry, and weather feeds into unified logistics intelligence.
          </p>
        </div>

        {/* Symmetrical 8-Card Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {CAPABILITIES.map((item) => {
            const Icon = iconMap[item.iconName] || Cpu;
            const meta = capabilityMeta[item.id] || { tag: 'Core', iconBg: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' };

            return (
              <div
                key={item.id}
                className="ner-card p-6 bg-white flex flex-col justify-between hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-200 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 border border-slate-200/60 ${meta.iconBg}`}>
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-slate-500 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80">
                      {meta.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
