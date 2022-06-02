import React, { useRef } from "react";
import { useGLTF } from '@react-three/drei';

import model from '../../3Dassets/antillia_place_01.glb';

export const Island = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(model)
  return (
    <group ref={group} {...props} dispose={null} position={[-2, 0.5, 2]} rotation={[0, 1.0, 0]}  >
      <mesh geometry={nodes['z-land'].geometry} material={materials.dirt} position={[0.94, 2.63, 0.35]} rotation={[0, 0.16, 0]} scale={[1, 0.7, 1]} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['aparat-light']} position={[2.84, 8.03, -1.78]} scale={[-2.28, -3.23, -2.28]} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['aparat-darker']} position={[-0.17, 8.99, -1.29]} scale={[-1.61, -2.28, -1.61]} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials['aparat-darker']} position={[8.02, 14.03, 0.92]} scale={[-0.44, -0.63, -0.44]} />
      <mesh geometry={nodes.Cylinder006.geometry} material={materials['aparat-darker']} position={[3.39, 7.53, 11.79]} scale={[-0.76, -1.08, -0.76]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.structures} position={[8.06, 7.25, 0.81]} rotation={[-3.13, 0, 3.14]} scale={[0.13, -9.59, 0.13]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.structures} position={[-0.32, 6.17, 0.05]} rotation={[-0.09, 0.02, -0.01]} scale={[0.13, -3.73, 0.13]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials.structures} position={[-1.24, 6.17, -1.85]} rotation={[0.17, -0.12, -0.2]} scale={[0.13, -3.73, 0.13]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials.structures} position={[3.6, 4.25, 10.87]} rotation={[0.27, -0.16, 0.04]} scale={[0.13, -3.73, 0.13]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials.structures} position={[3.99, 4.29, 12.1]} rotation={[2.72, -1.08, 2.74]} scale={[0.13, -3.73, 0.13]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials.structures} position={[3.06, 4.21, 12.03]} rotation={[2.97, 1.07, -3.01]} scale={[0.13, -3.73, 0.13]} />
      <mesh geometry={nodes.Cylinder007.geometry} material={materials['aparat-light']} position={[4.84, 6.29, 11.27]} rotation={[-0.01, 0, 0.05]} scale={[-0.44, -0.63, -0.44]} />
      <mesh geometry={nodes.Cube009.geometry} material={materials.structures} position={[4.92, 4.27, 11.26]} rotation={[-0.02, 0, 0.04]} scale={[0.13, -2.79, 0.13]} />
      <mesh geometry={nodes.Cube010.geometry} material={materials.structures} position={[8.2, 5.52, 2.03]} rotation={[-0.03, 0.01, 0.01]} scale={[0.13, -9.59, 0.13]} />
      <mesh geometry={nodes.Cube011.geometry} material={materials.structures} position={[7.3, 5.52, 1.63]} rotation={[-0.02, 0, -0.01]} scale={[0.13, -9.59, 0.13]} />
      <mesh geometry={nodes.Cube012.geometry} material={materials.structures} position={[9.87, 5.02, 4.76]} rotation={[-0.01, 0, 0]} scale={[0.13, -7.96, 0.13]} />
      <mesh geometry={nodes.spore.geometry} material={materials.hongos} position={[10.54, 4.41, -0.29]} rotation={[0.06, 0, 0]} scale={[0.24, 0.18, 0.24]} />
      <mesh geometry={nodes.spore001.geometry} material={materials.hongos} position={[10.09, 4.57, -2.05]} scale={[0.24, 0.18, 0.24]} />
      <mesh geometry={nodes.Pore001.geometry} material={materials.bulbs} position={[0.13, 4.82, 11.06]} rotation={[0, 0.78, 0]} scale={0.08} />
      <mesh geometry={nodes.Pore000.geometry} material={materials.bulbs} position={[0.01, 4.65, 11.23]} rotation={[0, 0.55, 0]} scale={0.08} />
      <mesh geometry={nodes.Pore002.geometry} material={materials.bulbs} position={[0.36, 4.58, 10.81]} rotation={[0, 1.28, 0]} scale={0.08} />
      <mesh geometry={nodes.Cylinder008.geometry} material={materials['aparat-light']} position={[-2.06, 6.5, 7.84]} scale={[-1.61, -2.28, -1.61]} />
      <mesh geometry={nodes.Cylinder009.geometry} material={materials['aparat-darker']} position={[0.65, 4.6, 8.11]} scale={[-1.61, -2.28, -1.61]} />
      <mesh geometry={nodes.Cylinder010.geometry} material={materials['aparat-darker']} position={[2.35, 5.25, 5.9]} scale={[-1.61, -2.28, -1.61]} />
      <mesh geometry={nodes.Cylinder011.geometry} material={materials['aparat-darker']} position={[-2.05, 8.82, -5.43]} scale={[-3.38, -4.8, -3.38]} />
      <mesh geometry={nodes.Cylinder012.geometry} material={materials['aparat-darker']} position={[8.89, 4.79, 9.7]} scale={[-1.87, -2.65, -1.87]} />
      <mesh geometry={nodes.Cylinder013.geometry} material={materials['aparat-darker']} position={[-7.78, 6.16, -0.08]} scale={[-1.87, -2.65, -1.87]} />
      <mesh geometry={nodes.Cylinder014.geometry} material={materials['aparat-light']} position={[-8.23, 4.71, 2.48]} scale={[-1.53, -2.17, -1.53]} />
      <mesh geometry={nodes.Cube013.geometry} material={materials.wood} position={[-4.69, 10.53, -5.03]} rotation={[-0.01, 0.24, 0.3]} scale={[1.98, -0.39, 1.98]} />
      <mesh geometry={nodes.Cube014.geometry} material={materials['stepping stone']} position={[-12.74, 1.58, -10.53]} rotation={[-Math.PI, -0.08, -Math.PI]} scale={2.13} />
      <mesh geometry={nodes.Cube015.geometry} material={materials['stepping stone']} position={[-16.62, 0.32, -10.17]} rotation={[Math.PI, -1.19, Math.PI]} scale={1.63} />
      <mesh geometry={nodes.Cube018.geometry} material={materials.structures} position={[-14.42, 4.21, -6.05]} rotation={[2.78, 1.34, -2.81]} scale={[0.13, -3.73, 0.13]} />
      <mesh geometry={nodes.Cube017.geometry} material={materials.structures} position={[-13.92, 4.27, -6.83]} rotation={[0.15, -0.13, 0.06]} scale={[0.13, -3.73, 0.13]} />
      <mesh geometry={nodes.Cube016.geometry} material={materials.structures} position={[-13.48, 4.29, -5.98]} rotation={[2.79, -0.98, 2.83]} scale={[0.13, -3.73, 0.13]} />
      <mesh geometry={nodes.Cylinder015.geometry} material={materials['aparat-darker']} position={[-14.08, 7.53, -6.3]} scale={[-0.76, -1.08, -0.76]} />
      <mesh geometry={nodes.Cube019.geometry} material={materials.structures} position={[-14.83, 2.88, -7.99]} rotation={[-3.01, 1.36, 3.02]} scale={[0.13, -3.73, 0.13]} />
      <mesh geometry={nodes.Cube022.geometry} material={materials.structures} position={[-16.44, 0.57, -7.5]} rotation={[2.86, 1.27, -2.79]} scale={[0.13, -3.73, 0.13]} />
      <mesh geometry={nodes.spore002.geometry} material={materials.hongos} position={[-5, 4.32, -8.68]} rotation={[-2.9, 1.31, 2.73]} scale={[0.24, 0.18, 0.24]} />
      <mesh geometry={nodes.spore003.geometry} material={materials.hongos} position={[-10.56, 3.54, 1.39]} rotation={[-0.96, 1.41, 1.16]} scale={[0.24, 0.18, 0.24]} />
      <mesh geometry={nodes.Cube023.geometry} material={materials.structures} position={[-2.27, 7.25, 5.88]} rotation={[-3.13, 0, 3.14]} scale={[0.13, -9.59, 0.13]} />
      <mesh geometry={nodes.Cube021.geometry} material={materials.structures} position={[-2.02, 5.52, 8.05]} rotation={[-0.03, 0.01, 0.01]} scale={[0.13, -9.59, 0.13]} />
      <mesh geometry={nodes.Cube020.geometry} material={materials.structures} position={[-3.04, 5.52, 6.28]} rotation={[-0.02, 0, -0.01]} scale={[0.13, -9.59, 0.13]} />
      <mesh geometry={nodes.Cube026.geometry} material={materials.structures} position={[-6.62, 7.25, -7.01]} rotation={[-3.13, 0, 3.14]} scale={[0.13, -9.59, 0.13]} />
      <mesh geometry={nodes.Cube025.geometry} material={materials.structures} position={[-6.48, 4.86, -5.78]} rotation={[-0.03, 0.01, 0.01]} scale={[0.13, -9.59, 0.13]} />
      <mesh geometry={nodes.Cube024.geometry} material={materials.structures} position={[-7.37, 5.52, -6.18]} rotation={[-0.02, 0, -0.01]} scale={[0.13, -9.59, 0.13]} />
      <mesh geometry={nodes.Cube027.geometry} material={materials.structures} position={[0.3, 6.31, 7.96]} rotation={[-3.13, 0, 3.14]} scale={[0.13, -9.59, 0.13]} />
      <mesh geometry={nodes.Cube028.geometry} material={materials.structures} position={[-1.54, 9.59, 7.94]} rotation={[0.27, -0.08, -1.77]} scale={[0.13, -2.67, 0.13]} />
      <mesh geometry={nodes.Cube029.geometry} material={materials.structures} position={[8.14, 9.56, 1.68]} rotation={[1.7, 1.31, 2.67]} scale={[0.13, -1.33, 0.13]} />
      <mesh geometry={nodes.Pore003.geometry} material={materials.bulbs} position={[-2.51, 4.26, 10.29]} rotation={[0, -0.34, 0]} scale={0.08} />
      <mesh geometry={nodes.Plane002.geometry} material={materials.pink} position={[-2.64, 3.2, 10.26]} rotation={[0.11, 0.3, 0.3]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials.pink} position={[-2.75, 3.34, 9.93]} rotation={[-2.78, 0.97, 2.77]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Icosphere005.geometry} material={materials.bush} position={[2.91, 3.85, 8.13]} rotation={[0.17, -0.93, 0.01]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere000.geometry} material={materials.bush} position={[2.98, 3.71, 12.55]} rotation={[0.17, -0.93, 0.01]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere001.geometry} material={materials.bush} position={[3.09, 3.71, 11.44]} rotation={[3.04, 0.03, 3.02]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere002.geometry} material={materials.bush} position={[-0.88, 3.63, 9.68]} rotation={[3.12, -1.05, 2.99]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere003.geometry} material={materials.bush} position={[4.92, 3.67, 10.94]} rotation={[-3.01, 0.02, -3.11]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere004.geometry} material={materials.bush} position={[1.99, 3.89, 8.89]} rotation={[-2.89, 0.91, 3.08]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere006.geometry} material={materials.bush} position={[2.26, 4.14, 8.14]} rotation={[0.04, -1.35, -0.03]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere007.geometry} material={materials.bush} position={[-1.92, 3.48, 9.15]} rotation={[-0.95, 1.19, 1.22]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere008.geometry} material={materials.bush} position={[7.12, 3.57, 9.96]} rotation={[-2.93, 0.04, -3.07]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere009.geometry} material={materials.bush} position={[7.4, 3.67, 8.93]} rotation={[-2.97, 0.73, 3.06]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Plane006.geometry} material={materials.pink} position={[-3.08, 3.13, 9.35]} rotation={[-2.88, 0.88, 2.57]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane007.geometry} material={materials.pink} position={[-1.28, 3.29, 12.82]} rotation={[-0.36, 0.84, 0.59]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane008.geometry} material={materials.pink} position={[3.55, 3.59, 13.41]} rotation={[-2.3, -0.96, -2.71]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane009.geometry} material={materials.pink} position={[3.74, 3.75, 13.06]} rotation={[1.91, 1.39, -1.64]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane010.geometry} material={materials.pink} position={[3.24, 3.66, 13.56]} rotation={[0.15, -0.23, -0.17]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane011.geometry} material={materials.pink} position={[3.08, 3.56, 14.04]} rotation={[2.23, 1.25, -2.09]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Pore006.geometry} material={materials.bulbs} position={[7.33, 4.74, 7.63]} rotation={[Math.PI, -0.37, Math.PI]} scale={0.08} />
      <mesh geometry={nodes.Pore005.geometry} material={materials.bulbs} position={[9.78, 4.61, 7.43]} rotation={[3.03, 0.24, 3.04]} scale={0.08} />
      <mesh geometry={nodes.Pore004.geometry} material={materials.bulbs} position={[7.06, 4.66, 7.97]} rotation={[Math.PI, -1.1, Math.PI]} scale={0.08} />
      <mesh geometry={nodes.Icosphere010.geometry} material={materials.bush} position={[0.41, 4.47, 5.76]} rotation={[0.43, -0.95, 0.16]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere011.geometry} material={materials.bush} position={[-0.9, 4.47, 6.26]} rotation={[2.83, 0.67, 3.14]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere012.geometry} material={materials.bush} position={[-0.02, 4.88, 6.64]} rotation={[-2.23, 1.46, 2.23]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere013.geometry} material={materials.bush} position={[-1.4, 5.44, -2.25]} rotation={[-2.71, 1.17, 2.69]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere014.geometry} material={materials.bush} position={[-0.76, 5.36, -0.77]} rotation={[-2.71, 1.17, 2.69]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere015.geometry} material={materials.bush} position={[0.55, 5.36, -0.75]} rotation={[-1.99, 1.39, 1.95]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere016.geometry} material={materials.bush} position={[-0.58, 5.85, -1.67]} rotation={[-2.71, 1.17, 2.69]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere017.geometry} material={materials.bush} position={[0.27, 5.77, -1.58]} rotation={[-2.96, 0.39, 3.02]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere018.geometry} material={materials.bush} position={[9.15, 3.38, 8.15]} rotation={[-3.08, 0.71, -2.85]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Plane013.geometry} material={materials.pink} position={[10.41, 3.58, 7.15]} rotation={[-2.24, -0.9, -2.49]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane014.geometry} material={materials.pink} position={[10.17, 3.59, 7.72]} rotation={[-0.35, -1.11, -0.9]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane015.geometry} material={materials.pink} position={[10.34, 3.35, 7.77]} rotation={[-2, -0.88, -2.25]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane016.geometry} material={materials.pink} position={[10.77, 3.51, 7.1]} rotation={[-0.57, -0.82, -1.23]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane017.geometry} material={materials.pink} position={[10.17, 3.47, 8.04]} rotation={[-2.3, -0.99, -2.58]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane018.geometry} material={materials.pink} position={[11.79, 3.26, 5.39]} rotation={[-0.42, -0.46, -0.99]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Icosphere019.geometry} material={materials.bush} position={[10.12, 4.28, 2.22]} rotation={[0.07, -0.91, -0.41]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere020.geometry} material={materials.bush} position={[9.15, 4.08, 3.34]} rotation={[-2.47, -0.9, -2.71]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere021.geometry} material={materials.bush} position={[8.11, 4.19, 3.49]} rotation={[0.49, 0.54, -0.14]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere022.geometry} material={materials.bush} position={[7.16, 4.28, 3.65]} rotation={[-2.81, -0.24, -2.84]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere023.geometry} material={materials.bush} position={[1.09, 4.63, -6.06]} rotation={[2.16, 1.45, -2.52]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere024.geometry} material={materials.bush} position={[1.25, 5.09, -4.53]} rotation={[2.82, 0.51, -3.09]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere025.geometry} material={materials.bush} position={[0.86, 5.09, -5.32]} rotation={[0.21, 1.05, -0.54]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere026.geometry} material={materials.bush} position={[1.04, 5.97, -2.73]} rotation={[-2.25, 1.48, 2.17]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere027.geometry} material={materials.bush} position={[2.44, 5.23, -3.79]} rotation={[-0.24, -0.89, 0.03]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere028.geometry} material={materials.bush} position={[1.5, 5.79, -3.48]} rotation={[2.16, 1.45, -2.52]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere029.geometry} material={materials.bush} position={[-0.11, 4.34, -6.26]} rotation={[2.8, 0.39, -3.1]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Cube030.geometry} material={materials.stone} position={[9.22, 3.41, 1.85]} rotation={[1.76, -0.5, 1.25]} scale={[1.27, 1.29, 1.58]} />
      <mesh geometry={nodes.Cube031.geometry} material={materials.stone} position={[7.77, 4.82, 2.45]} rotation={[1.4, -0.51, 0.52]} scale={0.94} />
      <mesh geometry={nodes.Cube033.geometry} material={materials.stone} position={[7.93, 7.08, -4.42]} rotation={[1.04, 0.07, -0.82]} scale={1.92} />
      <mesh geometry={nodes.Cube035.geometry} material={materials.stone} position={[5.96, 6.94, -6.03]} rotation={[1.9, 0.43, -2.96]} scale={1.92} />
      <mesh geometry={nodes.Cube037.geometry} material={materials.stone} position={[9.22, 6.96, 0.78]} rotation={[1.07, 0.38, -0.86]} scale={1.32} />
      <mesh geometry={nodes.Icosphere030.geometry} material={materials.bush} position={[-3.12, 4.51, -7.07]} rotation={[2.9, -0.03, -3.08]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere031.geometry} material={materials.bush} position={[-5.07, 5.15, -5.1]} rotation={[-2.74, 1.16, 2.67]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere032.geometry} material={materials.bush} position={[-5.45, 5.08, -5.83]} rotation={[-0.11, -0.17, 0.31]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere033.geometry} material={materials.bush} position={[-4.82, 4.7, -6.32]} rotation={[2.93, 1.22, 3.06]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere034.geometry} material={materials.bush} position={[-9, 4.61, 1.18]} rotation={[0.3, -1.35, 0.19]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere035.geometry} material={materials.bush} position={[-6.52, 4.51, -6.89]} rotation={[2.93, 1.22, 3.06]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere036.geometry} material={materials.bush} position={[-6.41, 4.89, -5.85]} rotation={[2.81, -0.98, 2.75]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere037.geometry} material={materials.bush} position={[-7.32, 4.51, -7.12]} rotation={[-0.02, -0.75, 0.26]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere038.geometry} material={materials.bush} position={[-13.09, 3.73, -5.91]} rotation={[0.22, -0.68, 0.53]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere039.geometry} material={materials.bush} position={[-11.95, 4.03, -6.16]} rotation={[-3.07, 0.66, 2.85]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere040.geometry} material={materials.bush} position={[-11.95, 4.16, -5.28]} rotation={[0.24, -0.68, 0.45]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere041.geometry} material={materials.bush} position={[-12.35, 4.36, -5.68]} rotation={[2.41, -1.21, 2.37]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Pore008.geometry} material={materials.bulbs} position={[-12.65, 3.87, -11.94]} rotation={[0, -0.04, 0]} scale={0.08} />
      <mesh geometry={nodes.Pore007.geometry} material={materials.bulbs} position={[-12.13, 3.62, -11.92]} rotation={[0, -0.32, 0]} scale={0.08} />
      <mesh geometry={nodes.Pore010.geometry} material={materials.bulbs} position={[-17.65, 2.21, -10.33]} rotation={[0, 0.48, 0]} scale={0.08} />
      <mesh geometry={nodes.Pore009.geometry} material={materials.bulbs} position={[-12.48, 5.05, -6.96]} rotation={[-Math.PI, 0.08, -Math.PI]} scale={0.08} />
      <mesh geometry={nodes.Pore011.geometry} material={materials.bulbs} position={[-12.71, 4.8, -7.12]} rotation={[-Math.PI, 0.24, -Math.PI]} scale={0.08} />
      <mesh geometry={nodes.Pore012.geometry} material={materials.bulbs} position={[-11.98, 4.91, -7.34]} rotation={[-Math.PI, -0.37, -Math.PI]} scale={0.08} />
      <mesh geometry={nodes.Cube036.geometry} material={materials.wood} position={[1.54, 5.98, -5.53]} rotation={[0, 0.02, 0]} scale={[0.23, 0.05, 0.72]} />
      <mesh geometry={nodes.Cube038.geometry} material={materials.wood} position={[2.02, 5.57, -5.54]} rotation={[0, 0.02, 0]} scale={[0.23, 0.05, 0.72]} />
      <mesh geometry={nodes.Cube039.geometry} material={materials.wood} position={[2.51, 5.18, -5.56]} rotation={[0, 0.02, 0]} scale={[0.23, 0.05, 0.72]} />
      <mesh geometry={nodes.Icosphere042.geometry} material={materials.foured} position={[8.94, 5.33, -1.39]} rotation={[0, -0.01, -0.04]} scale={0.23} />
      <mesh geometry={nodes.Icosphere043.geometry} material={materials.foured} position={[8.54, 5.35, -0.76]} rotation={[-0.07, -0.6, -0.13]} scale={0.23} />
      <mesh geometry={nodes.Icosphere044.geometry} material={materials.foured} position={[8.21, 5.33, 0.51]} rotation={[-0.04, -0.61, -0.22]} scale={0.23} />
      <mesh geometry={nodes.Icosphere045.geometry} material={materials.foured} position={[7.61, 5.51, -0.07]} rotation={[2.83, 0.95, -2.78]} scale={0.23} />
      <mesh geometry={nodes.Icosphere046.geometry} material={materials.foured} position={[7.51, 5.2, -3.42]} rotation={[-0.12, 0.22, -0.07]} scale={0.23} />
      <mesh geometry={nodes.Icosphere047.geometry} material={materials.foured} position={[0.17, 3.76, 10.34]} rotation={[-3.07, 1.06, 3.1]} scale={0.23} />
      <mesh geometry={nodes.Icosphere048.geometry} material={materials.foured} position={[8.32, 3.76, 7.72]} rotation={[-3.13, 0.71, -2.99]} scale={0.23} />
      <mesh geometry={nodes.Icosphere049.geometry} material={materials.foured} position={[10.91, 5.06, -0.08]} rotation={[0.15, -0.03, -0.27]} scale={0.23} />
      <mesh geometry={nodes.Icosphere050.geometry} material={materials.foured} position={[8.59, 4.85, -4.15]} rotation={[-0.25, 1.26, -0.24]} scale={0.23} />
      <mesh geometry={nodes.Icosphere051.geometry} material={materials.foured} position={[-3.24, 4.34, -9.94]} rotation={[-0.01, 0.21, -0.09]} scale={0.23} />
      <mesh geometry={nodes.Icosphere052.geometry} material={materials.foured} position={[-2.62, 4.36, -10.85]} rotation={[0.07, -0.45, -0.08]} scale={0.23} />
      <mesh geometry={nodes.Icosphere053.geometry} material={materials.foured} position={[-2.21, 4.19, -9.48]} rotation={[-0.19, -0.44, -0.24]} scale={0.23} />
      <mesh geometry={nodes.Icosphere054.geometry} material={materials.foured} position={[-4.4, 4.38, -9.39]} rotation={[-0.01, -0.47, -0.1]} scale={0.23} />
      <mesh geometry={nodes.Icosphere055.geometry} material={materials.foured} position={[-1.58, 4.23, -8.21]} rotation={[-0.27, 0.26, -0.12]} scale={0.23} />
      <mesh geometry={nodes.Plane021.geometry} material={materials.pink} position={[-0.66, 4.02, -7.92]} rotation={[0.39, 0.85, -1.08]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane022.geometry} material={materials.pink} position={[-0.55, 4.44, -7.33]} rotation={[1.73, 1.31, -2.22]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane023.geometry} material={materials.pink} position={[-0.24, 4.3, -7.26]} rotation={[2.83, -0.15, -3.01]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane024.geometry} material={materials.pink} position={[-2.52, 4.46, -8.26]} rotation={[-0.48, 1.23, 0.04]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane025.geometry} material={materials.pink} position={[-1.55, 4.44, -7.91]} rotation={[2.49, 0.97, -2.97]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane026.geometry} material={materials.pink} position={[-2.21, 4.47, -8.16]} rotation={[2.69, 0.28, -3.01]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane027.geometry} material={materials.pink} position={[-1.71, 4.18, -8.71]} rotation={[0.02, 1.51, -0.48]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Plane028.geometry} material={materials.pink} position={[0.25, 4.32, -7.16]} rotation={[2.76, -0.11, -3.13]} scale={[0.04, 0.04, 0.02]} />
      <mesh geometry={nodes.Icosphere064.geometry} material={materials.foured} position={[-10.33, 4.71, 0.2]} rotation={[0.42, -0.66, 0.4]} scale={0.23} />
      <mesh geometry={nodes.Plane033.geometry} material={materials.blue} position={[-1.56, 3.48, 10.25]} rotation={[0.47, -0.05, -0.13]} scale={[0.1, 0.1, 0.13]} />
      <mesh geometry={nodes.Plane005.geometry} material={materials.blue} position={[7.87, 4.11, 4.29]} rotation={[0.53, 0.47, -0.41]} scale={[0.1, 0.1, 0.13]} />
      <mesh geometry={nodes.Plane020.geometry} material={materials.blue} position={[10.13, 3.87, 3.15]} rotation={[-2.47, -0.3, -2.87]} scale={[0.1, 0.1, 0.13]} />
      <mesh geometry={nodes.Plane019.geometry} material={materials.blue} position={[-1.5, 5.53, -1.24]} rotation={[0.55, -0.5, 0.18]} scale={[0.1, 0.1, 0.13]} />
      <mesh geometry={nodes.Plane012.geometry} material={materials.blue} position={[-0.09, 5.89, -0.94]} rotation={[0.49, -0.14, -0.3]} scale={[0.1, 0.1, 0.13]} />
      <mesh geometry={nodes.Plane035.geometry} material={materials.spiked} position={[-0.45, 4.68, 5.55]} rotation={[-0.51, -0.53, -0.16]} scale={[0.1, 0.1, 0.12]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.spiked} position={[-7.62, 4.77, -6.45]} rotation={[-0.73, 0.75, 0.65]} scale={[0.1, 0.1, 0.12]} />
      <mesh geometry={nodes.Plane029.geometry} material={materials.spiked} position={[-11.52, 4.48, -5.71]} rotation={[-2.81, 0.18, -3.06]} scale={[0.1, 0.1, 0.12]} />
      <mesh geometry={nodes.Plane030.geometry} material={materials.spiked} position={[1.78, 4.47, -6.58]} rotation={[-2.22, -0.85, -1.93]} scale={[0.1, 0.1, 0.12]} />
      <mesh geometry={nodes.Icosphere065.geometry} material={materials.bush} position={[8.9, 3.81, 8.65]} rotation={[-2.64, -0.48, -2.73]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Icosphere066.geometry} material={materials.bush} position={[9.51, 3.09, 9.08]} rotation={[-3.08, 0.71, -2.85]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Cube040.geometry} material={materials.stone} position={[8.38, 1.66, 9.86]} rotation={[1.76, -0.5, 1.25]} scale={[1.27, 1.29, 1.58]} />
      <mesh geometry={nodes.Icosphere067.geometry} material={materials.bush} position={[9.03, 2.68, 10.1]} rotation={[-2.64, -0.48, -2.73]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Plane031.geometry} material={materials.spiked} position={[9.65, 3.6, 9.36]} rotation={[-1.82, -0.5, -2.43]} scale={[0.1, 0.1, 0.12]} />
      <mesh geometry={nodes.Cylinder016.geometry} material={materials.floor} position={[-2.05, 9.53, -5.44]} scale={3.26} />
      <mesh geometry={nodes.Plane032.geometry} material={materials.vines} position={[10.57, 2.09, 9.68]} rotation={[Math.PI / 2, 0, -1.65]} scale={[0.72, 0.72, 1.55]} />
      <mesh geometry={nodes.Plane034.geometry} material={materials.vines} position={[10.52, 2.08, 10.09]} rotation={[1.56, 0, -1.32]} scale={[0.72, 0.72, 1.55]} />
      <mesh geometry={nodes.Plane037.geometry} material={materials.vines} position={[1.11, 2.88, -7.29]} rotation={[Math.PI / 2, 0, -2.91]} scale={[-0.76, 0.81, 1.75]} />
      <mesh geometry={nodes.Plane036.geometry} material={materials.vines} position={[-13.67, 2.24, -6.04]} rotation={[Math.PI / 2, 0, 1.79]} scale={[-0.76, 0.81, 1.75]} />
      <mesh geometry={nodes.Icosphere068.geometry} material={materials.bush} position={[0.95, 4.51, -6.69]} rotation={[-0.62, 0.7, -0.05]} scale={[0.67, 0.32, 0.67]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials.blue} position={[2.29, 3.78, 12]} rotation={[1.33, -1.06, 1.01]} scale={[0.1, 0.1, 0.13]} />
    </group>
  )
}


export default Island