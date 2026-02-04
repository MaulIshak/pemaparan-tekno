import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = [
        { name: 'Definisi', href: '#definisi' },
        { name: 'Tupoksi', href: '#tupoksi' },
        { name: 'Pergerakan', href: '#pergerakan' },
        { name: 'Struktur', href: '#struktur' },
        { name: 'Dokumentasi', href: '#dokumentasi' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-tekno-black/80 backdrop-blur-md border-b border-tekno-slate/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo - Left Side */}
                        <div className="flex-shrink-0 hidden md:flex items-center gap-3">
                            <div className="w-10 h-10 relative group">
                                <img src="/tekno.png" alt="Logo Unit Teknologi" className="w-full h-full object-contain" />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-lg font-bold leading-none">
                                    <span className="text-tekno-white">UNIT </span>
                                    <span className="text-tekno-primary">TEKNOLOGI</span>
                                </h1>
                            </div>
                        </div>

                        {/* Navigation - Right Side (Desktop) */}
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-tekno-white hover:text-tekno-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button - Right Side (Hamburger) */}
                        <div className="-mr-2 flex md:hidden ml-auto">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-tekno-white hover:text-tekno-primary hover:bg-tekno-slate/20 focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Sidebar - Moved outside of nav to avoid backdrop-filter stacking context issues */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[90] md:hidden backdrop-blur-sm"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-64 bg-tekno-black border-l border-tekno-slate/20 z-[100] md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex items-center justify-between p-4 border-b border-tekno-slate/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 flex items-center justify-center">
                                            <img src="/tekno.png" alt="Logo" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <h1 className="text-sm font-bold leading-none">
                                                <span className="text-tekno-white">UNIT </span>
                                                <span className="text-tekno-primary">TEKNOLOGI</span>
                                            </h1>
                                        </div>
                                    </div>
                                    <button
                                        onClick={toggleMenu}
                                        className="p-2 rounded-md text-tekno-white hover:text-tekno-primary hover:bg-tekno-slate/20 focus:outline-none"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>
                                <div className="px-2 py-4 space-y-1 overflow-y-auto">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-tekno-white hover:text-tekno-primary hover:bg-tekno-slate/10 block px-4 py-3 rounded-lg text-base font-medium transition-colors border-b border-white/5 last:border-0"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="mt-auto p-4 border-t border-tekno-slate/10 text-center">
                                    <span className="text-sm font-bold tracking-widest text-tekno-slate uppercase">Menu</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
