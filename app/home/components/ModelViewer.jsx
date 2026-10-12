
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Bounds } from "@react-three/drei";
import styles from "../css/model.module.css";
import { useEffect } from "react";
import * as THREE from "three"


function Model() {
    const { scene } = useGLTF("/models/supercode-model.glb");

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                const materials = Array.isArray(child.material)
                    ? child.material
                    : [child.material];

                materials.forEach((material) => {
                    material.color.set("#d0d0d4");
                    material.metalness = 0.8;
                    material.roughness = 0.35;
                    material.needsUpdate = true;
                });
            }
        });
    }, [scene]);


    return (
        <Bounds fit clip observe margin={1.2}>
            <Center>
                <primitive object={scene} scale={1} />
            </Center>
        </Bounds>

    );
}

export default function ModelViewer() {
    return (
        <div className={styles.viewer}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 5]} intensity={2} />

                <Model />

                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    rotateSpeed={0.8}
                />
            </Canvas>
        </div>
    );
}
