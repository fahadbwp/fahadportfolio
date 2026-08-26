import React, { useState } from 'react';
import { Play, CheckCircle2, ShieldCheck, Zap, RefreshCw } from 'lucide-react';

interface VerificationStep {
  name: string;
  tool: string;
  status: 'pending' | 'running' | 'success';
  detail: string;
}

export const LeadVerificationSimulator: React.FC = () => {
  const [targetEmail, setTargetEmail] = useState('decision-maker@company.com');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isCompleted, setIsCompleted] = useState(false);

  const steps: VerificationStep[] = [
    {
      name: 'Syntax & Domain DNS Check',
      tool: 'RFC Compliance',
      status: currentStepIndex > 0 ? 'success' : currentStepIndex === 0 ? 'running' : 'pending',
      detail: 'Valid format, active DNS root verified'
    },
    {
      name: 'MX Record & Server Handshake',
      tool: 'Hunter.io API',
      status: currentStepIndex > 1 ? 'success' : currentStepIndex === 1 ? 'running' : 'pending',
      detail: 'Primary mail exchanger reachable (port 25)'
    },
    {
      name: 'B2B Database Cross-Match',
      tool: 'Apollo.io + SalesNav',
      status: currentStepIndex > 2 ? 'success' : currentStepIndex === 2 ? 'running' : 'pending',
      detail: 'Verified role, company revenue & ICP criteria'
    },
    {
      name: 'Deep SMTP Ping & Catch-All Test',
      tool: 'NeverBounce API',
      status: currentStepIndex > 3 ? 'success' : currentStepIndex === 3 ? 'running' : 'pending',
      detail: 'Zero bounce guarantee, mailbox exists'
    },
    {
      name: 'Spam Trap & Honeypot Filter',
      tool: 'ZeroBounce Engine',
      status: currentStepIndex >= 4 ? 'success' : currentStepIndex === 4 ? 'running' : 'pending',
      detail: 'Safe for high-converting cold outreach'
    }
  ];

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setIsCompleted(false);
    setCurrentStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step <= 4) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setIsCompleted(true);
      }
    }, 450);
  };

  return (
    <section className="py-20 px-6 sm:px-8 max-w-6xl mx-auto border-t border-stone-200 text-left">
      <div className="space-y-10">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5" />
            <span>// Live Verification Automation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-stone-950">
            Automated 5-layer lead verification
          </h2>
          <p className="text-stone-600 font-medium text-base max-w-xl leading-relaxed">
            Test the live verification pipeline automated on every single lead before it enters your spreadsheet.
          </p>
        </div>

        {/* Interactive Simulator Card */}
        <div className="white-panel rounded-2xl p-6 sm:p-8 space-y-6 shadow-lg border border-stone-200">
          
          {/* Top Input Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                value={targetEmail}
                onChange={(e) => setTargetEmail(e.target.value)}
                placeholder="Enter sample lead email or domain"
                className="w-full px-4 py-3 rounded-xl clean-input text-sm font-mono font-medium text-stone-900 pr-24"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                Target Lead
              </span>
            </div>

            <button
              type="button"
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="px-6 py-3 rounded-xl btn-primary-dark text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shrink-0 shadow-sm"
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-orange-400" />
                  <span>Verifying Pipeline...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
                  <span>Run Verification</span>
                </>
              )}
            </button>
          </div>

          {/* Real-time 5-Layer Progress Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
            {steps.map((step, idx) => {
              const isDone = step.status === 'success';
              const isCurrent = step.status === 'running';

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl transition-all border flex flex-col justify-between space-y-3 ${
                    isDone
                      ? 'bg-emerald-50/60 border-emerald-200 shadow-2xs'
                      : isCurrent
                      ? 'bg-orange-50/80 border-orange-300 shadow-sm animate-pulse'
                      : 'bg-stone-50/70 border-stone-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-stone-500">
                      Step 0{idx + 1}
                    </span>
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : isCurrent ? (
                      <RefreshCw className="w-3.5 h-3.5 text-orange-600 animate-spin" />
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full border border-stone-300"></div>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-bold text-stone-950">{step.name}</div>
                    <div className="text-[11px] text-stone-500 font-mono">{step.tool}</div>
                  </div>

                  <div className="text-[10px] font-medium text-stone-600 pt-1 border-t border-stone-200/60">
                    {step.detail}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Result Banner when Completed */}
          {isCompleted && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3 animate-in zoom-in-95 duration-200">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-600 text-white shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-emerald-950">
                    100% Deliverability Confirmed
                  </div>
                  <div className="text-xs text-emerald-800">
                    Target <span className="font-mono font-bold">{targetEmail}</span> passed all 5 multi-pass verification filters. 0% bounce rate guaranteed.
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-colors shadow-xs"
              >
                Claim 10 Free Leads
              </a>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
