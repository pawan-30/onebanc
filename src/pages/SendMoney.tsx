
import React, { useState } from 'react';
import { ChevronLeft, Plus, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNavigation from '@/components/layout/BottomNavigation';
import ContactItem, { Contact } from '@/components/banking/ContactItem';
import TransferForm from '@/components/banking/TransferForm';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const mockContacts: Contact[] = [
  { id: '1', name: 'John Smith', phoneNumber: '+91 9876543210', isFrequent: true },
  { id: '2', name: 'Priya Sharma', phoneNumber: '+91 8765432109', isFrequent: true },
  { id: '3', name: 'Michael Brown', phoneNumber: '+91 7654321098', isFrequent: true },
  { id: '4', name: 'Emma Wilson', phoneNumber: '+91 6543210987', isFrequent: true },
  { id: '5', name: 'Alex Johnson', phoneNumber: '+91 5432109876' },
  { id: '6', name: 'Neha Patel', phoneNumber: '+91 4321098765' },
  { id: '7', name: 'Vikram Singh', phoneNumber: '+91 3210987654' },
  { id: '8', name: 'Sarah Williams', phoneNumber: '+91 2109876543' },
  { id: '9', name: 'Rahul Verma', phoneNumber: '+91 1098765432' },
  { id: '10', name: 'Jessica Miller', phoneNumber: '+91 0987654321' },
];

const SendMoney = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const navigate = useNavigate();

  const frequentContacts = mockContacts.filter(contact => contact.isFrequent);
  
  const filteredContacts = mockContacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (contact.phoneNumber && contact.phoneNumber.includes(searchTerm))
  );

  const handleTransferSubmit = (amount: number, note: string) => {
    if (!selectedContact) return;
    
    // In a real app, this would call an API to process the payment
    toast.success(`₹${amount} sent to ${selectedContact.name}${note ? ' for ' + note : ''}!`);
    
    // Navigate back to home after successful transaction
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="onebanc-container pb-20">
      <header className="py-6">
        <div className="flex items-center mb-4">
          <Link to="/" className="mr-3">
            <ChevronLeft size={24} className="text-onebanc-brand-blue" />
          </Link>
          <h1 className="text-xl font-bold text-onebanc-base-dark">Send Money</h1>
        </div>
      </header>

      {!selectedContact ? (
        <>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search by name or phone"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white"
            />
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-medium text-gray-600 mb-3">Frequent Contacts</h2>
            <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4">
              {frequentContacts.map(contact => (
                <ContactItem
                  key={contact.id}
                  contact={contact}
                  onSelect={setSelectedContact}
                />
              ))}
              <button className="flex flex-col items-center justify-center gap-2 px-2 py-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 text-onebanc-brand-blue">
                  <Plus size={24} />
                </div>
                <span className="text-xs font-medium">New</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md">
            <h2 className="text-sm font-medium text-gray-600 p-4 border-b">All Contacts</h2>
            <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
              {filteredContacts.length > 0 ? (
                filteredContacts.map(contact => (
                  <div 
                    key={contact.id}
                    className="flex items-center p-3 border-b border-gray-100 hover:bg-gray-50"
                    onClick={() => setSelectedContact(contact)}
                  >
                    <div className="w-10 h-10 rounded-full bg-onebanc-brand-blue flex items-center justify-center text-white font-medium mr-3">
                      {contact.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      {contact.phoneNumber && (
                        <p className="text-sm text-gray-500">{contact.phoneNumber}</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-6 text-center">
                  <p className="text-gray-500">No contacts found</p>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="onebanc-card">
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 rounded-full bg-onebanc-brand-blue flex items-center justify-center text-white font-bold text-xl mb-2">
              {selectedContact.name.substring(0, 2).toUpperCase()}
            </div>
            <h2 className="text-lg font-medium">{selectedContact.name}</h2>
            {selectedContact.phoneNumber && (
              <p className="text-sm text-gray-500">{selectedContact.phoneNumber}</p>
            )}
          </div>
          
          <TransferForm
            selectedContact={selectedContact}
            onTransferSubmit={handleTransferSubmit}
          />
        </div>
      )}
      
      <BottomNavigation />
    </div>
  );
};

export default SendMoney;
