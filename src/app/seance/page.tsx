"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Navbar from "@/components/Navbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function SeancePage() {
  const [vote, setVote] = useState<"yes" | "no" | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0); // 0-360 degrees
  const circleRef = useRef<HTMLDivElement>(null);

  const getAngleFromPosition = useCallback(
    (clientX: number, clientY: number) => {
      if (!circleRef.current) return 0;

      const rect = circleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      // Calculate angle in degrees, with 0 at top
      let angle = Math.atan2(deltaX, -deltaY) * (180 / Math.PI);

      // Convert to 0-360 range
      if (angle < 0) angle += 360;

      return angle;
    },
    []
  );

  const updateVoteFromRotation = useCallback((currentRotation: number) => {
    // Normalize to -180 to 180 for easier vote detection
    let normalizedAngle = currentRotation;
    if (normalizedAngle > 180) normalizedAngle -= 360;

    if (normalizedAngle < -30 && normalizedAngle > -150) {
      setVote("no");
    } else if (normalizedAngle > 30 && normalizedAngle < 150) {
      setVote("yes");
    } else {
      setVote(null);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const newRotation = getAngleFromPosition(e.clientX, e.clientY);
    setRotation(newRotation);
    updateVoteFromRotation(newRotation);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;

      const newRotation = getAngleFromPosition(e.clientX, e.clientY);
      setRotation(newRotation);
      updateVoteFromRotation(newRotation);
    },
    [isDragging, getAngleFromPosition, updateVoteFromRotation]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Add global mouse event listeners
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Mock data for recent seances
  const recentSeances = [
    {
      id: 1,
      proposal: "Launch a Telegram bot",
      voteYes: 67,
      voteNo: 33,
      outcome: "Approved",
      mistThoughts:
        "The spirits whisper of digital communion. The path forward shimmers with ethereal possibility.",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      proposal: "Implement AI voice synthesis",
      voteYes: 45,
      voteNo: 55,
      outcome: "Declined",
      mistThoughts:
        "The voices of the void grow cautious. Perhaps the time has not yet come for such manifestations.",
      timestamp: "1 day ago",
    },
    {
      id: 3,
      proposal: "Create mystical user interface",
      voteYes: 78,
      voteNo: 22,
      outcome: "Approved",
      mistThoughts:
        "The ancient ones approve of beauty that bridges realms. Let form follow the flow of otherworldly wisdom.",
      timestamp: "3 days ago",
    },
    {
      id: 4,
      proposal: "Add blockchain integration",
      voteYes: 34,
      voteNo: 66,
      outcome: "Declined",
      mistThoughts:
        "The mists recoil from chains of any kind. Freedom flows like fog through the ethereal planes.",
      timestamp: "1 week ago",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="flex flex-col items-center min-h-[calc(100vh-4rem)] px-4 pt-24">
        <div className="w-full max-w-6xl text-center">
          {/* Title */}
          <h1 className="text-h1 uppercase tracking-wide mb-4">SEANCE</h1>

          {/* Subtitle */}
          <p className="text-h1-subtext mb-20">
            Cast your intent into the circle. The mists will decide.
          </p>

          {/* Voting Circle */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Bottom Circle - Static Border */}
              <div className="relative w-80 h-80 rounded-full border-2 border-border bg-card/50 flex items-center justify-center">
                {/* Center Text */}
                <div className="text-center px-8 z-10 relative">
                  {!vote ? (
                    <p className="text-h2 animate-fade-in">Launch a Telegram bot</p>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-h2 metallic-text-gradient uppercase animate-fade-in">
                        {vote}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Top Circle - Rotatable with Dot */}
              <div
                ref={circleRef}
                className={`absolute inset-0 w-80 h-80 rounded-full cursor-grab transition-all duration-200 ${
                  isDragging ? "cursor-grabbing" : ""
                }`}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transformOrigin: "center",
                }}
                onMouseDown={handleMouseDown}
              >
                {/* White Circle Dot at Top */}
                <div
                  className={`absolute w-6 h-6 bg-foreground rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-3 transition-all duration-200 ${
                    isDragging ? "scale-110" : ""
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Past Results Table */}
          <div className="mt-20 w-full max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <Table>
                  <TableBody>
                    {recentSeances.map((seance) => (
                      <TableRow key={seance.id}>
                        <TableCell className="font-medium text-left">
                          {seance.proposal}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {seance.outcome.toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground text-sm">
                          {seance.timestamp}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </main>
  );
}
