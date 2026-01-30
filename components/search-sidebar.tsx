"use client";

import React, { useState } from 'react';
import { Search, Filter, History } from 'lucide-react';
import { bodyFront, bodyBack } from '@/lib/anatomy-data';
import { musclesDb } from '@/lib/muscles-db';

interface SearchSidebarProps {
    onMuscleSelect: (slug: string) => void;
}

export const SearchSidebar: React.FC<SearchSidebarProps> = ({ onMuscleSelect }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const allMuscles = Array.from(new Set([...bodyFront, ...bodyBack].map(m => m.slug)))
        .map(slug => ({
            slug,
            name: musclesDb[slug]?.name || slug.replace('-', ' ')
        }));

    const filteredMuscles = allMuscles.filter(m =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.slug.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col h-full bg-white dark:bg-slate-900">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
                    <input
                        type="text"
                        placeholder="Rechercher un muscle..."
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
                <section>
                    <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-slate-100 font-semibold px-2">
                        <Filter className="w-4 h-4" />
                        <h3 className="text-sm">Régions</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {['Tête', 'Torse', 'Bras', 'Jambes'].map(region => (
                            <button
                                key={region}
                                className="px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left"
                            >
                                {region}
                            </button>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-slate-100 font-semibold px-2">
                        <History className="w-4 h-4" />
                        <h3 className="text-sm">Récents</h3>
                    </div>
                    <div className="space-y-1">
                        {filteredMuscles.map(muscle => (
                            <button
                                key={muscle.slug}
                                onClick={() => onMuscleSelect(muscle.slug)}
                                className="w-full px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors text-left truncate capitalize"
                            >
                                {muscle.name}
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
