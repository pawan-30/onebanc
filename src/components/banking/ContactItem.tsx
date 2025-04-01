
import React from 'react';
import { cn } from '@/lib/utils';

export interface Contact {
  id: string;
  name: string;
  phoneNumber?: string;
  accountNumber?: string;
  avatarUrl?: string;
  isFrequent?: boolean;
}

interface ContactItemProps {
  contact: Contact;
  onSelect?: (contact: Contact) => void;
  selected?: boolean;
}

const ContactItem = ({ contact, onSelect, selected }: ContactItemProps) => {
  const { name, avatarUrl } = contact;
  
  // Get initials from name for avatar fallback
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <button
      className={cn(
        "flex flex-col items-center gap-2 px-2 py-3 transition-all duration-200",
        selected && "scale-110"
      )}
      onClick={() => onSelect?.(contact)}
    >
      <div className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center text-white font-medium bg-onebanc-brand-blue",
        selected && "ring-2 ring-onebanc-accent-cyan"
      )}>
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={name} 
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>
      <span className="text-xs font-medium truncate w-full text-center">{name}</span>
    </button>
  );
};

export default ContactItem;
