'use client';

import React from 'react';
import Image from 'next/image';
import { NavigationMenu, NavigationItem } from '../../domain/entities/Navigation';

interface HeaderProps {
  navigationMenu: NavigationMenu;
}

const Header: React.FC<HeaderProps> = ({ navigationMenu }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href={navigationMenu.logo.href} className="flex items-center">
              <div className="text-2xl font-bold text-pae-green">
                <span className="text-black">Fifi-adopt</span>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationMenu.items.map((item: NavigationItem) => (
              <div key={item.id} className="relative group">
                <a
                  href={item.href}
                  className={`text-sm font-medium text-black ${
                    item.id === 'adopcion' 
                      ? 'text-pae-green border-b-2 border-pae-green pb-1' 
                      : 'text-black'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="ml-1">▼</span>
                  )}
                </a>
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-pae-green">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;