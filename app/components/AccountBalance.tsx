// app/components/AccountBalance.tsx
'use client';

import { useState, useEffect } from 'react';

export default function AccountBalance() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Simulating balance fetch
    setBalance(1000);
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white mb-2">Account Balance</h2>
      <p className="text-4xl font-bold text-white">${balance.toFixed(2)}</p>
    </div>
  );
}
