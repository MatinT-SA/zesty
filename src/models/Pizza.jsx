import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Pizza(props) {
  const glbPath =
    process.env.NODE_ENV === "production"
      ? "/zesty/3d/pizza.glb"
      : "/3d/pizza.glb";
  const { nodes, materials } = useGLTF(glbPath);
  const pizzaRef = useRef();

  useFrame(() => {
    if (pizzaRef.current) {
      pizzaRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group {...props} dispose={null} scale={[13, 13, 13]}>
      <mesh
        ref={pizzaRef}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_1}
        rotation={[-Math.PI / 4.8, 5.9, 3.5]}
      />
    </group>
  );
}

useGLTF.preload(
  process.env.NODE_ENV === "production"
    ? "/zesty/3d/pizza.glb"
    : "/3d/pizza.glb",
);

export default Pizza;
