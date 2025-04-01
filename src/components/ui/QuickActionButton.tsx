
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface QuickActionButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const QuickActionButton = ({
  icon: Icon,
  label,
  onClick,
  variant = 'primary',
  className,
}: QuickActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-2 p-3 rounded-lg transition-all duration-200",
        variant === 'primary' 
          ? "bg-onebanc-accent-cyan text-white hover:bg-onebanc-accent-cyan/90 dark:hover:bg-onebanc-accent-cyan/80" 
          : "bg-white text-onebanc-brand-blue border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700",
        className
      )}
    >
      <Icon size={24} />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
};

export default QuickActionButton;
