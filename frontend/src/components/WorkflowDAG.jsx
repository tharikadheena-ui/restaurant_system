import React, { useState } from 'react';
import { Compass, Clock, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export default function WorkflowDAG() {
  const [showKahnDetails, setShowKahnDetails] = useState(false);

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#5a441e]/50 pb-5">
        <div>
          <span className="text-[10px] font-serif-royal uppercase tracking-[0.3em] text-[#a88642] block">
            ILLUMINATED PROCESS CHRONICLE
          </span>
          <h2 className="font-serif-royal text-2xl sm:text-4xl text-[#f2ebd9] tracking-[0.16em] uppercase mt-1">
            ROYAL PROCESS MAP
          </h2>
          <p className="text-xs font-cormorant italic text-[#c4b59d] tracking-wider text-base mt-1">
            "Course dependencies, synchronizations, and critical path timing."
          </p>
        </div>

        <div className="mt-4 sm:mt-0 font-serif-royal text-xs text-[#e6ca94] tracking-widest uppercase">
          <span>CRITICAL PATH: <strong>25 MINUTES</strong></span>
        </div>
      </div>

      {/* Royal Process Map (Illuminated Manuscript Style) */}
      <div className="royal-plaque p-8 sm:p-12 rounded-none relative">
        <div className="royal-corner royal-corner-tl" />
        <div className="royal-corner royal-corner-tr" />
        <div className="royal-corner royal-corner-bl" />
        <div className="royal-corner royal-corner-br" />

        <div className="max-w-3xl mx-auto space-y-8 font-serif-royal text-center">
          {/* Stage 1: Order Received */}
          <div className="max-w-md mx-auto p-5 bg-[#0a0805] border-2 border-[#8b6f38] shadow-lg">
            <span className="text-[10px] text-[#a88642] uppercase tracking-[0.25em] block pb-1">
              STAGE I · 2 MIN
            </span>
            <h4 className="text-lg font-bold text-[#f2ebd9] tracking-wider uppercase">
              ORDER RECEIVED & VERIFIED
            </h4>
            <p className="text-xs text-[#c4b59d] font-cormorant italic mt-1">
              "Entered into royal kitchen ledger and dispatch heralds."
            </p>
          </div>

          {/* Connector Down */}
          <div className="text-[#d4af37] text-xl font-bold font-mono">
            ↓
          </div>

          {/* Stage 2: Dual Parallel Preparations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-5 bg-[#171109] border-2 border-[#d4af37] shadow-xl">
              <span className="text-[10px] text-[#e6ca94] uppercase tracking-[0.25em] block pb-1 font-bold">
                STAGE II (A) · 15 MIN [CRITICAL]
              </span>
              <h4 className="text-base font-bold text-[#f2ebd9] tracking-wider uppercase">
                GRAND HEARTH COOKING
              </h4>
              <p className="text-xs text-[#c4b59d] font-cormorant italic mt-1">
                "Roasting, grilling, and stone-oven preparations."
              </p>
            </div>

            <div className="p-5 bg-[#0a0805] border border-[#5a441e] shadow-lg">
              <span className="text-[10px] text-[#755928] uppercase tracking-[0.25em] block pb-1">
                STAGE II (B) · 5 MIN (SLACK)
              </span>
              <h4 className="text-base font-bold text-[#c4b59d] tracking-wider uppercase">
                SOMMELIER & ELIXIRS
              </h4>
              <p className="text-xs text-[#755928] font-cormorant italic mt-1">
                "Vintage decanting and cold cellar cellar prep."
              </p>
            </div>
          </div>

          {/* Connector Down */}
          <div className="text-[#d4af37] text-xl font-bold font-mono">
            ↓
          </div>

          {/* Stage 3: Plating */}
          <div className="max-w-md mx-auto p-5 bg-[#171109] border-2 border-[#d4af37] shadow-lg">
            <span className="text-[10px] text-[#e6ca94] uppercase tracking-[0.25em] block pb-1 font-bold">
              STAGE III · 3 MIN [CRITICAL]
            </span>
            <h4 className="text-lg font-bold text-[#f2ebd9] tracking-wider uppercase">
              PLATING & QUALITY INSPECTION
            </h4>
            <p className="text-xs text-[#c4b59d] font-cormorant italic mt-1">
              "Synchronization of both culinary hearths and wine vault."
            </p>
          </div>

          {/* Connector Down */}
          <div className="text-[#d4af37] text-xl font-bold font-mono">
            ↓
          </div>

          {/* Stage 4: White-Glove Butler Service */}
          <div className="max-w-md mx-auto p-5 bg-[#0a0805] border-2 border-[#8b6f38] shadow-lg">
            <span className="text-[10px] text-[#a88642] uppercase tracking-[0.25em] block pb-1">
              STAGE IV · 5 MIN [CRITICAL]
            </span>
            <h4 className="text-lg font-bold text-[#f2ebd9] tracking-wider uppercase">
              SERVICE & DISPATCH
            </h4>
            <p className="text-xs text-[#c4b59d] font-cormorant italic mt-1">
              "White-glove presentation at the guest's salon table."
            </p>
          </div>
        </div>

        {/* Expandable Algorithmic Ledger Toggle */}
        <div className="mt-10 pt-6 border-t border-[#5a441e]/50 max-w-3xl mx-auto">
          <button
            onClick={() => setShowKahnDetails(!showKahnDetails)}
            className="w-full flex items-center justify-between text-xs font-serif-royal text-[#a88642] uppercase tracking-widest py-2 hover:text-[#f2ebd9]"
          >
            <span>[ {showKahnDetails ? 'HIDE' : 'VIEW'} TOPOLOGICAL ORDERING & CRITICAL PATH LEDGER ]</span>
            {showKahnDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showKahnDetails && (
            <div className="mt-4 p-4 bg-[#0a0704] border border-[#5a441e] font-mono text-xs text-[#c4b59d] space-y-2 animate-fadeIn">
              <p className="text-[#e6ca94] font-serif-royal uppercase">
                ◈ Kahn's Algorithm Topological Sequence:
              </p>
              <p>Step 01: Order Received (In-degree = 0) ➔ Enqueued</p>
              <p>Step 02: Hearth Cooking (In-degree = 0) ➔ Duration: 15 mins</p>
              <p>Step 03: Sommelier Prep (In-degree = 0) ➔ Duration: 5 mins</p>
              <p>Step 04: Plating Inspection (In-degree = 0) ➔ Earliest start: T + 17 mins</p>
              <p>Step 05: Butler Service (In-degree = 0) ➔ Earliest finish: T + 25 mins</p>
              <p className="pt-2 text-[#96b87d] font-semibold">
                Critical Path Total: 2 + 15 + 3 + 5 = 25 minutes. Zero cyclical deadlocks.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
