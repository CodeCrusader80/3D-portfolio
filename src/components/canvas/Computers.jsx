import React, {Suspense, useEffect, useRef, useState} from 'react'
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader.jsx';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.85} groundColor={"black"}/>
      <pointLight intensity={1}/>
      <spotLight
        position={[20, 20, 15]}
        angle={0.15}
        penumbra={1}
        intensity={1000}
        castShadow=""
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.25 : 0.42}
        position={ isMobile ? [0, -1, -0.5] : [0, -2, -1]}
        rotation={[-0.01, 0.1, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    const controlsRef = useRef();

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange)
        };
    }, []);

    useEffect(() => {
        if (controlsRef.current) {
            controlsRef.current.enabled = !isMobile;
        }
    }, [isMobile]);

  return (
      <Canvas
      frameloop={"demand"}
      shadows
      camera={{position: [20, 3, 5], fov: 15 }}
      gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all/>
      </Canvas>
  );
};

export default ComputersCanvas;