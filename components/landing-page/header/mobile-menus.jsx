"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { menus } from "../data";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const MobileMenus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex items-center justify-center w-10 h-10 text-default-600 hover:text-primary transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={cn(
          "fixed top-0 right-0 h-screen w-[280px] bg-card z-[9999] transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-default-900">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-default-600 hover:text-primary transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-4">
            <ul className="space-y-4">
              {menus.map((item, index) => (
                <li key={`mobile-menu-${index}`}>
                  {item.child ? (
                    <div className="space-y-2">
                      <span className="text-lg font-medium text-default-900 block py-2">
                        {item.title}
                      </span>
                      <ul className="ml-4 space-y-2">
                        {item.child.map((childItem, childIndex) => (
                          <li key={`mobile-child-${childIndex}`}>
                            <Link
                              href={childItem.href}
                              onClick={toggleMenu}
                              className="block py-2 text-base text-default-600 hover:text-primary transition-colors"
                            >
                              {childItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className="block py-3 text-lg font-medium text-default-900 hover:text-primary transition-colors border-b border-default-200 last:border-b-0"
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenus;
