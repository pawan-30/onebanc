
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, Send, Award, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: BarChart2, label: 'Transactions', path: '/transactions' },
    { icon: Send, label: 'Send', path: '/send' },
    { icon: Award, label: 'Rewards', path: '/rewards' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 rounded-t-xl border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 w-full",
                isActive ? "text-onebanc-accent-cyan" : "text-gray-500 dark:text-gray-400"
              )}
            >
              <item.icon
                size={24}
                className={cn(
                  "mb-1",
                  isActive && "animate-pulse-light"
                )}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
