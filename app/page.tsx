"use client";

import React, { useState } from 'react';
import { MultiPanelLayout } from '@/components/multi-panel-layout';
import { MuscleViewer } from '@/components/muscle-viewer';
import { MuscleDetails } from '@/components/muscle-details';
import { SearchSidebar } from '@/components/search-sidebar';

export default function Home() {
  const [selectedMuscle, setSelectedMuscle] = useState<string | undefined>();
  const [view, setView] = useState<'front' | 'back'>('front');

  return (
    <MultiPanelLayout
      left={<SearchSidebar onMuscleSelect={setSelectedMuscle} />}
      center={
        <div className="flex flex-col items-center gap-8 w-full">
          <div className="flex bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm self-center">
            <button
              onClick={() => setView('front')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${view === 'front' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
            >
              Face
            </button>
            <button
              onClick={() => setView('back')}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${view === 'back' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
            >
              Dos
            </button>
          </div>
          <MuscleViewer
            onMuscleSelect={setSelectedMuscle}
            selectedMuscle={selectedMuscle}
            view={view}
          />
        </div>
      }
      right={<MuscleDetails slug={selectedMuscle} />}
    />
  );
}
