import React from 'react'
import { Stars } from '@react-three/drei'

export const StarsComponent = () => {
  return (
    <Stars 
      radius={300} 
      depth={60} 
      count={20_000}
      factor={7}
      saturation={0}
      fade={true}
    />
  )
}
