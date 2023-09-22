import React, {Suspense, useEffect, useRef, useState} from 'react'
import {Canvas, useFrame} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from '../Loader.jsx';

const Computers = ({ isMobile }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf');
    const meshRef = useRef();

    useFrame(({ clock }) => {
        if (isMobile) {
           computer.scene.rotation.y = 0.5 * clock.getElapsedTime();
        }
    });

  return (
    <mesh ref={meshRef}>
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
        scale={isMobile ? 0.25 : 0.40}
        position={ isMobile ? [0, -1.8, -0.3] : [0, -2.4, -1]}
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
      frameloop={"always"}
      shadows
      camera={{position: [20, 3, 5], fov: 15 }}
      gl={{preserveDrawingBuffer: true}}
      >
        <Suspense fallback={<CanvasLoader/>}>
            { !isMobile && (
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
            )}
          <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all/>
      </Canvas>
  );
};

export default ComputersCanvas;