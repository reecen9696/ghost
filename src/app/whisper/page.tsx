"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export default function WhisperPage() {
  const [message, setMessage] = useState("");
  const [breath, setBreath] = useState([32]);

  const handleSend = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log("Sending message:", message);
      console.log("Breath value:", breath[0]);
      setMessage(""); // Clear the input after sending
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="flex flex-col min-h-[calc(100vh-4rem)] px-4">
        {/* Top section with title and content area */}
        <div className="flex-1 pt-24">
          <div className="w-full max-w-2xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-h1 uppercase tracking-wide mb-4">WHISPER</h1>

            {/* Subtitle */}
            <p className="text-h1-subtext mb-20">
              Offer your intent to the mist. If it resonates, it lingers.
            </p>

            {/* Content area for future text boxes */}
            <div className="space-y-4 mb-20">
              {/* This is where text boxes/whispers will be displayed */}
            </div>
          </div>
        </div>

        {/* Bottom section with input controls */}
        <div className="w-full max-w-2xl mx-auto pb-8">
          {/* Input and Send Button */}
          <div className="flex gap-3 w-full mb-8">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a short message to the mists..."
              className="flex-1 h-12 bg-card border-border text-card-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-border"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />
            <Button
              onClick={handleSend}
              variant="outline"
              className="h-12 border-border text-button hover:bg-primary hover:text-primary-foreground uppercase tracking-wide px-6"
            >
              SEND
            </Button>
          </div>

          {/* Breath Slider Section */}
          <div className="space-y-4 w-full">
            <div className="flex justify-between items-center">
              <span className="text-button uppercase tracking-wide">
                BREATH
              </span>
              <span className="text-button">{breath[0]}</span>
            </div>

            <Slider
              value={breath}
              onValueChange={setBreath}
              max={100}
              min={1}
              step={1}
              className="w-full"
            />

            <p className="text-body text-left">
              Whispers decay unless reinforced.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
