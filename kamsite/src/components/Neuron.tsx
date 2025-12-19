import React, { useState, useEffect } from 'react';

/**
 * Helper function to generate a wiggly path between two points.
 * Uses a Quadratic Bézier curve with a randomized midpoint.
 */
const generateWigglyPath = (x1: number, y1: number, x2: number, y2: number, wiggleFactor: number): string => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);

  if (len < 0.1) return `M ${x1},${y1} L ${x2},${y2}`;

  const midX = x1 + dx * 0.5;
  const midY = y1 + dy * 0.5;
  const perpDx = -dy / len;
  const perpDy = dx / len;
  const offsetMagnitude = (Math.random() - 0.5) * wiggleFactor * len;
  const controlX = midX + offsetMagnitude * perpDx;
  const controlY = midY + offsetMagnitude * perpDy;

  return `M ${x1},${y1} Q ${controlX},${controlY} ${x2},${y2}`;
};

/**
 * Generates a path that mimics an action potential (spike) waveform.
 * Includes depolarization, repolarization, and hyperpolarization (undershoot) phases.
 */
const generateActionPotentialPath = (width: number, height: number): string => {
  const points: [number, number][] = [];
  const numSegments = 15;
  for (let i = 0; i <= numSegments; i++) {
    const x = (i / numSegments) * width - (width / 2);
    const progress = i / numSegments;
    
    let y = 0;
    if (progress > 0.3 && progress < 0.45) {
      // Depolarization phase: Steep rise
      y = -((progress - 0.3) / 0.15) * height;
    } else if (progress >= 0.45 && progress < 0.6) {
      // Repolarization phase: Fast fall
      y = -height + ((progress - 0.45) / 0.15) * (height * 1.3);
    } else if (progress >= 0.6 && progress < 0.8) {
      // Hyperpolarization phase: Slow return from undershoot
      y = (height * 0.3) - ((progress - 0.6) / 0.2) * (height * 0.3);
    }
    
    // Add biological "noise" for a more organic feel
    const noise = (Math.random() - 0.5) * (height * 0.4);
    y += noise;
    
    points.push([x, y]);
  }
  
  return points.reduce((acc, pt, i) => {
    return acc + (i === 0 ? `M ${pt[0]} ${pt[1]}` : ` L ${pt[0]} ${pt[1]}`);
  }, "");
};

interface PathData {
  path: string;
  strokeWidth: string;
  key?: string;
  id?: string;
  colorClass?: string;
  apPath?: string;
}

interface GeneratedStuff {
  somaPath: string;
  genericDendritePaths: PathData[];
  extendedAxonPaths: PathData[];
  receivingDendritePaths: PathData[];
}

interface NeuronProps {
  id: string;
  offsetX?: number;
  offsetY?: number;
  onGeometriesCalculated?: (id: string, geometries: {
    somaAbsX: number;
    somaAbsY: number;
    extendedAxonTips: Record<string, { absX: number; absY: number }>;
  }) => void;
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
  outgoingTargets?: Array<{
    targetId: string;
    targetSomaAbsX: number;
    targetSomaAbsY: number;
  }>;
  incomingAxonPoints?: Array<{
    sourceId: string;
    absAxonTipX: number;
    absAxonTipY: number;
  }>;
}

