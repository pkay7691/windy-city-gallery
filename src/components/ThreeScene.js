import React, { useRef, useState } from 'react';
import { Canvas, useFrame, extend, useThree, useLoader, MathUtils } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls, useGLTF, PointerLockControls, Stats } from '@react-three/drei';
import * as THREE from 'three';
import { Model } from './Model';




const ThreeScene = () => {

  
  return (
    <Canvas camera={{fov: 75, position: [3, .5, 1]}} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      {/* <OrbitControls /> */}
      <PointerLockControls />
      <Stats />
    </Canvas>
  );
};

export default ThreeScene;
