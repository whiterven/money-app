'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BottomNavBar from '../components/BottomNavBar';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

export default function Contacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (isEnabled) {
      // Simulating fetching contacts
      const mockContacts: Contact[] = [
        { id: 1, name: 'Alice Johnson', phone: '123-456-7890' },
        { id: 2, name: 'Bob Smith', phone: '234-567-8901' },
        { id: 3, name: 'Charlie Brown', phone: '345-678-9012' },
      ];
      setContacts(mockContacts);
    } else {
      setContacts([]);
    }
  }, [isEnabled]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Contacts</h1>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={() => setIsEnabled(!isEnabled)}
            className="mr-2"
          />
          Enable contact list
        </label>
      </div>
      {isEnabled && (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <motion.li
              key={contact.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800 p-4 rounded"
            >
              <p className="font-bold">{contact.name}</p>
              <p className="text-sm text-gray-400">{contact.phone}</p>
            </motion.li>
          ))}
        </ul>
      )}
      <BottomNavBar />
    </div>
  );
}