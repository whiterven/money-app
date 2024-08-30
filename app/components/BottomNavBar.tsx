'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, User, Clock, BookOpen } from 'lucide-react';

const navItems = [
  { icon: Home, path: '/dashboard' },
  { icon: User, path: '/profile' },
  { icon: Clock, path: '/history' },
  { icon: BookOpen, path: '/contacts' },
];

export default function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4">
      <ul className="flex justify-around">
        {navItems.map(({ icon: Icon, path }) => (
          <li key={path}>
            <Link href={path}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full ${
                  pathname === path ? 'bg-blue-500' : 'bg-gray-700'
                }`}
              >
                <Icon className="text-white" size={24} />
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}