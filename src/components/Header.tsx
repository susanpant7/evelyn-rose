"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Languages } from 'lucide-react';
import { navigationLinks } from '@/config/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { language, toggleLanguage, t } = useLanguage();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <nav className="glass fixed top-0 w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-300">
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity font-outfit z-50 mr-4"
                    onClick={() => setIsOpen(false)}
                >
                    {t('common.brand')}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-1 items-center">
                    {navigationLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        const labelKey = `nav.${link.label.toLowerCase()}`;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                                        ? 'bg-white/10 text-white shadow-sm'
                                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <Icon size={18} className={isActive ? 'text-blue-400' : ''} />
                                <span className="text-sm font-medium">{t(labelKey)}</span>
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-4">
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-xs font-bold uppercase tracking-wider text-zinc-400 hover:text-white"
                    >
                        <Languages size={14} className="text-blue-400" />
                        <span>{language === 'en' ? 'NP' : 'EN'}</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 p-2 text-zinc-400 hover:text-white transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl" onClick={() => setIsOpen(false)} />

                <div
                    className={`absolute inset-y-0 right-0 w-full max-w-sm bg-zinc-900/50 border-l border-white/10 p-12 flex flex-col pt-32 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col gap-6">
                        {navigationLinks.map((link, index) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            const labelKey = `nav.${link.label.toLowerCase()}`;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-4 text-2xl font-bold transition-all duration-300 ${isActive ? 'text-white translate-x-2' : 'text-zinc-500 hover:text-white'
                                        }`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Icon size={24} className={isActive ? 'text-blue-400' : ''} />
                                    <span>{t(labelKey)}</span>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-auto pt-12 text-zinc-600 text-sm">
                        <p>&copy; {new Date().getFullYear()} {t('common.brand')}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
