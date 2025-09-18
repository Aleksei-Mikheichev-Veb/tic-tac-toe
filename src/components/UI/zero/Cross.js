import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cross = ({
                   size = 100,
                   strokeWidth = 8,
                   color = '#ff3b30',
               }) => {
    const line1 = useRef(null);
    const line2 = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            line1.current,
            { strokeDashoffset: 100 },
            {
                strokeDashoffset: 0,
                duration: 0.4,
                ease: 'power2.out',
            }
        ).fromTo(
            line2.current,
            { strokeDashoffset: 100 },
            {
                strokeDashoffset: 0,
                duration: 0.4,
                ease: 'power2.out',
            },
            '-=0.2'
        );
    }, []);

    // Вычисляем отступы для центрирования крестика
    const padding = size * 0.2; // 20% отступ с каждой стороны

    return (
        <svg width={size} height={size}>
            <line
                x1={padding}
                y1={padding}
                x2={size - padding}
                y2={size - padding}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={100}
                strokeDashoffset={0}
                ref={line1}
            />
            <line
                x1={size - padding}
                y1={padding}
                x2={padding}
                y2={size - padding}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={100}
                strokeDashoffset={0}
                ref={line2}
            />
        </svg>
    );
};

export default Cross;