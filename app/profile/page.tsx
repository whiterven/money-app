'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import BottomNavBar from '../components/BottomNavBar';
import { useTheme } from '../context/ThemeContext';

export default function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    age: '30',
    email: 'john@example.com',
    phone: '123-456-7890',
    username: 'johndoe',
    password: '********',
  });

  const [editMode, setEditMode] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEditMode(false);
    // Here you would typically send the updated user data to your backend
    console.log('Updated user:', user);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(user).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <label htmlFor={key} className="mb-1 capitalize">{key}</label>
            <input
              type={key === 'password' ? 'password' : 'text'}
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              disabled={!editMode}
              className="bg-gray-100 dark:bg-gray-800 p-2 rounded"
            />
          </div>
        ))}
        {editMode ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Save Changes
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setEditMode(true)}
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Edit Profile
          </motion.button>
        )}
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Theme Settings</h2>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
          className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>
      <BottomNavBar />
    </div>
  );
}