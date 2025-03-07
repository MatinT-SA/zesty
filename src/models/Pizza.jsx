import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Pizza(props) {
  const { nodes, materials } = useGLTF(
    "https://www.dropbox.com/scl/fi/1fk1d8soh9p5txbldn42r/pizza.glb?rlkey=rz9kcgutmioiot9pz1dt85llq&st=lgjnwit5&dl=1",
  );
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
  "https://www.dropbox.com/scl/fi/1fk1d8soh9p5txbldn42r/pizza.glb?rlkey=rz9kcgutmioiot9pz1dt85llq&st=lgjnwit5&dl=1",
);

export default Pizza;
