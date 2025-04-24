'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function NeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create nodes
    const nodes: THREE.Mesh[] = []
    const nodeGeometry = new THREE.SphereGeometry(0.1, 32, 32)
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6,
    })

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

    // Create connections
    const connections: THREE.Line[] = []
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.2,
    })

    nodes.forEach((node, i) => {
      nodes.slice(i + 1).forEach((otherNode) => {
        if (Math.random() < 0.1) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            node.position,
            otherNode.position,
          ])
          const line = new THREE.Line(geometry, lineMaterial)
          connections.push(line)
          scene.add(line)
        }
      })
    })

    // Position camera
    camera.position.z = 5

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      nodes.forEach((node) => {
        node.position.x += (Math.random() - 0.5) * 0.01
        node.position.y += (Math.random() - 0.5) * 0.01
        node.position.z += (Math.random() - 0.5) * 0.01
      })

      connections.forEach((line) => {
        const positions = line.geometry.attributes.position
        positions.needsUpdate = true
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      scene.clear()
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0" />
} 