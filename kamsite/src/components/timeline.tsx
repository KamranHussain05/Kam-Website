'use client'

import { motion } from 'framer-motion'
import { useState, useCallback, useRef, useLayoutEffect } from 'react'
import Neuron from './Neuron'

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface Connection {
  fromId: string;
  toId: string;
  key: string;
}

interface NeuronGeometry {
  somaAbsX: number;
  somaAbsY: number;
  extendedAxonTips: Record<string, { absX: number; absY: number }>;
}

interface NeuronGeometries {
  [key: string]: NeuronGeometry;
}

const timelineData: TimelineItem[] = [
  {
    year: '2025',
    title: 'ML Research Scientist Intern',
    company: 'Tacit AI / Reflex Technologies',
    description: 'Multimodal speech models & distributed training on B200s.'
  },
  {
    year: '2024',
    title: 'SURFIN Research Fellow',
    company: 'Stanford University (NPTL)',
    description: 'Real-time brain-to-text decoding & speech rate neural coding.'
  },
  {
    year: '2023',
    title: 'Undergraduate Research Engineer',
    company: 'Braingeneers, UC Santa Cruz',
    description: 'Foundation models for organoids & SpikeData toolkit.',
  },
  {
    year: '2023-2',
    title: 'Founder and CEO',
    company: 'TensorLearn',
    description: '$1M+ funding & asset acquisition for AI education tools.',
  },
  {
    year: '2022',
    title: 'NASA Research Intern',
    company: 'NASA Ames Research Center',
    description: 'Transformer models for aviation service recommendations.',
  },
  {
    year: '2022-2',
    title: 'Neural Data Science Intern',
    company: 'UC San Diego (TNEL)',
    description: 'Songbird neural data analysis & NWB standardization.',
  },
]

// Define connections between timeline items
const connections: Connection[] = [
  { fromId: '2025', toId: '2024', key: 'c0' },
  { fromId: '2024', toId: '2023', key: 'c1' },
  { fromId: '2023', toId: '2022', key: 'c2' },
  { fromId: '2023-2', toId: '2022', key: 'c3' },
  { fromId: '2022', toId: '2022-2', key: 'c4' },
]

/**
 * Timeline Component
 * Renders a vertical timeline of professional experience with procedural neurons
 * that dynamically connect to each other based on the timeline data.
 */
