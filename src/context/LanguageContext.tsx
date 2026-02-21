"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '@/config/translations';

type Language = 'en' | 'np';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('np');

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'np' : 'en'));
    };

    // Translation helper function
    const t = (path: string) => {
        const keys = path.split('.');
        let current: any = translations;
        for (const key of keys) {
            if (current[key] === undefined) return path;
            current = current[key];
        }
        return current[language] || current['en'] || path;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

