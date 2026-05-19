import { motion } from 'framer-motion';
import {
  FolderGit2,
  Bell,
  Clapperboard,
  Link as LinkIcon,
  Code2,
  Eye,
  ArrowRight,
  ExternalLink } from
'lucide-react';
export function ProjectsPage() {
  return (
    <div className="w-full pb-20">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}>
          
          <div className="inline-flex items-center space-x-2 bg-navy-light border border-white/10 rounded-full px-3 py-1.5 mb-8">
            <FolderGit2 size={14} className="text-accent" />
            <span className="text-xs font-mono text-accent font-medium tracking-wider">
              GIT_REPO_STATUS: STABLE
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
            <span className="text-white">Selected </span>
            <span className="text-accent">Works</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A curated exploration of full-stack engineering, AI integration, and
            high-performance backend systems. Each project is a milestone in
            technical precision.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Project 1: TalentScout (Large, Left) */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:col-span-8 bg-navy-light rounded-xl border border-white/5 overflow-hidden group flex flex-col">

            <div className="h-56 sm:h-64 w-full bg-gradient-to-br from-[#1a2332] to-[#0b1121] relative overflow-hidden border-b border-white/5">
              {/* Dashboard placeholder */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
              <div className="absolute top-8 left-4 right-4 sm:left-8 sm:right-8 bottom-0 bg-[#0b1121] rounded-t-lg border border-white/10 shadow-2xl overflow-hidden">
                <img
                    src="/talent-scout.png"
                    className="block w-full h-full object-cover object-top rounded-t-lg"
                    alt="TalentScout Dashboard"
                />
              </div>
            </div>


            <div className="p-8 flex-1 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-6">
                {['Node.js', 'MongoDB', 'Groq API', 'AI-Powered'].map((tag) =>
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono text-gray-300 bg-white/5 border border-white/10 rounded-full">
                  
                    {tag}
                  </span>
                )}
              </div>

              <h3 className="text-3xl font-bold font-display text-white mb-4">
                TalentScout
              </h3>
              <p className="text-gray-400 mb-8 max-w-xl leading-relaxed flex-1">
                AI-Powered Candidate Profile Aggregator that streamlines the
                hiring pipeline through intelligent data processing and
                automated scoring.
              </p>

              <div className="flex flex-wrap gap-4 mt-auto">
                <a href="https://talent-scout-frontend.vercel.app">
                  <button className="inline-flex items-center px-5 py-2.5 bg-accent text-navy font-medium rounded-sm hover:bg-accent-hover transition-colors text-sm">
                    <Eye size={16} className="mr-2" /> LIVE DEMO
                  </button>
                </a>

                <a href="https://github.com/alien-attitude/Talent-Scout-Frontend">
                  <button className="inline-flex items-center px-5 py-2.5 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors text-sm">
                    <Code2 size={16} className="mr-2" /> SOURCE
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Project 2: Subscription Tracker (Small, Right) */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="lg:col-span-4 bg-navy-light rounded-xl border border-white/5 p-8 flex flex-col">
            
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-8">
              <Bell size={24} className="text-accent" />
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-4">
              WhisperBox
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed flex-1">
              A Production grade End-to-end encrypted messaging platform built with react and browser react-native. 100% secure and private.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['REACT', 'CSS', 'APIs'].map((tag) =>
              <span
                key={tag}
                className="px-2 py-1 text-[10px] font-mono text-gray-400 bg-navy border border-white/5 rounded">
                
                  {tag}
                </span>
              )}
            </div>

            <a
              href="https://whisperbox-ochre.vercel.app/"
              className="inline-flex items-center text-accent font-medium hover:text-accent-hover transition-colors mt-auto text-sm">
              
              VIEW DEMO <ArrowRight size={16} className="ml-2" />
            </a>
          </motion.div>

          {/* Project 3: SkillLift (Medium, Left) */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="lg:col-span-6 bg-navy-light rounded-xl border border-white/5 overflow-hidden flex flex-col relative">
            
            {/* Abstract background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2332] to-[#0b1121] opacity-50 z-0"></div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0 mix-blend-overlay"></div>

            <div className="p-8 relative z-10 flex-1 flex flex-col">
              <div className="inline-block px-3 py-1 text-xs font-mono text-white bg-blue-500/20 border border-blue-500/30 rounded-full mb-6 self-start">
                FINTECH
              </div>

              <h3 className="text-2xl font-bold font-display text-white mb-4">
                Invoice Management App
              </h3>
              <p className="text-gray-400 mb-8 max-w-sm leading-relaxed flex-1">
                A modern fintech solution designed to simplify invoicing workflows—from creating and
                tracking invoices to managing payment statuses with clarity and speed. Built for efficiency and
                usability, it delivers a clean, responsive experience for smarter financial operations.
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <a href="https://invoice-management-app-eta.vercel.app">
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                    <LinkIcon size={18} />
                  </button>
                </a>
                <a href="https://github.com/alien-attitude/invoice-management-app">
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                    <Code2 size={18} />
                  </button>
                </a>

              </div>
            </div>
          </motion.div>

          {/* Project 4: Movie Search (Medium, Right) */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="lg:col-span-6 bg-navy-light rounded-xl border border-white/5 p-8 flex flex-col">
            
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                <Clapperboard size={24} className="text-accent" />
              </div>
              <span className="text-xs font-mono text-gray-500">

              </span>
            </div>

            <h3 className="text-2xl font-bold font-display text-white mb-4">
              Movie Search
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed flex-1">
              Dynamic web application utilizing React.js and external APIs to
              provide real-time cinematic data and rich user interaction.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {['React.js', 'TailwindCSS', 'REST API'].map((tag) =>
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono text-gray-300 bg-navy border border-white/5 rounded">
                
                  {tag}
                </span>
              )}
            </div>

            <a href="https://movieflix-three-sooty.vercel.app">
              <button className="w-full py-3 bg-[#1a2332] hover:bg-[#222d40] text-white font-medium rounded-sm transition-colors flex items-center justify-center border border-white/5 text-sm mt-auto">
                EXPLORE LIVE DEMO{' '}
                <ExternalLink size={16} className="ml-2 text-gray-400" />
              </button>
            </a>

          </motion.div>
        </div>
      </section>

      {/* Core Ecosystem Section */}
      <section className="border-t border-white/5 bg-[#0b1121] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                Core Ecosystem
              </h2>
              <p className="text-gray-400 leading-relaxed">
                The architectural foundation I leverage to build scalable,
                resilient, and intelligent digital products.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
              {
                num: '01',
                name: 'Node.js'
              },
              {
                num: '02',
                name: 'React'
              },
              {
                num: '03',
                name: 'MongoDB'
              },
              {
                num: '04',
                name: 'Groq AI'
              }].
              map((tech, i) =>
              <motion.div
                key={tech.name}
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.1
                }}
                className="bg-navy-light border border-white/5 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-accent/30 transition-colors group">
                
                  <span className="text-accent font-mono text-sm mb-3 group-hover:scale-110 transition-transform">
                    {tech.num}
                  </span>
                  <span className="text-white font-medium">{tech.name}</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}