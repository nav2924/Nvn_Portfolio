import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/spaceship.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.297}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 0, -5200]} scale={6300}>
            <mesh geometry={nodes['Sci-Fi_Space_Station_Backdrop_0'].geometry} material={materials.Backdrop} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_RoofBackdrop_0'].geometry} material={materials.RoofBackdrop} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_Walls_0'].geometry} material={materials.Walls} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_Floor_0'].geometry} material={materials.Floor} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_ScreensOutside_0'].geometry} material={materials.ScreensOutside} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_Chair_0'].geometry} material={materials.Chair} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_Screens_0'].geometry} material={materials.Screens} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_Seat_0'].geometry} material={materials.Seat} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_Door_0'].geometry} material={materials.Door} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_Window_0'].geometry} material={materials.Window} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_SidesLighting_0'].geometry} material={materials.SidesLighting} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_Black_0'].geometry} material={materials.Black} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_FloorMiddle_0'].geometry} material={materials.FloorMiddle} />
            <mesh geometry={nodes['Sci-Fi_Space_Station_TrimRoof_0'].geometry} material={materials.TrimRoof} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/spaceship.glb')
