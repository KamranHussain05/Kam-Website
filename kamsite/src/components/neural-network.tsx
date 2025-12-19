'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const width = currentContainer.clientWidth;
    const height = currentContainer.clientHeight;

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(width, height)
    currentContainer.appendChild(renderer.domElement)

    // Create nodes
    const nodes: THREE.Mesh[] = []
    const nodeGeometry = new THREE.SphereGeometry(0.1, 32, 32)
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6,
    })

    // Generate random nodes in 3D space
    for (let i = 0; i < 50; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      nodes.push(node)
      scene.add(node)
    }

    // Create connections between nodes
    const connections: { line: THREE.Line; startNode: THREE.Mesh; endNode: THREE.Mesh }[] = []
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.2,
    })

    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach((otherNode) => {
        // Randomly connect nodes to create a network-like structure
        if (Math.random() < 0.1) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            node.position,
            otherNode.position,
          ])
          const line = new THREE.Line(geometry, lineMaterial)
          connections.push({ line, startNode: node, endNode: otherNode })
          scene.add(line)
        }
      })
    })

    // Position camera
    camera.position.z = 5

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      // Move nodes slightly for a "living" effect
      nodes.forEach((node) => {
        node.position.x += (Math.random() - 0.5) * 0.01
        node.position.y += (Math.random() - 0.5) * 0.01
        node.position.z += (Math.random() - 0.5) * 0.01
        
        // Keep nodes within a certain boundary
        const limit = 6;
        if (Math.abs(node.position.x) > limit) node.position.x *= 0.95;
        if (Math.abs(node.position.y) > limit) node.position.y *= 0.95;
        if (Math.abs(node.position.z) > limit) node.position.z *= 0.95;
      })

      // Update connection lines to follow moving nodes
      connections.forEach(({ line, startNode, endNode }) => {
        const positions = line.geometry.attributes.position.array as Float32Array;
        positions[0] = startNode.position.x;
        positions[1] = startNode.position.y;
        positions[2] = startNode.position.z;
        positions[3] = endNode.position.x;
        positions[4] = endNode.position.y;
        positions[5] = endNode.position.z;
        line.geometry.attributes.position.needsUpdate = true;
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      currentContainer?.removeChild(renderer.domElement)
      scene.clear()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />
} 