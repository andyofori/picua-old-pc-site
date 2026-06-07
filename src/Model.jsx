import { useEffect, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { SRGBColorSpace, VideoTexture } from 'three'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/picua_old-computer.glb')
  const screenTexture = useMemo(() => {
    const video = document.createElement('video')
    video.src = '/models/screen-video-windowsxp.mp4'
    video.crossOrigin = 'anonymous'
    video.loop = true
    video.muted = true
    video.playsInline = true
    video.autoplay = true

    const texture = new VideoTexture(video)
    texture.colorSpace = SRGBColorSpace
    texture.center.set(0.5, 0.5)
    texture.rotation = Math.PI
    texture.repeat.set(-1, 1)
    texture.offset.set(0, 0)

    return texture
  }, [])

  useEffect(() => {
    screenTexture.image.play()

    return () => {
      screenTexture.image.pause()
      screenTexture.dispose()
    }
  }, [screenTexture])

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SCREEN001.geometry}
        position={[0, 1.174, -0.106]}
        rotation={[1.504, 0, 0]}
        scale={0.17}
      >
        <meshBasicMaterial map={screenTexture} toneMapped={false} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.monitor_base.geometry}
        material={materials['old-computer']}
        position={[0, 1.076, -0.246]}
        scale={0.266}
      />
      <group position={[0.275, 0.846, -0.254]} scale={0.319}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials['monitor-base']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_1.geometry}
          material={materials['pikua - emission']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_2.geometry}
          material={materials.plug}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009_3.geometry}
          material={materials.cord}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/picua_old-computer.glb')
