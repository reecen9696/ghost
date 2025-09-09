"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const MistfieldGuide = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="bg-black hover:bg-black/80 text-button border border-border uppercase tracking-wide font-medium px-6 py-3">
            <div className="flex items-center gap-2 metallic-text-gradient">
              <span className="material-icons text-xl">
                gradient
              </span>
              GUIDE
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-96 max-w-md">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="text-h2-subtext leading-none uppercase tracking-wide">
                MISTFIELD GUIDE
              </h4>
              <p className="text-body">
                Welcome, wanderer. You stand before the living field of the Mist
                — a swirling canvas where thoughts, rituals, and echoes take
                form.
              </p>
            </div>

            <div className="grid gap-4">
              <div>
                <h4 className="text-h2-subtext mb-3 uppercase tracking-wide">
                  What You See
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-card-foreground text-xs mb-1">
                      Glowing Pulses
                    </h5>
                    <p className="text-body leading-relaxed">
                      Each pulse is a Whisper cast into the Mist. The brighter
                      it glows, the stronger its resonance with others.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium text-card-foreground text-xs mb-1">
                      Swirls of Light
                    </h5>
                    <p className="text-body leading-relaxed">
                      These are the currents of activity — the collective breath
                      of the community as intentions shift and align.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-h2-subtext mb-1">Orbs of Power</h5>
                    <p className="text-body leading-relaxed">
                      The larger circles are Seances. Within them, choices are
                      weighed, and new edicts are born.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-h2-subtext mb-1">The Faint Glow</h5>
                    <p className="text-body leading-relaxed">
                      Empty stars represent open space — waiting for new
                      whispers, new rituals, and new intent.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-h2-subtext mb-3 uppercase tracking-wide">
                  How to Interact
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span className="text-body">
                      <strong>Hover or tap a pulse</strong> → reveal a Whisper.
                      See who cast it, how much Breath it carries, and when it
                      was spoken.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span className="text-body">
                      <strong>Click an orb</strong> → enter the Seance Ring.
                      Cast your influence and witness the collective decision.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span className="text-body">
                      <strong>Follow the currents</strong> → watch how whispers
                      gather, merge, or fade. The stronger the flow, the more
                      the Mist converges.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center pt-2 border-t border-border">
                <p className="text-body italic">
                  The Mist remembers all. What will you leave behind in its
                  swirls?
                </p>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MistfieldGuide;
