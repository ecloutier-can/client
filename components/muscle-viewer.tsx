"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bodyFront, bodyBack, BodyPart } from '@/lib/anatomy-data';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from 'next-themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface MuscleViewerProps {
    onMuscleSelect: (slug: string) => void;
    selectedMuscle?: string;
    view?: 'front' | 'back';
}

export const MuscleViewer: React.FC<MuscleViewerProps> = ({
    onMuscleSelect,
    selectedMuscle,
    view = 'front'
}) => {
    const { theme } = useTheme();
    const parts = view === 'front' ? bodyFront : bodyBack;
    const [hoveredPart, setHoveredPart] = useState<string | null>(null);

    const getBaseColor = (color: string) => {
        if (theme === 'dark') {
            return color === '#3f3f3f' ? '#1e293b' : color;
        }
        return color;
    };

    const renderPath = (part: BodyPart, side: 'left' | 'right' | 'common') => {
        const paths = part.path[side];
        if (!paths) return null;

        const isSelected = selectedMuscle === part.slug;
        const isHovered = hoveredPart === part.slug;
        const baseColor = getBaseColor(part.color);

        return paths.map((d, i) => (
            <motion.path
                key={`${part.slug}-${side}-${i}`}
                d={d}
                fill={isSelected ? "#3b82f6" : isHovered ? "#60a5fa" : baseColor}
                stroke={theme === 'dark' ? "#334155" : "#ffffff"}
                strokeWidth="0.5"
                initial={{ fill: baseColor }}
                animate={{
                    fill: isSelected ? "#3b82f6" : isHovered ? "#60a5fa" : baseColor,
                    scale: isHovered || isSelected ? 1.01 : 1,
                    filter: isHovered || isSelected ? "drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))" : "none"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="cursor-pointer transition-colors duration-200"
                onMouseEnter={() => setHoveredPart(part.slug)}
                onMouseLeave={() => setHoveredPart(null)}
                onClick={() => onMuscleSelect(part.slug)}
            />
        ));
    };

    return (
        <div className="relative w-full aspect-[1/2] max-h-[80vh] flex items-center justify-center p-4">
            <svg
                viewBox="0 0 700 1400"
                className="w-full h-full drop-shadow-2xl"
                preserveAspectRatio="xMidYMid meet"
            >
                <AnimatePresence>
                    {parts.map((part) => (
                        <g key={part.slug}>
                            {renderPath(part, 'common')}
                            {renderPath(part, 'left')}
                            {renderPath(part, 'right')}
                        </g>
                    ))}
                </AnimatePresence>
            </svg>

            {/* Tooltip or Label could be added here */}
            {hoveredPart && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-4 left-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-2 px-3 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm z-20"
                >
                    <p className="text-xs font-bold capitalize text-slate-900 dark:text-slate-100 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        {hoveredPart.replace('-', ' ')}
                    </p>
                </motion.div>
            )}
        </div>
    );
};
