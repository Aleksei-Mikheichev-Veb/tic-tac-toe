import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Ring = ({
                  size = 100,
                  strokeWidth = 8,
                  color = '#4cd964',
              }) => {
    const circleRef = useRef(null);

    // Добавляем отступ для центрирования, как в крестике
    const padding = size * 0.1; // 20% отступ с каждой стороны
    const radius = (size - padding * 2 - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        if (circleRef.current) {
            gsap.fromTo(
                circleRef.current,
                { strokeDashoffset: circumference },
                {
                    strokeDashoffset: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                }
            );
        }
    }, [circumference]);

    return (
        <svg width={size} height={size}>
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={0}
                strokeLinecap="round"
                ref={circleRef}
            />
        </svg>
    );
};

export default Ring;