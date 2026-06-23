import React from 'react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-teal-300 font-semibold uppercase tracking-wider mb-4">AI Product Manager Portfolio</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Shashi Ranjan Kumar</h1>
        <p className="text-slate-300 max-w-3xl mb-6">
          Senior Software Engineer transitioning to AI Product Management. I drive cross-functional product work
          across operations, engineering, and support to reduce operational friction and deliver measurable KPIs.
        </p>

        <div className="flex gap-3 flex-wrap mb-8">
          <a href="mailto:shashir160@gmail.com" className="px-4 py-2 rounded-lg bg-blue-600 font-semibold">Contact Me</a>
          <a href="/resume.pdf" className="px-4 py-2 rounded-lg border border-slate-700">Resume</a>
          <a href="https://linkedin.com/in/sranjan-s07" className="px-4 py-2 rounded-lg border border-slate-700">LinkedIn</a>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800 p-4 rounded-xl">
            <h3 className="text-lg font-semibold">Impact</h3>
            <div className="mt-2 text-teal-300 font-bold text-2xl">25%</div>
            <div className="text-slate-400 text-sm">Reduction in shipment delays</div>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            <h3 className="text-lg font-semibold">Impact</h3>
            <div className="mt-2 text-teal-300 font-bold text-2xl">35%</div>
            <div className="text-slate-400 text-sm">Less manual support intervention</div>
          </div>

          <div className="bg-slate-800 p-4 rounded-xl">
            <h3 className="text-lg font-semibold">Impact</h3>
            <div className="mt-2 text-teal-300 font-bold text-2xl">20%</div>
            <div className="text-slate-400 text-sm">Reduction in scanning & sorting errors</div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Route-Wise Bag Mapping</h3>
            <p className="text-slate-300 mb-2">Problem: High delivery delays from suboptimal bag-route assignments.</p>
            <p className="text-slate-400 mb-2">Approach: Data-driven clustering + assignment scoring, A/B experiments, phased rollout.</p>
            <p className="text-teal-300 font-semibold">Outcome: 25% reduction in shipment delays.</p>
          </article>

          <article className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Waybill Exception Automation</h3>
            <p className="text-slate-300 mb-2">Problem: High manual effort for recurring exceptions.</p>
            <p className="text-slate-400 mb-2">Approach: OCR + rules + ML classification for edge cases, automation for common classes.</p>
            <p className="text-teal-300 font-semibold">Outcome: 35% reduction in manual interventions.</p>
          </article>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">AI Product Management</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">GenAI for Support Triage</h3>
            <p className="text-slate-400 mb-2">Shadow-mode LLM suggestions, measure agreement, then A/B with agents. Integrate OCR for document parsing.</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="font-semibold mb-2">Operational Decision Assistants</h3>
            <p className="text-slate-400 mb-2">Predict exceptions, surface prioritized actions, and enable safe one-click remediations with audit and rollback.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
