import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Title and Introduction */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Image
              src="/logo.png"
              alt="MIST Logo"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <h1 className="text-h1 uppercase tracking-wide">ABOUT MIST</h1>
          </div>
          <p className="text-h1-subtext max-w-3xl mx-auto">
            Learn how to navigate the mystical realms of Mist and harness the
            power of collective consciousness.
          </p>
        </div>

        {/* What is Mist? */}
        <section className="mb-16">
          <h2 className="text-h2 uppercase tracking-wide mb-6">
            What is Mist?
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4 text-body leading-relaxed">
                <p>
                  Mist is a decentralized platform that bridges the ethereal and
                  digital. Here, communities make decisions not through rigid
                  votes, but through Whispers, Seances, and the Edict Ledger.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary"></span>
                    <span>
                      <strong className="text-body text-white font-bold">
                        Whispers
                      </strong>{" "}
                      are fleeting messages cast into the mist, intent signals
                      that may resonate with others.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary"></span>
                    <span>
                      <strong className="text-body text-white font-bold">
                        Seances
                      </strong>{" "}
                      are ritual gatherings where influence is pooled, shaping
                      outcomes together.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary"></span>
                    <span>
                      <strong className="text-body text-white font-bold">
                        The Edict Ledger
                      </strong>{" "}
                      records every decision, forming an immutable book of
                      collective wisdom.
                    </span>
                  </li>
                </ul>
                <p>
                  The Mist remembers all. Each interaction adds to a tapestry of
                  digital mysticism, where technology becomes a channel for
                  higher understanding and collaborative enlightenment.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-h2 uppercase tracking-wide mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-icons text-4xl text-primary">
                    gradient
                  </span>
                  <CardTitle className="text-h2 uppercase tracking-wide">
                    Mistfield
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  A living canvas of glowing swirls, pulses, and stars — the
                  visualization of collective activity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-icons text-4xl text-primary">
                    chat_bubble
                  </span>
                  <CardTitle className="text-h2 uppercase tracking-wide">
                    Whispers
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  Send short signals into the Mist. Each one consumes Breath and
                  fades unless others reinforce it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-icons text-4xl text-primary">
                    psychology
                  </span>
                  <CardTitle className="text-h2 uppercase tracking-wide">
                    Seances
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  Join ritual circles where tokens + resonance shape outcomes.
                  Watch intentions converge into decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-icons text-4xl text-primary">
                    description
                  </span>
                  <CardTitle className="text-h2 uppercase tracking-wide">
                    Edict Ledger
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  The permanent record of all Mist decisions, viewable as raw
                  blockchain snapshots or parsed, human-readable edicts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-icons text-4xl text-primary">
                    brush
                  </span>
                  <CardTitle className="text-h2 uppercase tracking-wide">
                    Mystical UI
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body">
                  Dark themes, particle systems, and ethereal effects make
                  governance feel alive, not abstract.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <h2 className="text-h2 uppercase tracking-wide mb-8">
            Technology Stack
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-h2-subtext mb-2 uppercase tracking-wide">
                      Frontend
                    </h3>
                    <p className="text-body">
                      React 19, Vite, Tailwind, Socket.IO, HTML5 Canvas
                    </p>
                  </div>
                  <div>
                    <h3 className="text-h2-subtext mb-2 uppercase tracking-wide">
                      AI Engine
                    </h3>
                    <p className="text-body">
                      ElizaOS, OpenAI, Solana integration, custom agents
                    </p>
                  </div>
                  <div>
                    <h3 className="text-h2-subtext mb-2 uppercase tracking-wide">
                      Communication
                    </h3>
                    <p className="text-body">
                      Socket.IO, Twitter API, Webhooks
                    </p>
                  </div>
                  <div>
                    <h3 className="text-h2-subtext mb-2 uppercase tracking-wide">
                      Visualization
                    </h3>
                    <p className="text-body">
                      Mistfield particle system, Seance rings, heat maps
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-h2-subtext mb-2 uppercase tracking-wide">
                      Data Storage
                    </h3>
                    <p className="text-body">
                      Local storage, Postgres vector DB, conversation logging
                    </p>
                  </div>
                  <div>
                    <h3 className="text-h2-subtext mb-2 uppercase tracking-wide">
                      Blockchain
                    </h3>
                    <p className="text-body">
                      Solana network for immutable records
                    </p>
                  </div>
                  <div>
                    <h3 className="text-h2-subtext mb-2 uppercase tracking-wide">
                      Performance
                    </h3>
                    <p className="text-body">
                      GPU-accelerated rendering, mobile responsive
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-h2 uppercase tracking-wide mb-8">
            Getting Started
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-h2 mb-2 uppercase tracking-wide">
                      Explore the Mistfield
                    </h3>
                    <p className="text-body">
                      Open the Dashboard to watch the swirls of the Mist respond
                      to community activity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-h2 mb-2 uppercase tracking-wide">
                      Cast Your Whispers
                    </h3>
                    <p className="text-body">
                      Use the Whisper interface to send a message into the Mist.
                      Control how strong it lingers with the Breath slider.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-h2 mb-2 uppercase tracking-wide">
                      Join a Seance
                    </h3>
                    <p className="text-body">
                      Enter the ritual circle and place your influence. Observe
                      how decisions emerge from collective intention.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center border border-primary/30">
                    <span className="text-primary font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-h2 mb-2 uppercase tracking-wide">
                      Consult the Edict Ledger
                    </h3>
                    <p className="text-body">
                      Read the permanent record of decisions — either as raw
                      blockchain snapshots or simplified summaries.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
