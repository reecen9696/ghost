import Navbar from "@/components/Navbar";
import MistfieldGuide from "@/components/MistfieldGuide";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Particles Background */}
      <div
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={3}
          speed={1.5}
          particleBaseSize={2}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        {/* Only show guide on home page */}
        <MistfieldGuide />
      </div>
    </main>
  );
}
