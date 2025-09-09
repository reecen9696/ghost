"use client";

import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AppWindowIcon, CodeIcon } from "lucide-react";

export default function EdictLedgerPage() {
  const snapshotData = {
    edict_id: "EDICT-001287",
    program_id: "Gh0Ed1ctPr0grAm11111111111111111111111111",
    slot: 28937451,
    blocktime: "2025-09-08T10:34:21Z",
    tx_signature: "3s9XbY9qk5aV2...aQw1zLp",
    state_hash: "0x8e3c94afc2a9d4bdf512aa0a3f1b9f75f91e1d72",
    proposal: {
      title: "Fact-check before posting",
      summary: "Posts to connected surfaces must include a verifiable link.",
      category: "safety",
      proposer: "29NsP5...pump",
    },
    final_tally: {
      options: [
        { label: "Yes", weight_percent: 78.2 },
        { label: "No", weight_percent: 21.8 },
      ],
      total_weight: 142000,
    },
    result: "Passed",
    before: "Posting rule: none.",
    after: "Posting rule: require one verifiable link in each post.",
  };

  const pastEdicts = [
    {
      edict: "EDICT-001286",
      title: "Token delegation limits",
      status: "Passed",
      category: "governance",
      date: "2025-09-07",
    },
    {
      edict: "EDICT-001285",
      title: "Whisper breath consumption",
      status: "Failed",
      category: "mechanics",
      date: "2025-09-06",
    },
    {
      edict: "EDICT-001284",
      title: "Seance circle capacity",
      status: "Passed",
      category: "technical",
      date: "2025-09-05",
    },
    {
      edict: "EDICT-001283",
      title: "Community moderation powers",
      status: "Passed",
      category: "safety",
      date: "2025-09-04",
    },
    {
      edict: "EDICT-001282",
      title: "Cross-chain bridge activation",
      status: "Failed",
      category: "technical",
      date: "2025-09-03",
    },
    {
      edict: "EDICT-001281",
      title: "Mystical UI enhancements",
      status: "Passed",
      category: "design",
      date: "2025-09-02",
    },
    {
      edict: "EDICT-001280",
      title: "AI agent integration",
      status: "Passed",
      category: "technical",
      date: "2025-09-01",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section 1 - Snapshot Info */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-h2 uppercase tracking-wide">
              Snapshot Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-h2-subtext w-32">Program ID:</span>
                  <code className="text-body font-mono">
                    {snapshotData.program_id}
                  </code>
                </div>
                <div className="flex">
                  <span className="text-h2-subtext w-32">Slot:</span>
                  <span className="text-body">
                    {snapshotData.slot.toLocaleString()}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-h2-subtext w-32">Blocktime:</span>
                  <span className="text-body">{snapshotData.blocktime}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex">
                  <span className="text-h2-subtext w-32">Tx Signature:</span>
                  <code className="text-body font-mono">
                    {snapshotData.tx_signature}
                  </code>
                </div>
                <div className="flex">
                  <span className="text-h2-subtext w-32">Edict ID:</span>
                  <span className="text-body font-mono">
                    {snapshotData.edict_id}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-h2-subtext w-32">State Hash:</span>
                  <code className="text-body font-mono">
                    {snapshotData.state_hash}
                  </code>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Code Viewer with Toggle */}
        <Card>
          <CardContent className="pt-6">
            <Tabs defaultValue="raw" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-h2 uppercase tracking-wide">
                  ON-CHAIN EDICT
                </h3>
                <TabsList>
                  <TabsTrigger
                    value="raw"
                    className="text-button uppercase tracking-wide"
                  >
                    <CodeIcon className="h-4 w-4 mr-2" />
                    Raw
                  </TabsTrigger>
                  <TabsTrigger
                    value="parsed"
                    className="text-button uppercase tracking-wide"
                  >
                    <AppWindowIcon className="h-4 w-4 mr-2" />
                    Parsed
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="raw">
                <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                  <pre className="text-body font-mono leading-relaxed">
                    <code>{JSON.stringify(snapshotData, null, 2)}</code>
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="parsed">
                <div className="space-y-6">
                  {/* Past Edicts Table */}
                  <div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[120px]">Edict ID</TableHead>
                          <TableHead>Title</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pastEdicts.map((edict) => (
                          <TableRow key={edict.edict}>
                            <TableCell className="font-mono text-xs">
                              {edict.edict}
                            </TableCell>
                            <TableCell className="font-medium">
                              {edict.title}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="capitalize">
                                {edict.category}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline" className="capitalize">
                                {edict.status.toUpperCase()}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right text-muted-foreground text-sm">
                              {edict.date}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
