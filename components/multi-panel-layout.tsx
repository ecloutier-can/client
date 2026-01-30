"use client";

import React from 'react';
import { ThemeToggle } from './theme-toggle';

interface MultiPanelLayoutProps {
    left: React.ReactNode;
    center: React.ReactNode;
    right: React.ReactNode;
}

export const MultiPanelLayout: React.FC<MultiPanelLayoutProps> = ({ left, center, right }) => {
    return (
        <div className="flex flex-col h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden">
            <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-10 shrink-0">
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                    BioAnatomy Trainer
                </h1>
                <ThemeToggle />
            </header>

            <main className="flex flex-1 overflow-hidden">
                {/* Sidebar Left: Search & Filter */}
                <aside className="w-80 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 overflow-y-auto hidden md:flex shrink-0">
                    {left}
                </aside>

                {/* Central Panel: SVG Body */}
                <section className="flex-1 relative overflow-auto bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
                    <div className="max-w-4xl w-full">
                        {center}
                    </div>
                </section>

                {/* Sidebar Right: Muscle Details */}
                <aside className="w-96 flex flex-col bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 overflow-y-auto hidden lg:flex shrink-0">
                    {right}
                </aside>
            </main>
        </div>
    );
};
