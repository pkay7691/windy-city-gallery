import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/gallery1.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="robin2"
          castShadow
          receiveShadow
          geometry={nodes.robin2.geometry}
          material={materials.robin2}
          position={[4.916, 1.378, -2.498]}
          rotation={[Math.PI / 2, 0, 1.578]}
        />
        <mesh
          name="bearchamp"
          castShadow
          receiveShadow
          geometry={nodes.bearchamp.geometry}
          material={materials.bearchamp}
          position={[-4.988, 1.556, 2.762]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="vivian_1"
          castShadow
          receiveShadow
          geometry={nodes.vivian_1.geometry}
          material={materials["vivian 1"]}
          position={[-4.973, 1.525, 0.249]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="moosebubble"
          castShadow
          receiveShadow
          geometry={nodes.moosebubble.geometry}
          material={materials.moosebubble}
          position={[-4.917, 1.47, -2.127]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="greetigns"
          castShadow
          receiveShadow
          geometry={nodes.greetigns.geometry}
          material={materials.greetigns}
          position={[2.899, 1.505, -4.971]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Muddy-Waters-Mural-artist-Eduardo-Kobra-website_1"
          castShadow
          receiveShadow
          geometry={
            nodes["Muddy-Waters-Mural-artist-Eduardo-Kobra-website_1"].geometry
          }
          material={
            materials["Muddy-Waters-Mural-artist-Eduardo-Kobra-website 1"]
          }
          position={[-3.926, 1.434, -4.952]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1.69, 1, 1.67]}
        />
        <mesh
          name="marilyn"
          castShadow
          receiveShadow
          geometry={nodes.marilyn.geometry}
          material={materials.marilyn}
          position={[4.954, 1.451, 0.138]}
          rotation={[1.573, 0, Math.PI / 2]}
        />
        <mesh
          name="essentialworkers"
          castShadow
          receiveShadow
          geometry={nodes.essentialworkers.geometry}
          material={materials.essentialworkers}
          position={[0.384, 1.296, -4.971]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="essentialworkers2"
          castShadow
          receiveShadow
          geometry={nodes.essentialworkers2.geometry}
          material={materials.essentialworkers2}
          position={[1.161, 1.296, -4.971]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="frida"
          castShadow
          receiveShadow
          geometry={nodes.frida.geometry}
          material={materials.frida}
          position={[-1.512, 1.436, -4.952]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="pilsenmural"
          castShadow
          receiveShadow
          geometry={nodes.pilsenmural.geometry}
          material={materials.pilsenmural}
          position={[4.994, 1.402, 2.708]}
          rotation={[Math.PI / 2, 0, 1.576]}
        />
        <mesh
          name="Cube"
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
        />
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="bd889dc098c745e4b987498a70e54ef5fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode">
              <group
                name="VR_Gallery"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  name="VR_Gallery_VR_Gallery_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.VR_Gallery_VR_Gallery_0.geometry}
                  material={materials.VR_Gallery}
                  position={[0.003, -0.028, -0.002]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/gallery1.glb");
