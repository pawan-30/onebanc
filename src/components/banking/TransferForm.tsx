
import React, { useState } from 'react';
import { Contact } from './ContactItem';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TransferFormProps {
  selectedContact: Contact | null;
  onTransferSubmit: (amount: number, note: string) => void;
}

const TransferForm = ({ selectedContact, onTransferSubmit }: TransferFormProps) => {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [transferMethod, setTransferMethod] = useState<'upi' | 'account'>('upi');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and a single decimal point
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;
    
    onTransferSubmit(parseFloat(amount), note);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in">
      <div className="space-y-2">
        <label className="text-sm text-gray-600">Transfer Method</label>
        <div className="flex gap-3">
          <button
            type="button"
            className={cn(
              "flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border transition-all",
              transferMethod === 'upi' 
                ? "border-onebanc-accent-cyan bg-onebanc-accent-cyan/5 text-onebanc-accent-cyan" 
                : "border-gray-200 text-gray-700"
            )}
            onClick={() => setTransferMethod('upi')}
          >
            <Wallet size={20} />
            <span>UPI</span>
          </button>
          <button
            type="button"
            className={cn(
              "flex-1 flex items-center justify-center gap-2 p-3 rounded-lg border transition-all",
              transferMethod === 'account' 
                ? "border-onebanc-accent-cyan bg-onebanc-accent-cyan/5 text-onebanc-accent-cyan" 
                : "border-gray-200 text-gray-700"
            )}
            onClick={() => setTransferMethod('account')}
          >
            <CreditCard size={20} />
            <span>Account</span>
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="amount" className="text-sm text-gray-600">Amount</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500">₹</span>
          </div>
          <Input
            id="amount"
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.00"
            className="pl-8 text-lg"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="note" className="text-sm text-gray-600">Add a note (optional)</label>
        <Input
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="What's this for?"
          maxLength={50}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-onebanc-accent-cyan hover:bg-onebanc-accent-cyan/90 text-white"
        disabled={!amount || parseFloat(amount) <= 0}
      >
        Send Money
      </Button>
    </form>
  );
};

export default TransferForm;
