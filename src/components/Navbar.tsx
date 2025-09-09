"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { Menu, Copy } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const contractAddress = "29NsP5KTpumpyUCHo6xsm1TCdcjLNQcBQgfTAYm6pump";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      toast({
        title: "Contract Address Copied!",
        description: "The contract address has been copied to your clipboard.",
        duration: 3000,
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy the contract address.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const openTwitter = () => {
    window.open("https://twitter.com", "_blank");
  };

  return (
    <nav className=" text-white ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="MIST Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </Link>

            {/* Online Indicator */}
            <div className="flex items-center space-x-2 ml-4">
              <div className="relative">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: "#E637ED",
                    boxShadow: "0 0 8px #E637ED, 0 0 16px #E637ED",
                  }}
                ></div>
                <div
                  className="absolute inset-0 w-2 h-2 rounded-full animate-ping opacity-75"
                  style={{ backgroundColor: "#E637ED" }}
                ></div>
              </div>
              <span className="text-sm font-medium uppercase tracking-wide metallic-text-gradient">
                ONLINE
              </span>
            </div>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex justify-center space-x-8">
            <Link
              href="/"
              className="text-body hover:metallic-text-gradient transition-colors"
            >
              MISTFIELD
            </Link>
            <Link
              href="/whisper"
              className="text-body hover:metallic-text-gradient transition-colors"
            >
              WHISPER
            </Link>
            <Link
              href="/seance"
              className="text-body hover:metallic-text-gradient transition-colors"
            >
              SEANCE
            </Link>
            <Link
              href="/edict-ledger"
              className="text-body hover:metallic-text-gradient transition-colors"
            >
              EDICT LEDGER
            </Link>
            <Link
              href="/help"
              className="text-body hover:metallic-text-gradient transition-colors"
            >
              ABOUT
            </Link>
          </div>

          {/* Right Section - Contract Address, Twitter X, Connect Wallet */}
          <div className="flex justify-end items-center space-x-3">
            {/* Contract Address Pill */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={copyToClipboard}
                    className="hidden sm:flex items-center space-x-2 bg-secondary hover:bg-secondary/80 text-button border border-border uppercase tracking-wide font-medium px-6 py-3 rounded-md transition-colors cursor-pointer"
                  >
                    <span className="text-xs font-mono">
                      CA: {contractAddress.slice(0, 6)}...
                      {contractAddress.slice(-4)}
                    </span>
                    <Copy className="h-3 w-3" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-body">Click to copy contract address</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Twitter X Icon */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    onClick={openTwitter}
                    className="hidden sm:flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-800/50 transition-colors cursor-pointer"
                  >
                    <Image
                      src="/x.svg"
                      alt="Follow on X"
                      width={20}
                      height={20}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-body">Follow us on X (Twitter)</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* Connect Wallet Button */}
            <Button className="bg-black hover:bg-black/80 text-button border border-border uppercase tracking-wide font-medium px-6 py-3">
              CONNECT WALLET
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-body hover:text-white"
              >
                {isMenuOpen ? (
                  <Menu className="h-6 w-6 rotate-90" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
              {/* Mobile Contract Address */}
              <div className="px-3 py-2">
                <button
                  onClick={copyToClipboard}
                  className="w-full flex items-center justify-center space-x-2 bg-secondary hover:bg-secondary/80 text-button border border-border uppercase tracking-wide font-medium px-6 py-3 rounded-md transition-colors"
                >
                  <span className="text-xs font-mono">
                    CA: {contractAddress.slice(0, 8)}...
                    {contractAddress.slice(-6)}
                  </span>
                  <Copy className="h-3 w-3" />
                </button>
              </div>

              {/* Mobile Twitter X */}
              <div className="px-3 py-2">
                <button
                  onClick={openTwitter}
                  className="w-full flex items-center justify-center space-x-2 px-3 py-2 rounded-md border border-gray-600 bg-gray-800/50 hover:bg-gray-700/50 text-body hover:text-white transition-colors"
                >
                  <Image
                    src="/x.svg"
                    alt="Follow on X"
                    width={16}
                    height={16}
                    className="opacity-70"
                  />
                  <span className="text-sm">Follow on X</span>
                </button>
              </div>

              <Link
                href="/"
                className="block px-3 py-2 text-body hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                MISTFIELD
              </Link>
              <Link
                href="/whisper"
                className="block px-3 py-2 text-body hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                WHISPER
              </Link>
              <Link
                href="/seance"
                className="block px-3 py-2 text-body hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                SEANCE
              </Link>
              <Link
                href="/edict-ledger"
                className="block px-3 py-2 text-body hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                EDICT LEDGER
              </Link>
              <Link
                href="/help"
                className="block px-3 py-2 text-body hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
