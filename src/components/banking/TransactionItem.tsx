
import React from 'react';
import { ArrowDown, ArrowUp, CreditCard, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

export type TransactionType = 'credit' | 'debit' | 'card' | 'transfer';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  description: string;
  recipient?: string;
  date: string;
  category?: string;
  status?: 'completed' | 'pending' | 'failed';
}

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const {
    type,
    amount,
    description,
    recipient,
    date,
    status = 'completed',
  } = transaction;

  const getIcon = () => {
    switch (type) {
      case 'credit':
        return <ArrowDown className="text-green-500" />;
      case 'debit':
        return <ArrowUp className="text-red-500" />;
      case 'card':
        return <CreditCard className="text-onebanc-brand-blue" />;
      case 'transfer':
        return <Wallet className="text-onebanc-accent-cyan" />;
      default:
        return <ArrowUp className="text-red-500" />;
    }
  };

  const isCredit = type === 'credit';
  const amountDisplay = `${isCredit ? '+' : '-'} ₹${amount.toLocaleString('en-IN')}`;

  return (
    <div className="flex items-center gap-3 p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <div className="rounded-full bg-gray-100 p-2 flex-shrink-0">
        {getIcon()}
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm truncate">{description}</p>
        {recipient && (
          <p className="text-xs text-gray-500 truncate">{recipient}</p>
        )}
        <p className="text-xs text-gray-400">{date}</p>
      </div>
      
      <div className="text-right flex-shrink-0">
        <p className={cn(
          "font-medium",
          isCredit ? "text-green-600" : "text-gray-800"
        )}>
          {amountDisplay}
        </p>
        <span className={cn(
          "text-xs px-2 py-0.5 rounded-full inline-block mt-1",
          status === 'completed' ? "bg-green-100 text-green-700" : 
          status === 'pending' ? "bg-yellow-100 text-yellow-700" : 
          "bg-red-100 text-red-700"
        )}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default TransactionItem;
