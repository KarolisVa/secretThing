/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF } from "@react-three/drei/useGLTF";

import { useAnimations } from "@react-three/drei/useAnimations";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/burito.gltf");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="metarig" position={[0.02, -0.02, 1.54]} scale={[0.88, 0.88, 0.88]}>
        <primitive object={nodes.spine} />
        <skinnedMesh
          material={materials["Material.026"]}
          geometry={nodes.Mesh.geometry}
          skeleton={nodes.Mesh.skeleton}
        />
        <skinnedMesh
          material={materials["Material.025"]}
          geometry={nodes.Mesh_1.geometry}
          skeleton={nodes.Mesh_1.skeleton}
        />
        <skinnedMesh
          material={materials["Material.027"]}
          geometry={nodes.Mesh_2.geometry}
          skeleton={nodes.Mesh_2.skeleton}
        />
        <skinnedMesh
          material={materials["Material.024"]}
          geometry={nodes.Mesh_3.geometry}
          skeleton={nodes.Mesh_3.skeleton}
        />
        <skinnedMesh
          material={materials["Material.014"]}
          geometry={nodes.Mesh_4.geometry}
          skeleton={nodes.Mesh_4.skeleton}
        />
      </group>
      <group
        position={[0.58, 0.89, 1.62]}
        rotation={[-2.99, -1.13, -3]}
        scale={[0.01, 0.01, 0.01]}
      >
        <primitive object={nodes.Bone} />
        <mesh
          material={materials.LinuxPenguin}
          geometry={nodes["LinuxPenguin(LeftEye)"].geometry}
          position={[1.71, 12.44, 3.31]}
          rotation={[1.89, 0, 0]}
          scale={[1.78, 1.78, 1.78]}
        />
        <mesh
          material={materials.pinguin}
          geometry={nodes["LinuxPenguin(LeftLeg)"].geometry}
          position={[4.3, -7.99, -0.26]}
          scale={[10.15, 10.15, 10.15]}
        />
        <mesh
          material={materials.LinuxPenguin}
          geometry={nodes["LinuxPenguin(LeftLowerEyelid)"].geometry}
          position={[1.63, 12.44, 3.31]}
          rotation={[0, 0, Math.PI]}
          scale={[1.94, 1.94, 1.94]}
        />
        <mesh
          material={materials.LinuxPenguin}
          geometry={nodes["LinuxPenguin(LeftUpperEyelid)"].geometry}
          position={[1.63, 12.44, 3.31]}
          scale={[1.94, 1.94, 1.94]}
        />
        <mesh
          material={materials.pinguin}
          geometry={nodes["LinuxPenguin(LowerBeak)"].geometry}
          position={[0, 9.23, 5.31]}
          rotation={[0.13, 0, Math.PI]}
          scale={[2.2, 2.25, 2.35]}
        />
        <mesh
          material={materials.LinuxPenguin}
          geometry={nodes["LinuxPenguin(RightEye)"].geometry}
          position={[-1.67, 12.44, 3.31]}
          rotation={[1.89, 0, 0]}
          scale={[1.78, 1.78, 1.78]}
        />
        <mesh
          material={materials.pinguin}
          geometry={nodes["LinuxPenguin(RightLeg)"].geometry}
          position={[-4.31, -8.14, -0.24]}
          scale={[10.15, 10.15, 10.15]}
        />
        <mesh
          material={materials.LinuxPenguin}
          geometry={nodes["LinuxPenguin(RightLowerEyelid)"].geometry}
          position={[-1.67, 12.44, 3.31]}
          rotation={[0, 0, Math.PI]}
          scale={[1.94, 1.94, 1.94]}
        />
        <mesh
          material={materials.LinuxPenguin}
          geometry={nodes["LinuxPenguin(RightUpperEyelid)"].geometry}
          position={[-1.67, 12.44, 3.31]}
          scale={[1.94, 1.94, 1.94]}
        />
        <mesh
          material={materials.LinuxPenguin}
          geometry={nodes["LinuxPenguin(Tongue)"].geometry}
          position={[-0.04, 7.6, 2.07]}
          scale={[10.15, 10.15, 10.15]}
        />
        <mesh
          material={materials.pinguin}
          geometry={nodes["LinuxPenguin(UpperBeak)"].geometry}
          position={[0, 10.23, 5.31]}
          scale={[2.2, 2.25, 2.56]}
        />
        <skinnedMesh
          name="LinuxPenguin(Torso)_1"
          material={materials["Material.037"]}
          geometry={nodes["LinuxPenguin(Torso)_1"].geometry}
          skeleton={nodes["LinuxPenguin(Torso)_1"].skeleton}
          morphTargetDictionary={nodes["LinuxPenguin(Torso)_1"].morphTargetDictionary}
          morphTargetInfluences={nodes["LinuxPenguin(Torso)_1"].morphTargetInfluences}
        />
        <skinnedMesh
          name="LinuxPenguin(Torso)_2"
          material={materials["Material.038"]}
          geometry={nodes["LinuxPenguin(Torso)_2"].geometry}
          skeleton={nodes["LinuxPenguin(Torso)_2"].skeleton}
          morphTargetDictionary={nodes["LinuxPenguin(Torso)_2"].morphTargetDictionary}
          morphTargetInfluences={nodes["LinuxPenguin(Torso)_2"].morphTargetInfluences}
        />
      </group>
      <group
        position={[-0.71, 0.81, 1.7]}
        rotation={[Math.PI, -0.34, Math.PI]}
        scale={[0.04, 0.02, 0.04]}
      >
        <mesh material={materials["Material.002"]} geometry={nodes.Text.geometry} />
        <mesh material={materials["Material.045"]} geometry={nodes.Text_1.geometry} />
        <mesh material={materials["Material.004"]} geometry={nodes.Text_2.geometry} />
        <mesh material={materials["Material.005"]} geometry={nodes.Text_3.geometry} />
        <mesh material={materials.Spoon} geometry={nodes.Text_4.geometry} />
        <mesh material={materials["Material.006"]} geometry={nodes.Text_5.geometry} />
        <mesh
          material={materials.selenium_logo_square_green}
          geometry={nodes.Text_6.geometry}
        />
      </group>
      <group
        position={[-0.58, 0.57, 2.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.57, 0.57, 0.57]}
      >
        <mesh
          material={materials["Material.033"]}
          geometry={nodes.Circle001_1.geometry}
        />
        <mesh
          material={materials["Material.034"]}
          geometry={nodes.Circle001_2.geometry}
        />
      </group>
      <mesh
        material={materials["Material.016"]}
        geometry={nodes.Mesh1ModloftMercerSideChair1Model001.geometry}
        position={[0.06, 0.44, 0.88]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.001, 0.001, 0.001]}
      />
      <mesh
        material={materials["Material.017"]}
        geometry={nodes.Mesh2ModloftMercerSideChair1Model.geometry}
        position={[0.06, 0.65, 0.88]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.001, 0.001, 0.001]}
      />
      <mesh
        material={materials["Material.016"]}
        geometry={nodes.Mesh3ModloftMercerSideChair1Model.geometry}
        position={[0.06, 0.45, 1.23]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.001, 0.001, 0.001]}
      />
      <group position={[0.02, 0.34, 1.79]} scale={[0.02, 0.41, 0.02]}>
        <mesh
          material={materials["Material.036"]}
          geometry={nodes.Cylinder004.geometry}
        />
        <mesh
          material={materials["Material.028"]}
          geometry={nodes.Cylinder004_1.geometry}
        />
      </group>
      <group
        position={[0.01, 1.16, 1.98]}
        rotation={[Math.PI / 2, 0, 2.76]}
        scale={[0.46, 0.27, 0.27]}
      >
        <mesh material={materials["Material.029"]} geometry={nodes.Plane001_1.geometry} />
        <mesh material={materials["Material.035"]} geometry={nodes.Plane001_2.geometry} />
      </group>
      <mesh
        name="Plane001"
        material={materials["Material.013"]}
        geometry={nodes.Plane001.geometry}
        position={[0.06, 1.18, 1.95]}
        rotation={[-0.88, -0.99, 0.8]}
        scale={[0.24, 0.24, 0.24]}
      />
      <group position={[-0.27, 0.09, -0.38]} scale={[0.61, 0.61, 0.61]}>
        <mesh material={materials["Material.020"]} geometry={nodes.Plane004_1.geometry} />
        <mesh material={materials["Material.022"]} geometry={nodes.Plane004_2.geometry} />
        <mesh material={materials["Material.019"]} geometry={nodes.Plane004_3.geometry} />
        <mesh material={materials["Material.018"]} geometry={nodes.Plane004_4.geometry} />
      </group>
      <mesh
        name="Plane004"
        material={materials["Material.013"]}
        geometry={nodes.Plane004.geometry}
        position={[-0.11, 1.04, 2.02]}
        rotation={[1.48, -0.25, 2.76]}
        scale={[0.24, 0.24, 0.24]}
      />
      <mesh
        material={materials["Material.030"]}
        geometry={nodes.Body.geometry}
        position={[0, 0.79, 1.64]}
        rotation={[Math.PI, -0.09, Math.PI]}
        scale={[0.09, 0.09, 0.09]}
      >
        <mesh
          material={materials["Material.031"]}
          geometry={nodes.Keycaps.geometry}
          position={[-3.4, 0.17, -0.53]}
          scale={[0.15, 0.15, 0.15]}
        />
      </mesh>
      <mesh
        material={materials["Material.021"]}
        geometry={nodes.Circle001.geometry}
        position={[-0.16, 0.05, -0.53]}
        rotation={[-0.03, 0, 0]}
        scale={[0.31, 0.31, 0.31]}
      />
      <mesh
        material={materials["Material.032"]}
        geometry={nodes.Mouse.geometry}
        position={[-0.28, 0.79, 1.76]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.01, 0.01, 0.01]}
      />
      <mesh
        material={materials.black}
        geometry={nodes.Sphere.geometry}
        position={[0.55, 1.02, 1.58]}
        rotation={[-0.02, -0.7, -0.08]}
        scale={[0, 0.01, 0.01]}
      />
      <mesh
        material={materials.black}
        geometry={nodes.Sphere001.geometry}
        position={[0.53, 1.02, 1.63]}
        rotation={[0.02, -0.09, -0.06]}
        scale={[0, 0.01, 0.01]}
      />
      <group
        position={[0.55, 0.91, 1.51]}
        rotation={[-0.15, -0.73, 1.45]}
        scale={[0.03, 0.03, 0.03]}
      >
        <mesh material={materials["Material.041"]} geometry={nodes.Plane_1.geometry} />
        <mesh material={materials["Material.042"]} geometry={nodes.Plane_2.geometry} />
        <mesh material={materials["Material.039"]} geometry={nodes.Plane_3.geometry} />
        <mesh material={materials["Material.040"]} geometry={nodes.Plane_4.geometry} />
      </group>
    </group>
  );
}

useGLTF.preload("/burito.gltf");
