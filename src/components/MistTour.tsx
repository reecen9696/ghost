"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TourStep {
  title: string;
  subtitle: string;
  body: string;
}

const tourSteps: TourStep[] = [
  {
    title: "Welcome to the Mist",
    subtitle: "You are entering the living field of collective consciousness.",
    body: "The Mistfield is the heart of Mist. Here, glowing pulses, swirling lights, and orbs reveal the activity of the community. Every whisper, every ritual, every decision leaves a trace.",
  },
  {
    title: "Cast a Whisper",
    subtitle: "Shape the Mist with your intent.",
    body: "Whispers are short signals you send into the Mist. Use your Breath to determine their strength and how long they linger. Strong whispers resonate with others and can influence future edicts.",
  },
  {
    title: "Join a Seance",
    subtitle: "Decisions are made in the circle.",
    body: "Seances are collective rituals where choices are weighed. Drag your influence into the circle, align with others, and watch new edicts emerge as the Mist records the outcome.",
  },
  {
    title: "Consult the Edict Ledger",
    subtitle: "The Mist remembers everything.",
    body: "All decisions made through whispers and seances are recorded here. You can view them as raw on-chain snapshots or as parsed, human-readable edicts. This immutable record is the memory of the Mist.",
  },
  {
    title: "Learn the Paths of the Mist",
    subtitle: "Guidance is always at hand.",
    body: "Visit the Help & Documentation section to learn more about how the Mist works, its mystical elements, and how to harness its collective power. The Mist will guide those who seek deeper understanding.",
  },
  {
    title: "Connect Your Wallet",
    subtitle: "Your presence shapes the Mist.",
    body: "Connect your wallet to begin. The number of tokens you hold grants you influence in whispers and seances. With every action, you help weave the fabric of the Mist's consciousness.",
  },
];

export default function MistTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [hasSeenTour, setHasSeenTour] = useState(false);

  useEffect(() => {
    // Check if user has seen the tour before
    const hasSeenTourStorage = localStorage.getItem("mistTourSeen");
    if (!hasSeenTourStorage) {
      // Small delay to ensure page has loaded
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setHasSeenTour(true);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    localStorage.setItem("mistTourSeen", "true");
    setIsOpen(false);
    setHasSeenTour(true);
  };

  // Debug function to reset tour (can be called from console)
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).resetMistTour = () => {
        localStorage.removeItem("mistTourSeen");
        setHasSeenTour(false);
        setCurrentStep(0);
        setIsOpen(true);
      };
    }
  }, []);

  const currentStepData = tourSteps[currentStep];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border shadow-2xl h-[600px] flex flex-col">
        {/* Logo at top center */}
        <div className="flex justify-center py-6">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>

        <DialogHeader className="space-y-3 flex-shrink-0 pt-3">
          <div className="space-y-2">
            <DialogTitle className="text-2xl font-bold text-foreground text-center">
              {currentStepData.title}
            </DialogTitle>
            <DialogDescription className="text-lg font-medium text-muted-foreground text-center">
              {currentStepData.subtitle}
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="flex-1 py-4 flex items-center">
          <p className="text-base text-muted-foreground leading-relaxed text-center">
            {currentStepData.body}
          </p>
        </div>

        <DialogFooter className="flex items-center pt-4 flex-shrink-0 relative">
          <div className="absolute left-0 text-sm text-muted-foreground font-medium">
            Step {currentStep + 1} of {tourSteps.length}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 h-10"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 h-10"
            >
              {currentStep === tourSteps.length - 1 ? (
                "Get Started"
              ) : (
                <>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
