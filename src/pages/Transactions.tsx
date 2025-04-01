
import React, { useState } from 'react';
import { ChevronLeft, Search, Filter, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@/components/layout/BottomNavigation';
import TransactionItem, { Transaction, TransactionType } from '@/components/banking/TransactionItem';
import { Input } from '@/components/ui/input';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'credit',
    amount: 25000,
    description: 'Salary from Acme Inc',
    date: 'Jul 22, 10:45 AM',
    status: 'completed',
  },
  {
    id: '2',
    type: 'debit',
    amount: 1299,
    description: 'Amazon.in',
    recipient: 'Shopping',
    date: 'Jul 21, 6:30 PM',
    status: 'completed',
  },
  {
    id: '3',
    type: 'card',
    amount: 450,
    description: 'Starbucks Coffee',
    recipient: 'Food & Dining',
    date: 'Jul 20, 3:15 PM',
    status: 'completed',
  },
  {
    id: '4',
    type: 'debit',
    amount: 5400,
    description: 'Rent Payment',
    recipient: 'John Smith',
    date: 'Jul 15, 9:00 AM',
    status: 'completed',
  },
  {
    id: '5',
    type: 'credit',
    amount: 3500,
    description: 'Refund from XYZ Store',
    date: 'Jul 14, 2:10 PM',
    status: 'completed',
  },
  {
    id: '6',
    type: 'transfer',
    amount: 1000,
    description: 'Transfer to Savings',
    date: 'Jul 12, 11:30 AM',
    status: 'completed',
  },
  {
    id: '7',
    type: 'debit',
    amount: 699,
    description: 'Netflix Subscription',
    recipient: 'Entertainment',
    date: 'Jul 10, 7:45 AM',
    status: 'completed',
  },
  {
    id: '8',
    type: 'debit',
    amount: 3200,
    description: 'Electric Bill',
    recipient: 'Utilities',
    date: 'Jul 5, 4:20 PM',
    status: 'completed',
  },
];

const groupTransactionsByDate = (transactions: Transaction[]) => {
  const groups: { [date: string]: Transaction[] } = {};
  
  transactions.forEach(transaction => {
    const datePart = transaction.date.split(',')[0];
    if (!groups[datePart]) {
      groups[datePart] = [];
    }
    groups[datePart].push(transaction);
  });
  
  return groups;
};

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<TransactionType | 'all'>('all');
  
  const filteredTransactions = mockTransactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (transaction.recipient?.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterType === 'all' || transaction.type === filterType;
    
    return matchesSearch && matchesFilter;
  });
  
  const groupedTransactions = groupTransactionsByDate(filteredTransactions);
  
  return (
    <div className="onebanc-container pb-20">
      <header className="sticky top-0 bg-onebanc-base-light z-10 pt-6 pb-3">
        <div className="flex items-center mb-4">
          <Link to="/" className="mr-3">
            <ChevronLeft size={24} className="text-onebanc-brand-blue" />
          </Link>
          <h1 className="text-xl font-bold text-onebanc-base-dark">Transaction History</h1>
        </div>
        
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search transactions"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          <button
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap ${
              filterType === 'all' 
                ? 'bg-onebanc-brand-blue text-white' 
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
            onClick={() => setFilterType('all')}
          >
            All
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap flex items-center gap-1 ${
              filterType === 'credit' 
                ? 'bg-onebanc-brand-blue text-white' 
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
            onClick={() => setFilterType('credit')}
          >
            Income
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap flex items-center gap-1 ${
              filterType === 'debit' 
                ? 'bg-onebanc-brand-blue text-white' 
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
            onClick={() => setFilterType('debit')}
          >
            Expenses
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap flex items-center gap-1 ${
              filterType === 'card' 
                ? 'bg-onebanc-brand-blue text-white' 
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
            onClick={() => setFilterType('card')}
          >
            Card
          </button>
          <button
            className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap flex items-center gap-1 ${
              filterType === 'transfer' 
                ? 'bg-onebanc-brand-blue text-white' 
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
            onClick={() => setFilterType('transfer')}
          >
            Transfers
          </button>
          <button
            className="px-3 py-1.5 rounded-full text-sm whitespace-nowrap flex items-center gap-1 bg-white text-gray-600 border border-gray-200"
          >
            <Calendar size={14} /> Date
          </button>
        </div>
      </header>
      
      <div className="bg-white rounded-xl shadow-md">
        {Object.keys(groupedTransactions).length > 0 ? (
          Object.entries(groupedTransactions).map(([date, transactions]) => (
            <div key={date}>
              <div className="px-4 py-2 bg-gray-50 border-t border-b border-gray-100">
                <h3 className="text-sm font-medium text-gray-600">{date}</h3>
              </div>
              {transactions.map(transaction => (
                <TransactionItem key={transaction.id} transaction={transaction} />
              ))}
            </div>
          ))
        ) : (
          <div className="py-10 text-center">
            <p className="text-gray-500">No transactions found</p>
            <p className="text-sm text-gray-400 mt-1">Try a different search or filter</p>
          </div>
        )}
      </div>
      
      <BottomNavigation />
    </div>
  );
};

export default Transactions;