export function Timeline() {
  const [neuronGeometries, setNeuronGeometries] = useState<NeuronGeometries>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardPositions, setCardPositions] = useState<{ x: number; y: number; width: number; height: number }[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerRect, setContainerRect] = useState<{ left: number; top: number; width: number; height: number }>({ left: 0, top: 0, width: 0, height: 0 });

  /**
   * Callback received from each Neuron component once its internal geometry (soma, axon tips)
   * has been calculated. We store these to draw inter-neuron connections.
   */
  const handleGeometriesCalculated = useCallback((neuronId: string, geometries: NeuronGeometry) => {
    setNeuronGeometries(prev => {
      // Deep compare to avoid infinite re-renders
      const prevGeom = prev[neuronId];
      if (prevGeom && 
          prevGeom.somaAbsX === geometries.somaAbsX && 
          prevGeom.somaAbsY === geometries.somaAbsY &&
          JSON.stringify(prevGeom.extendedAxonTips) === JSON.stringify(geometries.extendedAxonTips)) {
        return prev;
      }
      return { ...prev, [neuronId]: geometries };
    });
  }, []);

  useLayoutEffect(() => {
    // Measure the positions of all timeline cards to align neurons correctly
    const updatePositions = () => {
        if (!containerRef.current) return;
        
        const cRect = containerRef.current.getBoundingClientRect();
        const newContainerRect = {
            left: cRect.left + window.scrollX,
            top: cRect.top + window.scrollY,
            width: cRect.width,
            height: cRect.height,
        };

    const positions = cardRefs.current.map(card => {
      if (!card) return { x: 0, y: 0, width: 0, height: 0 };
      const rect = card.getBoundingClientRect();
      return {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height,
      };
    });

        setContainerRect(newContainerRect);
      setCardPositions(positions);
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  // Calculate neuron center positions
  const neuronCenters = timelineData.map((item, idx) => {
    // We want the neurons to be positioned near the center line (timeline axis)
    // but alternating left/right corresponding to the text content.
    if (containerRect.width === 0) return { x: 0, y: 0 };

    // Vertical position: Center of the text card
    const cardPos = cardPositions[idx];
    const centerY = cardPos ? (cardPos.y - containerRect.top + cardPos.height / 2) : 0;
    
    // Horizontal position: Center of container +/- offset
    const axisX = containerRect.width / 2;
    const offset = 60; // Distance from center line
    
    // Index 0 (2024) is Right aligned (isRightSide=true), so neuron should be on Right
    // Index 1 (2023) is Left aligned, so neuron should be on Left
    const isRightSide = idx % 2 === 0;
    const centerX = isRightSide ? axisX + offset : axisX - offset;

    return { x: centerX, y: centerY };
  });

  // Build outgoingTargets and incomingAxonPoints for each neuron
  const neuronConnectionProps = timelineData.map((item, idx) => {
    // Outgoing targets: where this neuron sends axons
    const outgoingTargets = connections
      .filter(conn => conn.fromId === item.year)
      .map(conn => {
        const targetIdx = timelineData.findIndex(t => t.year === conn.toId);
        if (targetIdx === -1) return null;
        
        return {
          targetId: conn.toId,
          targetSomaAbsX: neuronCenters[targetIdx].x,
          targetSomaAbsY: neuronCenters[targetIdx].y,
        };
      })
      .filter((t): t is { targetId: string; targetSomaAbsX: number; targetSomaAbsY: number } => t !== null);

    // Incoming axon points: where this neuron receives dendrites
    const incomingAxonPoints = connections
      .filter(conn => conn.toId === item.year)
      .map(conn => {
        const sourceId = conn.fromId;
        const sourceGeom = neuronGeometries[sourceId];
        
        // Ideally, we connect to the calculated axon tip from the source neuron
        if (sourceGeom && sourceGeom.extendedAxonTips[item.year]) {
            const tip = sourceGeom.extendedAxonTips[item.year];
            return {
                sourceId,
                absAxonTipX: tip.absX,
                absAxonTipY: tip.absY,
            };
        }

        // Fallback to source center if geometries aren't ready yet
        const sourceIdx = timelineData.findIndex(t => t.year === sourceId);
        if (sourceIdx !== -1) {
        return {
                sourceId,
          absAxonTipX: neuronCenters[sourceIdx].x,
          absAxonTipY: neuronCenters[sourceIdx].y,
        };
        }
        return null;
      })
      .filter((t): t is { sourceId: string; absAxonTipX: number; absAxonTipY: number } => t !== null);

    return {
      outgoingTargets,
      incomingAxonPoints,
    };
  });

  return (
    <div className="mt-8">
      <div className="relative" ref={containerRef}>
        {/* Main connection line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

        {/* Overlay SVG for neurons */}
        {containerRect.width > 0 && containerRect.height > 0 && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}
          >
            {timelineData.map((item, idx) => {
              const center = neuronCenters[idx];
              // The Neuron component draws its soma at (100, 100). 
              // We translate the group so that (100, 100) aligns with our calculated center.
              const transformX = center.x - 100;
              const transformY = center.y - 100;
              
              return (
                <g key={item.year}>
                  <Neuron
                    id={item.year}
                    offsetX={transformX} 
                    offsetY={transformY}
                    primaryColor="text-blue-500"
                    secondaryColor="text-blue-400"
                    tertiaryColor="text-blue-300"
                    outgoingTargets={neuronConnectionProps[idx].outgoingTargets}
                    incomingAxonPoints={neuronConnectionProps[idx].incomingAxonPoints}
                    onGeometriesCalculated={handleGeometriesCalculated}
                  />
                </g>
              );
            })}
          </svg>
        )}

        {timelineData.map((item, index) => {
          const isRightSide = index % 2 === 0;
          return (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-16 flex ${
                isRightSide ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center`}
            >
              <div
                ref={el => { cardRefs.current[index] = el; }}
                className={`w-full md:w-[calc(50%-2rem)] px-4 ${
                  isRightSide ? 'md:text-right md:pr-8' : 'md:pl-8'
                }`}
              >
                <span className="text-sm font-semibold text-primary">{item.year}</span>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-muted-foreground">{item.company}</p>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
              {/* Spacer div */}
              <div className="w-full md:w-[calc(50%-2rem)]"></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  )
} 
