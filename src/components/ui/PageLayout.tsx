"use client";

import { useLanguage } from '@/context/LanguageContext';

interface PageLayoutProps {
    titleKey: string;
}

export default function PageLayout({ titleKey }: PageLayoutProps) {
    const { t } = useLanguage();

    return (
        <header className="py-20 px-6 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                {t(`${titleKey}.title`)} <span className="text-gradient">{t(`${titleKey}.highlight`)}</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
                {t(`${titleKey}.description`)}
            </p>
        </header>
    );
}