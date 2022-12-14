/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/walkingMan.glb')
  const { actions } = useAnimations(animations, group)
  const [walking, setWalking] = useState(false);
  console.log(walking)
  const walkingEvent = ()=>{
    window.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowUp'){
        setWalking(true)
        
      }
    })
  }
  const stopWalking = ()=>{
    window.addEventListener('keyup', (e)=>{
      setWalking(false)
     
    })
  }
  walkingEvent();
  stopWalking()
  useEffect(()=>{
  
    if(walking){

      actions.walk.play()
      
    }
    if(!walking){

      actions.walk.stop()
    }
  },[walking, actions])
  return (
    <group ref={group} {...props} dispose={null} >
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.0051}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Body" geometry={nodes.Body.geometry} material={materials.Bodymat} skeleton={nodes.Body.skeleton} />
          <skinnedMesh name="Bottoms" geometry={nodes.Bottoms.geometry} material={materials.Bottommat} skeleton={nodes.Bottoms.skeleton} />
          <skinnedMesh name="Eyelashes" geometry={nodes.Eyelashes.geometry} material={materials.Eyelashmat} skeleton={nodes.Eyelashes.skeleton} />
          <skinnedMesh name="Eyes" geometry={nodes.Eyes.geometry} material={materials.Bodymat} skeleton={nodes.Eyes.skeleton} />
          <skinnedMesh name="Hair" geometry={nodes.Hair.geometry} material={materials.Hairmat} skeleton={nodes.Hair.skeleton} />
          <skinnedMesh name="Shoes" geometry={nodes.Shoes.geometry} material={materials.Shoesmat} skeleton={nodes.Shoes.skeleton} />
          <skinnedMesh name="Tops" geometry={nodes.Tops.geometry} material={materials.Topmat} skeleton={nodes.Tops.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/walkingMan.glb')

