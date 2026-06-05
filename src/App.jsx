import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import './App.css'

function OldComputerModel() {
  const { scene } = useGLTF('/models/picua_old-computer.glb')

  return <primitive object={scene} scale={5} position={[0, -5.5, 0]} rotation={[0.08, -0.32, 0]} />
}

function App() {
  return (
    <main className="app-shell">
      <section className="hero-section">
        <img className="brand-mark" src="/images/piCUA.svg" alt="PiCUA" />

        <div className="hero-copy">
          <h1>
            <span>Computer Use AI for</span>
            <mark>Legacy Systems</mark>
          </h1>
        </div>

        <div className="computer-stage" aria-label="3D old computer model">
          <Canvas camera={{ position: [0, 1.1, 6], fov: 35 }}>
            <ambientLight intensity={1.9} />
            <directionalLight position={[4, 5, 5]} intensity={2.8} />
            <directionalLight position={[-4, 2, 3]} intensity={1.2} />
            <OldComputerModel />
            {/* <Environment preset="city" /> */}
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.55} />
          </Canvas>
        </div>

        {/* <div className="prompt-card">
          <span>Describe a task or @ for more options</span>
          <div className="prompt-actions">
            <button type="button" className="context-chip">@ Context</button>
            <button type="button" aria-label="Voice input">⌕</button>
            <button type="button" aria-label="Submit">↑</button>
          </div>
        </div> */}

        <span className="scroll-indicator" aria-hidden="true" />
      </section>
    </main>
  )
}

useGLTF.preload('/models/picua_old-computer.glb')

export default App
