import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Pizza from "../models/Pizza";

export default function PizzaScene() {
  return (
    <Canvas
      style={{ background: "transparent" }}
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 5, 2]} intensity={1} />
      <Pizza />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
