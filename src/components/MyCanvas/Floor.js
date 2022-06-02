import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import model from '../../3Dassets/floor.glb';

const Floor = (props) => {
  const group = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, model);
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials.Material} position={[-1, -1.95, 0.7]} scale={27.06} />
    </group>
  )
}


export default Floor