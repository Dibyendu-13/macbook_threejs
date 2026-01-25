import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Box = (props) => {
  // This reference gives you direct access to the THREE.Mesh object
  const meshRef = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  // Return the view, these are regular Three.js elements expressed in JSX
  return (
    <mesh {...props} ref={meshRef} scale={1}>
      {/* boxGeometry creates a three.js BoxGeometry object */}
      <boxGeometry args={[1, 1, 1]} /> 
      {/* meshStandardMaterial creates a three.js MeshStandardMaterial */}
      <meshStandardMaterial color={'hotpink'} /> 
    </mesh>
  );
};

export default Box;
