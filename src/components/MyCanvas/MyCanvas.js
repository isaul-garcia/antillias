import React, { Suspense, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds, useBounds, useGLTF } from '@react-three/drei';
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing';
import model from '../../3Dassets/all_icos.glb';
import Island from "./Island";
import { Floor } from "./index";
import { Select } from '@react-three/postprocessing';

function MyCanvas() {
  return (
    <>
      <Canvas shadows dpr={[1, 1.25]} camera={{ fov: 55, position: [14, 29, 22] }} >
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.8} position={[5, 20, 20]} />
        <spotLight intensity={0.8} position={[-50, 50, -50]} />
        <spotLight intensity={0.8} position={[-50, 50, -50]} />
        <Suspense fallback={null}>
          <Selection>
            <EffectComposer multisampling={8} autoClear={false}>
              <Outline blur visibleEdgeColor="white" edgeStrength={100} width={2000} />
            </EffectComposer>
            <Island />
            <Floor />
            <Bounds observe damping={6} margin={0.9}>
              <SelectToZoom>
                <Invi name="Ico00" position={[22.75, -6.39, 2]} />
                <Ico name="Ico01" position={[-5.75, 6.39, 5.23]} />
                <Ico name="Ico02" position={[14.75, 2.75, 5.15]} />
                <Ico name="Ico03" position={[5.07, 6.51, -7.95]} /> 
                <Ico name="Ico04" position={[-2.0, 4.0, -13.3]} />
                <Ico name="Ico05" position={[-19.9, 2.91, -6.35]} />
                <Ico name="Ico06" position={[0.95, 3.1, 14.5]} />
                <Ico name="Ico07" position={[5.97, 5.75, 5.6]} />
              </SelectToZoom>
            </Bounds>
          </Selection>
        </Suspense> 
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.5} enablePan={false} enableZoom={false}/>
      </Canvas>
    </>
  );
}

function Ico({ name, ...props }) {
  const { nodes, materials } = useGLTF(model);
  const [ico, setIco] = useState(null);
  const [shrink, setShrink] = useState(null);
  return (
    <Select enabled={ico}>
      <mesh {...props} onClick={() => setShrink(true)} onPointerMissed={() => setShrink(false)} onPointerOver={() => setIco(true)} onPointerOut={() => setIco(false)} geometry={nodes[name].geometry} material={materials.magenta} scale={shrink ? 0.00000001 : 0.42} />
    </Select>
  )
}

function Invi({ name, ...props }) {
  const { nodes, materials } = useGLTF(model);
  return (
      <mesh {...props} geometry={nodes[name].geometry} material={materials.invisible} scale={0.000001} />
  )
}

function SelectToZoom({ children, ...props }) {
  const group = useRef()
  const api = useBounds()
  return (
    // eslint-disable-next-line no-sequences
    <group ref={group} {...props} position={[-2, 4, 2]} rotation={[0, 1.0, 0]} dispose={null} onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()} >
        {children}
    </group>
  )
}

export default MyCanvas