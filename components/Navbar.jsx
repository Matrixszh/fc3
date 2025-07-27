"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { title: "Home", href: "/home" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-wrapper relative">
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex justify-center items-center space-x-8 py-4 px-6 bg-card/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        {navigationItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-base font-medium text-default-600 hover:text-primary transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 right-4 z-[9999] flex items-center justify-center w-12 h-12 bg-card rounded-full shadow-lg text-default-600 hover:text-primary transition-colors"
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9997] lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Navigation Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-card z-[9998] transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-default-900">Crossfire</h2>
            <button
              onClick={toggleMobileMenu}
              className="text-default-600 hover:text-primary transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 px-6 py-4">
            <ul className="space-y-4">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className="block py-3 text-lg font-medium text-default-900 hover:text-primary transition-colors border-b border-default-200 last:border-b-0"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Page Content */}
      <div className={`${isMobileMenuOpen ? 'lg:pt-16' : 'lg:pt-16'}`}>
        {children}
      </div>
    </div>
  );
};

export default Navbar;
