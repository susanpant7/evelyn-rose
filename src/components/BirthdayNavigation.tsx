"use client";

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function BirthdayNavigation() {
    const { t } = useLanguage();

    return (
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4].map((age) => (
                <Link
                    key={age}
                    href={`/birthday/${age}`}
                    className="glass px-6 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition-all border border-white/10"
                >
                    {t('common.age')} {age}
                </Link>
            ))}
        </div>
    );
}
