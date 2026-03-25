/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  Smartphone, 
  Zap, 
  MousePointer2, 
  ShieldCheck, 
  PhoneCall,
  Layout,
  Clock,
  AlertCircle,
  Check,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-charcoal/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tighter">
          BOYNTON <span className="text-brand-blue">DIGITAL</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-medium hover:text-brand-blue transition-colors">The Problem</a>
          <a href="#solution" className="text-sm font-medium hover:text-brand-blue transition-colors">Our Way</a>
          <a href="#process" className="text-sm font-medium hover:text-brand-blue transition-colors">Process</a>
          <button 
            onClick={onOpenModal}
            className="bg-brand-blue hover:bg-blue-600 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 glow-blue"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

const LeadModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-charcoal border border-white/10 p-8 rounded-3xl shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              <X size={24} />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-3xl font-extrabold tracking-tight mb-2">Get Your Website</h3>
                <p className="text-white/60 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-1.5 ml-1">Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-1.5 ml-1">Email</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-1.5 ml-1">Phone</label>
                    <input required type="tel" placeholder="(555) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors" />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-orange-600 py-4 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-95 mt-4 glow-orange"
                  >
                    Send Request
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12 }}
                  className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check size={40} className="text-white" strokeWidth={3} />
                </motion.div>
                <h3 className="text-3xl font-extrabold tracking-tight mb-2">Thank You!</h3>
                <p className="text-white/60">Your request has been sent. We'll be in touch shortly.</p>
                <button 
                  onClick={onClose}
                  className="mt-8 text-brand-blue font-bold hover:underline"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-radial-glow selection:bg-brand-blue/30">
      <Navbar onOpenModal={openModal} />
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-brand-blue/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-brand-orange/10 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-blue text-xs font-bold uppercase tracking-[0.2em] mb-10">
              <Zap size={14} />
              High-Performance Digital Agency
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9] mb-12 uppercase">
              We Build <br />
              <span className="text-brand-blue drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]">Websites</span> <br />
              That <span className="text-brand-orange drop-shadow-[0_0_30px_rgba(249,115,22,0.4)]">Convert</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16">
              <p className="text-lg md:text-2xl text-white/50 max-w-xl text-center md:text-left leading-tight font-medium">
                Stop losing customers to outdated designs. We build high-converting websites for local businesses.
              </p>
              <button 
                onClick={openModal}
                className="group bg-brand-orange hover:bg-orange-600 px-10 py-6 md:px-14 md:py-8 rounded-2xl text-xl md:text-2xl font-extrabold transition-all hover:scale-105 active:scale-95 glow-orange flex items-center gap-4"
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent" />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Most Websites Are <span className="text-red-500">Losing You Money</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Untrustworthy Design", 
                desc: "If your site looks like it's from 2005, customers won't trust you with their money.",
                icon: <ShieldCheck className="text-red-500" size={40} />
              },
              { 
                title: "Slow Mobile Speeds", 
                desc: "People leave if your site takes more than 3 seconds to load on their phone.",
                icon: <Smartphone className="text-red-500" size={40} />
              },
              { 
                title: "Confusing Layouts", 
                desc: "If they can't find your phone number in 5 seconds, they're calling your competitor.",
                icon: <AlertCircle className="text-red-500" size={40} />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              The <span className="text-brand-blue">BOYNTON</span> Way
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Built for Calls", 
                desc: "Every pixel is designed to drive the user toward the 'Call Now' button.",
                gradient: "from-blue-600/20 to-transparent"
              },
              { 
                title: "Zero Stress", 
                desc: "We handle the hosting, security, and updates. You just handle the new customers.",
                gradient: "from-brand-blue/20 to-transparent"
              },
              { 
                title: "Proven Results", 
                desc: "Our designs are tested and proven to convert visitors into paying leads.",
                gradient: "from-blue-400/20 to-transparent"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-1 rounded-3xl bg-gradient-to-b ${item.gradient} border border-white/5`}
              >
                <div className="bg-charcoal/40 backdrop-blur-xl p-10 rounded-[22px] h-full">
                  <h3 className="text-3xl font-extrabold mb-4">{item.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Mobile Optimized", icon: <Smartphone className="text-brand-blue" /> },
            { label: "Lightning Fast", icon: <Zap className="text-brand-blue" /> },
            { label: "Clear CTAs", icon: <MousePointer2 className="text-brand-blue" /> },
            { label: "Trust Builders", icon: <ShieldCheck className="text-brand-blue" /> }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
              </div>
              <span className="font-bold text-lg">{feature.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Our Simple Process</h2>
          </div>
          <div className="relative grid md:grid-cols-3 gap-12">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent z-0" />
            
            {[
              { step: "01", title: "Build", desc: "We design and develop your custom high-converting site." },
              { step: "02", title: "Review", desc: "You review the site and we make any final polish adjustments." },
              { step: "03", title: "Go Live", desc: "We launch your site and you start getting more calls." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-charcoal border-4 border-brand-blue flex items-center justify-center text-3xl font-black text-brand-blue mb-8 glow-blue bg-radial-glow">
                  {item.step}
                </div>
                <h3 className="text-3xl font-extrabold mb-4">{item.title}</h3>
                <p className="text-white/60 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Decorative Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8">
                Ready to Get More <br /> Customers Calling?
              </h2>
              <button 
                onClick={openModal}
                className="bg-brand-orange hover:bg-orange-600 px-12 py-6 rounded-2xl text-2xl font-extrabold transition-all hover:scale-105 active:scale-95 glow-orange inline-flex items-center gap-3"
              >
                Get Your Website
                <ArrowRight />
              </button>
              <p className="mt-8 text-white/60 font-medium">No hidden fees. No long-term contracts.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-extrabold tracking-tighter">
            BOYNTON <span className="text-brand-blue">DIGITAL</span>
          </div>
          <div className="text-white/40 text-sm">
            © 2026 BoyntonDigital. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
