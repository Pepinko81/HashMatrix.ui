'use client';

import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
const { Canvas, useFrame } = window.ReactThreeFiber;
const { Text, Environment, Float, PerspectiveCamera } = window.Drei;


function CubeLogo() {
  const cubeRef = useRef();
  const glowRef = useRef();
  
  useFrame((state) => {
    if (cubeRef.current && glowRef.current) {
      cubeRef.current.rotation.y += 0.005;
      glowRef.current.rotation.y += 0.005;
      
      const intensity = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.3;
      if (glowRef.current.material) {
        glowRef.current.material.uniforms.intensity.value = intensity;
      }
    }
  });

  return React.createElement(
    Float,
    {
      speed: 2,
      rotationIntensity: 0.5,
      floatIntensity: 0.5
    },
    [
      React.createElement('mesh', {
        key: 'cube',
        ref: cubeRef,
        children: [
          React.createElement('boxGeometry', { args: [2, 2, 2] }),
          React.createElement('meshPhysicalMaterial', {
            color: '#000000',
            metalness: 0.9,
            roughness: 0.1,
            transparent: true,
            opacity: 0.8,
            side: THREE.DoubleSide
          })
        ]
      }),
