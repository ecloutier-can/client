"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { musclesDb, MuscleData as LocalMuscleData } from '@/lib/muscles-db';

interface ServerMuscleData {
    name_fr: string;
    name_latin: string;
    region: string;
    origin: string;
    insertion: string;
    function: string;
    description?: string;
    analogy?: string;
    pathology?: string;
    exercises?: string[];
}

interface MuscleDetailsProps {
    slug?: string;
}

export const MuscleDetails: React.FC<MuscleDetailsProps> = ({ slug }) => {
    const localData = slug ? musclesDb[slug] : null;

    const { data: serverData, isLoading } = useQuery<ServerMuscleData>({
        queryKey: ['muscle', slug],
        queryFn: async () => {
            if (!slug) return null;
            try {
                const response = await axios.get(`http://localhost:3001/api/muscles/${slug}/enhanced`);
                return response.data;
            } catch (e) {
                console.log("Offline or server down, using local data only");
                return null;
            }
        },
        enabled: !!slug,
        retry: false,
    });

    if (!slug) {
        return (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400 dark:text-slate-600">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-4 text-4xl"
                >
                    💪
                </motion.div>
                <p className="text-lg font-medium text-slate-900 dark:text-slate-100">Sélectionnez un muscle</p>
                <p className="text-sm">Cliquez sur la carte interactive pour voir les détails.</p>
            </div>
        );
    }

    const name = serverData?.name_fr || localData?.name || slug.replace('-', ' ');
    const latinName = serverData?.name_latin || localData?.latin_name || `Musculus ${slug.replace('-', ' ')}`;
    const description = serverData?.description || localData?.description;
    const muscleFunction = serverData?.function || localData?.function;
    const exercises = serverData?.exercises || localData?.exercises || [];
    const antagonist = localData?.antagonist;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            key={slug}
            className="p-6 space-y-8"
        >
            <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 capitalize mb-1">
                    {name}
                </h2>
                <p className="text-slate-500 dark:text-slate-400 italic text-sm">Terminologie latine: {latinName}</p>
            </div>

            <div className="space-y-6">
                {description && (
                    <section>
                        <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Description</h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                            {description}
                        </p>
                    </section>
                )}

                <section>
                    <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Fonction</h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                        {muscleFunction || "Information non disponible."}
                    </p>
                </section>

                {antagonist && (
                    <section>
                        <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Antagoniste</h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                            {antagonist}
                        </p>
                    </section>
                )}

                {serverData?.analogy && (
                    <section className="bg-blue-50/50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/20">
                        <h3 className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tight mb-1 flex items-center gap-1">
                            💡 Analogie Pédagogique
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 text-sm italic">
                            "{serverData.analogy}"
                        </p>
                    </section>
                )}

                {(serverData?.origin || serverData?.insertion) && (
                    <section className="grid grid-cols-2 gap-4">
                        <div>
                            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Origine</h3>
                            <p className="text-slate-700 dark:text-slate-300 text-xs">{serverData?.origin || "..."}</p>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Insertion</h3>
                            <p className="text-slate-700 dark:text-slate-300 text-xs">{serverData?.insertion || "..."}</p>
                        </div>
                    </section>
                )}

                {exercises.length > 0 && (
                    <section>
                        <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Exercices Suggérés</h3>
                        <div className="flex flex-wrap gap-2">
                            {exercises.map(ex => (
                                <span key={ex} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-[10px] font-medium border border-slate-200 dark:border-slate-700">
                                    {ex}
                                </span>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {isLoading && !localData && (
                <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-20 w-full" />
                </div>
            )}
        </motion.div>
    );
};
