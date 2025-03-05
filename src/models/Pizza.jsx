import React from "react";
import { useGLTF } from "@react-three/drei";

function Pizza(props) {
  const { nodes, materials } = useGLTF("/3d/pizza.glb");

  return (
    <group {...props} dispose={null} scale={[13, 13, 13]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_1}
        rotation={[-Math.PI / 4.8, 5.9, 3.5]}
      />
    </group>
  );
}

useGLTF.preload("/3d/pizza.glb");

export default Pizza;
