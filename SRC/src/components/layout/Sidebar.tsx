import {
  LayoutDashboard,
  MapPin,
  Map,
  Navigation,
  Truck,
  AlertOctagon,
  CloudRain,
  Activity
} from 'lucide-react';

export type NavTab =
  | 'dashboard'
  | 'live-feed'
  | 'districts'
  | 'gis-map'
  | 'routes'
  | 'fleets'
  | 'incidents'
  | 'weather';

interface SidebarProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isCollapsed
}) => {
  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'dashboard',
      label: 'Logistics Dashboard',
      icon: <LayoutDashboard className="w-4 h-4" />
    },
    {
      id: 'live-feed',
      label: 'Live Telemetry Feed',
      icon: <Activity className="w-4 h-4 text-emerald-400" />,
      badge: 'LIVE'
    },
    {
      id: 'districts',
      label: 'District Intelligence',
      icon: <MapPin className="w-4 h-4" />,
      badge: '11 NER'
    },
    {
      id: 'gis-map',
      label: 'GIS Operations Map',
      icon: <Map className="w-4 h-4" />,
      badge: 'Live'
    },
    {
      id: 'routes',
      label: 'AI Route Optimizer',
      icon: <Navigation className="w-4 h-4" />
    },
    {
      id: 'fleets',
      label: 'Vehicle Fleet Tracking',
      icon: <Truck className="w-4 h-4" />,
      badge: '142'
    },
    {
      id: 'incidents',
      label: 'Hazard & Blockages',
      icon: <AlertOctagon className="w-4 h-4" />,
      badge: '4 Alert'
    },
    {
      id: 'weather',
      label: 'Mountain Weather Radar',
      icon: <CloudRain className="w-4 h-4" />
    }
  ];

  return (
    <aside
      className={`hidden md:flex flex-col shrink-0 bg-[#090d16] border-r border-[#161e2e] transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'
        } h-[calc(100vh-4rem)] sticky top-16 p-3.5 justify-between select-none z-20`}
    >
      <div className="space-y-5">
        {/* Section Title */}
        {!isCollapsed && (
          <div className="px-3 pt-1">
            <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
              Command Modules
            </p>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                title={isCollapsed ? item.label : undefined}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition-all duration-150 group ${isActive
                    ? 'bg-[#121926] text-cyan-300 font-semibold border-l-2 border-l-cyan-400 border-t border-r border-b border-[#1f2c42] shadow-sm'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-[#0e1420] border-l-2 border-transparent'
                  }`}
              >
                <div
                  className={`transition-colors ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-cyan-300'
                    }`}
                >
                  {item.icon}
                </div>

                {!isCollapsed && (
                  <div className="flex-1 flex items-center justify-between text-left font-mono">
                    <span className="truncate">{item.label}</span>
                    {item.badge && (
                      <span
                        className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${isActive
                            ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                            : 'bg-[#121824] text-slate-400 border border-[#1e2738]'
                          }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </nav>
      </div>

    </aside>
  );
};
