
import React from 'react';
import TransactionItem, { Transaction } from './TransactionItem';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  return (
    <div className="onebanc-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-onebanc-base-dark">Recent Transactions</h3>
        <Link 
          to="/transactions" 
          className="text-onebanc-accent-cyan text-sm flex items-center gap-1 hover:underline"
        >
          View All <ArrowRight size={14} />
        </Link>
      </div>
      <div className="space-y-1">
        {transactions.length > 0 ? (
          transactions.map(transaction => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">No recent transactions</p>
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
