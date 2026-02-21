"use client";

import { useLanguage } from '@/context/LanguageContext';

export default function EmptyState() {
    const { t } = useLanguage();
    return (
        <div className="text-center py-32 text-zinc-500">
            <p className="text-lg">{t('gallery.noMemories')}</p>
        </div>
    );
}
