import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // allows importing of 3d models

import CanvasLoader from "../Loader";


const Characters = () => {

  const character = useGLTF("./matilda/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={character.scene}
        scale={0.13} // Size of the model
        position={[0, -19, 0]} // X, Y, Z positioning of the character
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const CharactersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [42, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />} > {/* Had to remove this property fallback={<CanvasLoader />} */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Characters />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default CharactersCanvas;