import { motion } from 'framer-motion';
import {
  MonitorSmartphone,
  Database,
  Server,
  CheckCircle2,
  GraduationCap,
  Award } from
'lucide-react';
export function AboutPage() {
  return (
    <div className="w-full pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.5
          }}>
          
          <div className="inline-flex items-center space-x-2 bg-navy-light border border-white/10 rounded-full px-3 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-mono text-accent font-medium tracking-wider">
              SYSTEM.STATUS: ACTIVE
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold font-display mb-8 leading-tight">
            <span className="text-white">Architecting </span>
            <span className="text-accent italic font-serif">Digital</span>
            <br />
            <span className="text-white">Sovereignty.</span>
          </h1>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I am Divine Ezinwa Azubuike, a full-stack engineer driven by the
              philosophy of building scalable, user-centric digital
              environments. My journey is rooted in a strong foundation of
              backend development, APIs, and data processing.
            </p>
            <p>
              With experience across JavaScript, ReactJs, Typescript, Node.js, and Python, I bridge
              the gap between technical mastery and human-centric experience. I
              don't just build systems; I curate digital environments that are
              functional, scalable, and resilient.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.2
          }}
          className="relative w-full max-w-md mx-auto lg:ml-auto">
          
          {/* Profile Photo Placeholder */}
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative bg-gradient-to-t from-navy-light to-navy">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent opacity-60"></div>
            <img src="/src/public/image.png" alt="Profile" className="w-full h-full object-cover"/>
          </div>
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-accent/20 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
        </motion.div>
      </section>

      {/* Technical Arsenal Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold font-display text-white mb-2">
              Technical Arsenal
            </h2>
            <p className="text-gray-400">
              Categorized mastery across the full stack.
            </p>
          </div>
          <div className="text-xs font-mono text-gray-500">
            #STACK_V4.2 // UPDATED_2026
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Frontend Card */}
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
            className="bg-navy-light border border-white/5 rounded-xl p-8">
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <MonitorSmartphone size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
              'HTML5',
              'CSS3',
              'React/Vue.js',
              'Tailwind CSS',
              'JavaScript (ES6+)',
              'TypeScript'].
              map((tag) =>
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-mono text-gray-300 bg-navy border border-white/5 rounded-full">
                
                  {tag}
                </span>
              )}
            </div>
          </motion.div>

          {/* Backend Card */}
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
            className="bg-navy-light border border-white/5 rounded-xl p-8">
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <Server size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'RESTful APIs', 'Python'].map(
                (tag) =>
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono text-gray-300 bg-navy border border-white/5 rounded-full">
                  
                    {tag}
                  </span>

              )}
            </div>
          </motion.div>

          {/* Databases Card */}
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
              delay: 0.2
            }}
            className="bg-navy-light border border-white/5 rounded-xl p-8">
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                <Database size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white">Databases</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'Postgres SQL', 'Redis'].map((tag) =>
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-mono text-gray-300 bg-navy border border-white/5 rounded-full">
                
                  {tag}
                </span>
              )}
            </div>
          </motion.div>
        </div>

        {/* Bottom Row: Code Snippet & Daily Drivers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Code Snippet */}
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
            className="lg:col-span-2 bg-[#080c17] border border-white/5 rounded-xl p-8 relative overflow-hidden">
            
            <div className="flex space-x-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>

            <pre className="font-mono text-sm leading-loose overflow-x-auto">
              <span className="text-blue-400">const</span>{' '}
              <span className="text-accent">skillHighlight</span>{' '}
              <span className="text-white">=</span> {'{\n'}
              <span className="text-gray-400"> focus:</span>{' '}
              <span className="text-green-400">"Scalable Infrastructure"</span>
              {',\n'}
              <span className="text-gray-400"> philosophy:</span>{' '}
              <span className="text-green-400">
                "Functional and efficient systems."
              </span>
              {',\n'}
              <span className="text-gray-400"> specialty:</span>{' '}
              <span className="text-green-400">"AI-Powered Aggregators"</span>
              {',\n'}
              <span className="text-gray-400"> current_interest:</span> [
              <span className="text-green-400">"Social Integrations"</span>,{' '}
              <span className="text-green-400">"Automation"</span>,{' '}
              <span className="text-green-400">"Backend Performance"</span>]
              {'\n'}
              {'};'}
            </pre>

            <div className="absolute right-8 bottom-8 opacity-10">
              <div className="w-24 h-16 border-4 border-white rounded-md flex items-center justify-center">
                <div className="w-8 h-1 bg-white ml-2"></div>
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </div>
          </motion.div>

          {/* Daily Drivers */}
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
            className="bg-navy-light border border-white/5 rounded-xl p-8 flex flex-col">
            
            <h4 className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-6">
              DAILY DRIVERS
            </h4>
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {['Git/GitHub', 'VPS Hosting', 'Excel Automation', 'Postman'].map(
                (item) =>
                <div
                  key={item}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                  
                    <span className="text-gray-300 text-sm">{item}</span>
                    <CheckCircle2 size={16} className="text-accent" />
                  </div>

              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-navy-light/50 border border-white/5 rounded-2xl p-8 md:p-12">
          <div className="flex items-center space-x-4 mb-12">
            <GraduationCap size={28} className="text-accent" />
            <h2 className="text-3xl font-bold font-display text-white">
              Foundation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Education Timeline */}
            <div className="relative pl-8 border-l border-white/10">
              <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-accent"></div>

              <div className="text-xs font-mono text-accent mb-2">
                2020 — 2024
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                B.Sc. in Computer Science
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Redeemer's University, Osun State
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                Focused on software engineering, algorithms, and application
                development. Developed a strong technical foundation in computer
                science principles.
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <a href="#" >
                <div className="bg-navy border border-white/5 rounded-xl p-6 flex items-center space-x-6">
                  <div className="w-12 h-12 rounded-lg bg-[#1a2332] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">
                      IBM Back-end Application Development
                    </h4>
                    <p className="text-xs font-mono text-gray-500 mt-1">
                      Node.js and Express - edX
                    </p>
                  </div>
                </div>

              </a>

              <div className="bg-navy border border-white/5 rounded-xl p-6 flex items-center space-x-6">
                <div className="w-12 h-12 rounded-lg bg-[#1a2332] flex items-center justify-center shrink-0">
                  <Award size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base">
                    JavaScript Instructor
                  </h4>
                  <p className="text-xs font-mono text-gray-500 mt-1">
                    Rad5 Tech Hub
                  </p>
                </div>
              </div>

              <div className="bg-navy border border-white/5 rounded-xl p-6 flex items-center space-x-6">
                <div className="w-12 h-12 rounded-lg bg-[#1a2332] flex items-center justify-center shrink-0">
                  <Award size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base">
                    Backend Engineer and Instructor
                  </h4>
                  <p className="text-xs font-mono text-gray-500 mt-1">
                    Webdeves Academy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

}