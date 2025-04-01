
import React from 'react';
import { 
  User, 
  Bell, 
  Lock, 
  CreditCard, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  Shield,
  Languages,
  Smartphone,
  Contact,
  AtSign
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import BottomNavigation from '@/components/layout/BottomNavigation';

const Settings = () => {
  const settingSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Personal Information', hasArrow: true },
        { icon: AtSign, label: 'Email & Phone Number', hasArrow: true },
        { icon: CreditCard, label: 'Linked Accounts', hasArrow: true },
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: Bell, label: 'Notifications', hasToggle: true },
        { icon: Languages, label: 'Language', value: 'English', hasArrow: true },
        { icon: Smartphone, label: 'App Appearance', value: 'System', hasArrow: true },
      ]
    },
    {
      title: 'Security',
      items: [
        { icon: Lock, label: 'Privacy & Security', hasArrow: true },
        { icon: Shield, label: 'Two-Factor Authentication', hasToggle: true, toggled: true },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: HelpCircle, label: 'Help & Support', hasArrow: true },
        { icon: Contact, label: 'Contact Us', hasArrow: true },
      ]
    }
  ];

  const SettingItem = ({ item }: { item: any }) => (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center">
        <div className="bg-onebanc-accent-cyan/10 p-2 rounded-full">
          <item.icon className="h-5 w-5 text-onebanc-accent-cyan" />
        </div>
        <span className="ml-3 text-onebanc-base-dark">{item.label}</span>
      </div>
      <div className="flex items-center">
        {item.value && <span className="text-sm text-gray-500 mr-2">{item.value}</span>}
        {item.hasToggle && <Switch defaultChecked={item.toggled} />}
        {item.hasArrow && <ChevronRight className="h-5 w-5 text-gray-400" />}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="flex-1 p-4 pb-20">
        <h1 className="text-2xl font-bold text-onebanc-base-dark mb-6">Settings</h1>
        
        {/* User Profile Card */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex items-center">
              <div className="bg-onebanc-brand-blue text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                JD
              </div>
              <div className="ml-4">
                <h2 className="font-medium text-onebanc-base-dark">John Doe</h2>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
              <button className="ml-auto text-onebanc-accent-cyan font-medium">
                Edit
              </button>
            </div>
          </CardContent>
        </Card>
        
        {/* Settings Sections */}
        <div className="space-y-6">
          {settingSections.map((section, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h2 className="font-medium text-onebanc-brand-blue mb-2">{section.title}</h2>
                <div>
                  {section.items.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      <SettingItem item={item} />
                      {itemIndex < section.items.length - 1 && <Separator />}
                    </React.Fragment>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Logout Button */}
        <button className="mt-8 w-full py-3 flex items-center justify-center text-red-600 font-medium bg-white rounded-lg border border-red-200">
          <LogOut className="h-5 w-5 mr-2" />
          Sign Out
        </button>
        
        <p className="text-center text-xs text-gray-500 mt-6">
          OneBanc App v1.0.0
        </p>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default Settings;
