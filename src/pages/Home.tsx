
import React from 'react';
import { Send, CreditCard, Wallet, Plus, Bell } from 'lucide-react';
import BottomNavigation from '@/components/layout/BottomNavigation';
import AccountBalanceCard from '@/components/banking/AccountBalanceCard';
import QuickActionButton from '@/components/ui/QuickActionButton';
import RecentTransactions from '@/components/banking/RecentTransactions';
import { Transaction } from '@/components/banking/TransactionItem';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'credit',
    amount: 25000,
    description: 'Salary from Acme Inc',
    date: 'Today, 10:45 AM',
    status: 'completed',
  },
  {
    id: '2',
    type: 'debit',
    amount: 1299,
    description: 'Amazon.in',
    recipient: 'Shopping',
    date: 'Yesterday, 6:30 PM',
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
  }
];

const Home = () => {
  const handleQuickAction = (action: string) => {
    toast.info(`${action} feature coming soon!`);
  };

  return (
    <div className="onebanc-container pb-20">
      <header className="py-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-onebanc-base-dark">OneBanc</h1>
          <p className="text-sm text-gray-500">Welcome back, Alex</p>
        </div>
        <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors relative">
          <Bell size={24} className="text-onebanc-brand-blue" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </header>

      <AccountBalanceCard 
        accountNumber="1234567890123456"
        balance={124500.75}
      />
      
      <div className="grid grid-cols-4 gap-3 mb-6">
        <Link to="/send">
          <QuickActionButton 
            icon={Send} 
            label="Send" 
            variant="primary"
          />
        </Link>
        <QuickActionButton 
          icon={Wallet} 
          label="Request" 
          variant="secondary"
          onClick={() => handleQuickAction("Request Money")}
        />
        <QuickActionButton 
          icon={CreditCard} 
          label="Cards" 
          variant="secondary"
          onClick={() => handleQuickAction("Cards")}
        />
        <QuickActionButton 
          icon={Plus} 
          label="More" 
          variant="secondary"
          onClick={() => handleQuickAction("More Actions")}
        />
      </div>
      
      <RecentTransactions transactions={mockTransactions} />
      
      <BottomNavigation />
    </div>
  );
};

export default Home;
