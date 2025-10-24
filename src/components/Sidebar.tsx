import { useState } from 'react';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  ShoppingBag,
  DollarSign,
  Users,
  Headphones,
  FileText,
  Settings,
  Building2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from './ui/utils';

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  userRole: 'Admin' | 'Manager' | 'Staff';
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['Admin', 'Manager', 'Staff'] },
  { id: 'sales', label: 'Sales & CRM', icon: ShoppingCart, roles: ['Admin', 'Manager', 'Staff'] },
  { id: 'inventory', label: 'Inventory', icon: Package, roles: ['Admin', 'Manager', 'Staff'] },
  { id: 'procurement', label: 'Procurement', icon: ShoppingBag, roles: ['Admin', 'Manager'] },
  { id: 'finance', label: 'Finance', icon: DollarSign, roles: ['Admin', 'Manager'] },
  { id: 'hr', label: 'Human Resources', icon: Users, roles: ['Admin', 'Manager'] },
  { id: 'customer-service', label: 'Customer Service', icon: Headphones, roles: ['Admin', 'Manager', 'Staff'] },
  { id: 'reports', label: 'Reports', icon: FileText, roles: ['Admin', 'Manager'] },
  { id: 'settings', label: 'Settings', icon: Settings, roles: ['Admin'] },
];

export default function Sidebar({ currentPage, onPageChange, userRole }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const filteredMenuItems = menuItems.filter(item => item.roles.includes(userRole));

  return (
    <aside
      className={cn(
        'bg-white border-r border-gray-200 transition-all duration-300 flex flex-col',
        isCollapsed ? 'w-20' : 'w-64'
      )}
    >
      <div className="p-6 flex items-center justify-between border-b border-gray-200">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-sm">San Trading</h2>
              <p className="text-xs text-gray-500">IIS Dashboard</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mx-auto">
            <Building2 className="w-6 h-6 text-white" />
          </div>
        )}
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {filteredMenuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50',
                isCollapsed && 'justify-center px-2'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="text-sm">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 border-t border-gray-200 flex items-center justify-center hover:bg-gray-50"
      >
        {isCollapsed ? (
          <ChevronRight className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        )}
      </button>
    </aside>
  );
}
