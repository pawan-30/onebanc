
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle = ({ className }: DarkModeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn(
        "rounded-full transition-all duration-200",
        theme === 'dark' ? "text-yellow-200" : "text-onebanc-base-dark",
        className
      )}
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

export default DarkModeToggle;
