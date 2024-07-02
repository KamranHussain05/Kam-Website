import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const BrainVisualization = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create brain point cloud
    const brainGeometry = new THREE.BufferGeometry();
    const brainMaterial = new THREE.PointsMaterial({ 
      color: 0x0077be, // Blue color
      size: 0.03,
      transparent: true,
      opacity: 0.7
    });

    const brainPoints = [];
    for (let i = 0; i < 15000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(180);
      
      const x = 2 * Math.sin(theta) * Math.cos(phi);
      const y = 2 * Math.sin(theta) * Math.sin(phi);
      const z = 2 * Math.cos(theta);

      brainPoints.push(x, y, z);
    }

    brainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(brainPoints, 3));
    const brainCloud = new THREE.Points(brainGeometry, brainMaterial);
    scene.add(brainCloud);

    // Camera position
    camera.position.z = 5;

    // Orbit controls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3;
    controls.maxDistance = 8;
    controls.enableZoom = false; // Disable zooming

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      brainCloud.rotation.y += 0.0005; // Slower rotation
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default BrainVisualization;