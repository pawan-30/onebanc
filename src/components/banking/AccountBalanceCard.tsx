
import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface AccountBalanceCardProps {
  accountNumber: string;
  balance: number;
  currencySymbol?: string;
}

const AccountBalanceCard = ({
  accountNumber,
  balance,
  currencySymbol = '₹',
}: AccountBalanceCardProps) => {
  const [hideBalance, setHideBalance] = React.useState(false);
  
  const formattedAccountNumber = accountNumber.replace(/(\d{4})/g, '$1 ').trim();
  const formattedBalance = new Intl.NumberFormat('en-IN').format(balance);

  const toggleBalanceVisibility = () => {
    setHideBalance(!hideBalance);
  };

  return (
    <div className="onebanc-balance-card mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-white/70">Available Balance</p>
          <div className="flex items-center gap-2 mt-1">
            <h2 className="text-2xl font-bold">
              {hideBalance ? '••••••' : `${currencySymbol}${formattedBalance}`}
            </h2>
            <button 
              onClick={toggleBalanceVisibility}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20"
            >
              {hideBalance ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
        </div>
        <div className="bg-white/10 px-3 py-1 rounded-full">
          <span className="text-xs font-medium">Savings</span>
        </div>
      </div>
      <div className="mt-auto">
        <p className="text-xs text-white/70">Account Number</p>
        <p className="text-sm font-medium">{formattedAccountNumber}</p>
      </div>
    </div>
  );
};

export default AccountBalanceCard;