const Neuron: React.FC<NeuronProps> = ({
  id,
  offsetX = 0,
  offsetY = 0,
  onGeometriesCalculated,
  primaryColor: propPrimaryColor = "text-blue-500",
  secondaryColor: propSecondaryColor = "text-blue-400",
  tertiaryColor: propTertiaryColor = "text-blue-300",
  outgoingTargets = [],
  incomingAxonPoints = [],
}) => {
  const [generatedStuff, setGeneratedStuff] = useState<GeneratedStuff>({
    somaPath: '',
    genericDendritePaths: [],
    extendedAxonPaths: [],
    receivingDendritePaths: [],
  });

  const somaCX = 100;
  const somaCY = 100;
  const somaBaseRadius = 30;
  const nucleusRadius = 10;
  const genericDendriteWiggleFactor = 0.25;
  const connectionWiggleFactor = 0.08;

  useEffect(() => {
    // Generate Irregular Soma Path
    const numSomaPoints = 12;
    let somaPointsArr: [number, number][] = [];
    for (let i = 0; i < numSomaPoints; i++) {
      const angle = (i / numSomaPoints) * 2 * Math.PI;
      const noisyRadius = somaBaseRadius + (Math.random() - 0.5) * 2 * 5;
      const x = somaCX + noisyRadius * Math.cos(angle);
      const y = somaCY + noisyRadius * Math.sin(angle);
      somaPointsArr.push([x, y]);
    }
    let somaPathData = `M ${somaPointsArr[0][0]},${somaPointsArr[0][1]} `;
    for (let i = 0; i < numSomaPoints; i++) {
      const p1 = somaPointsArr[i];
      const p2 = somaPointsArr[(i + 1) % numSomaPoints];
      const p3 = somaPointsArr[(i + 2) % numSomaPoints];
      const midX = (p2[0] + p3[0]) / 2;
      const midY = (p2[1] + p3[1]) / 2;
      if (i === 0) {
        somaPathData = `M ${p1[0]},${p1[1]} Q ${p2[0]},${p2[1]} ${midX},${midY} `;
      } else {
        somaPathData += `T ${midX},${midY} `;
      }
    }
    somaPathData += "Z";

    // Generate Generic Dendrites
    const newGenericDendritePaths: PathData[] = [];
    const numGenericDendrites = Math.floor(Math.random() * 5) + 6;
    
    for (let i = 0; i < numGenericDendrites; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const mainLen = Math.random() * 20 + 10;
      const startX = somaCX + (somaBaseRadius * 0.8) * Math.cos(angle);
      const startY = somaCY + (somaBaseRadius * 0.8) * Math.sin(angle);
      const endXMain = startX + mainLen * Math.cos(angle);
      const endYMain = startY + mainLen * Math.sin(angle);
      
      newGenericDendritePaths.push({
        path: generateWigglyPath(startX, startY, endXMain, endYMain, genericDendriteWiggleFactor),
        strokeWidth: "2",
      });

      const numSubBranches = Math.floor(Math.random() * 3);
      for (let j = 0; j < numSubBranches; j++) {
        const subAngleOffset = (Math.random() - 0.5) * (Math.PI / 3);
        const subAngle = angle + subAngleOffset;
        const subLen = mainLen * (Math.random() * 0.4 + 0.4);
        const subEndX = endXMain + subLen * Math.cos(subAngle);
        const subEndY = endYMain + subLen * Math.sin(subAngle);
        newGenericDendritePaths.push({
          path: generateWigglyPath(endXMain, endYMain, subEndX, subEndY, genericDendriteWiggleFactor * 1.2),
          strokeWidth: "1",
        });
      }
    }

    // Generate Extended Axon Paths
    const newExtendedAxonPaths: PathData[] = [];
    const calculatedExtendedAxonTips_absolute: Record<string, { absX: number; absY: number }> = {};

    outgoingTargets.forEach(target => {
      const targetLocalX = target.targetSomaAbsX - offsetX;
      const targetLocalY = target.targetSomaAbsY - offsetY;
      const dxToTarget = targetLocalX - somaCX;
      const dyToTarget = targetLocalY - somaCY;
      const angleToTarget = Math.atan2(dyToTarget, dxToTarget);
      const axonStartX = somaCX + somaBaseRadius * Math.cos(angleToTarget);
      const axonStartY = somaCY + somaBaseRadius * Math.sin(angleToTarget);
      const distBetweenSomaCenters = Math.sqrt(dxToTarget * dxToTarget + dyToTarget * dyToTarget);
      const distBetweenPeripheries = Math.max(10, distBetweenSomaCenters - somaBaseRadius - somaBaseRadius);
      const axonExtensionRatio = 0.75;
      const axonLength = distBetweenPeripheries * axonExtensionRatio;
      const axonTipLocalX = axonStartX + axonLength * Math.cos(angleToTarget);
      const axonTipLocalY = axonStartY + axonLength * Math.sin(angleToTarget);
      
      const pathId = `axon-path-${id}-${target.targetId}`;
      newExtendedAxonPaths.push({
        key: `ext-axon-${id}-to-${target.targetId}`,
        id: pathId,
        path: generateWigglyPath(axonStartX, axonStartY, axonTipLocalX, axonTipLocalY, connectionWiggleFactor),
        strokeWidth: "4",
        colorClass: propPrimaryColor,
        apPath: generateActionPotentialPath(24, 12),
      });
      calculatedExtendedAxonTips_absolute[target.targetId] = {
        absX: axonTipLocalX + offsetX,
        absY: axonTipLocalY + offsetY,
      };
    });

    // Generate Receiving Dendrite Paths
    const newReceivingDendritePaths: PathData[] = [];
    incomingAxonPoints.forEach(source => {
      const sourceAxonTipLocalX = source.absAxonTipX - offsetX;
      const sourceAxonTipLocalY = source.absAxonTipY - offsetY;
      const dxToSourceTip = sourceAxonTipLocalX - somaCX;
      const dyToSourceTip = sourceAxonTipLocalY - somaCY;
      const angleToSourceTip = Math.atan2(dyToSourceTip, dxToSourceTip);
      const dendriteStartX = somaCX + somaBaseRadius * Math.cos(angleToSourceTip);
      const dendriteStartY = somaCY + somaBaseRadius * Math.sin(angleToSourceTip);

      const pathId = `dendrite-path-${id}-${source.sourceId}`;
      newReceivingDendritePaths.push({
        key: `rec-dendrite-${id}-from-${source.sourceId}`,
        id: pathId,
        path: generateWigglyPath(dendriteStartX, dendriteStartY, sourceAxonTipLocalX, sourceAxonTipLocalY, connectionWiggleFactor * 1.2),
        strokeWidth: "2.5",
        colorClass: propSecondaryColor,
        apPath: generateActionPotentialPath(18, 9),
      });
    });

    setGeneratedStuff({
      somaPath: somaPathData,
      genericDendritePaths: newGenericDendritePaths,
      extendedAxonPaths: newExtendedAxonPaths,
      receivingDendritePaths: newReceivingDendritePaths,
    });

    if (typeof onGeometriesCalculated === 'function') {
      onGeometriesCalculated(id, {
        somaAbsX: somaCX + offsetX,
        somaAbsY: somaCY + offsetY,
        extendedAxonTips: calculatedExtendedAxonTips_absolute,
      });
    }
  }, [id, offsetX, offsetY, propPrimaryColor, propSecondaryColor, outgoingTargets, incomingAxonPoints, onGeometriesCalculated]);

  return (
    <g transform={`translate(${offsetX}, ${offsetY})`} aria-labelledby={`${id}-neuronTitle`} role="graphics-object">
      <title id={`${id}-neuronTitle`}>Neuron {id}</title>
      <desc id={`${id}-neuronDesc`}>Stylized neuron {id} with connections.</desc>
      <defs>
        <filter id={`somaNoiseFilter-${id}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.15" numOctaves="2" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="2.5" xChannelSelector="R" yChannelSelector="G" result="displacedSoma"/>
          <feGaussianBlur in="displacedSoma" stdDeviation="0.5" />
        </filter>
        <filter id={`glow-${id}`}>
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Extended Axons */}
      <g strokeLinecap="round" fill="none">
        {generatedStuff.extendedAxonPaths.map(axon => (
          <React.Fragment key={axon.key}>
            <path id={axon.id} d={axon.path} stroke="currentColor" className={axon.colorClass} strokeWidth={axon.strokeWidth}/>
            {/* Spike Animation for Axon (Soma -> Tip) */}
            <path d={axon.apPath} stroke="white" strokeWidth="2.5" filter={`url(#glow-${id})`}>
              <animateMotion dur={`${0.5 + Math.random() * 3}s`} repeatCount="indefinite" begin={`${Math.random() * 5}s`} rotate="auto">
                <mpath href={`#${axon.id}`}/>
              </animateMotion>
            </path>
          </React.Fragment>
        ))}
      </g>

      {/* Receiving Dendrites */}
      <g strokeLinecap="round" fill="none">
        {generatedStuff.receivingDendritePaths.map(dendrite => (
          <React.Fragment key={dendrite.key}>
            <path id={dendrite.id} d={dendrite.path} stroke="currentColor" className={dendrite.colorClass} strokeWidth={dendrite.strokeWidth}/>
             {/* Spike Animation for Dendrite (Tip -> Soma) */}
             {/* The path is drawn Soma -> Tip, so we need keyPoints to reverse direction */}
            <path d={dendrite.apPath} stroke="white" strokeWidth="2" filter={`url(#glow-${id})`}>
              <animateMotion 
                dur={`${0.5 + Math.random() * 3}s`} 
                repeatCount="indefinite" 
                begin={`${Math.random() * 5}s`}
                keyPoints="1;0"
                keyTimes="0;1"
                calcMode="linear"
                rotate="auto"
              >
                <mpath href={`#${dendrite.id}`}/>
              </animateMotion>
            </path>
          </React.Fragment>
        ))}
      </g>
      
      {/* Soma Path */}
      {generatedStuff.somaPath && (
        <path d={generatedStuff.somaPath} fill="currentColor" className={propPrimaryColor} filter={`url(#somaNoiseFilter-${id})`}/>
      )}
      
      {/* Nucleus */}
      <circle cx={somaCX} cy={somaCY} r={nucleusRadius} fill="currentColor" className={propTertiaryColor} opacity="0.75"/>

      {/* Generic Dendrites */}
      <g stroke="currentColor" className={propSecondaryColor} strokeLinecap="round" fill="none">
        {generatedStuff.genericDendritePaths.map((dendrite, index) => (
          <path key={`generic-dendrite-${id}-${index}`} d={dendrite.path} strokeWidth={dendrite.strokeWidth}/>
        ))}
      </g>
    </g>
  );
};

export default Neuron;
