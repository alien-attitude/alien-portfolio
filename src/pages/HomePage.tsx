import { Link } from 'react-router-dom';
import { ArrowRight, Globe,
  CalendarCheck,
  MessageCircle,
  Bot,
  CreditCard,
  LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import { RESUME_DOWNLOAD_NAME, RESUME_URL } from '../constants';
export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            duration: 0.6
          }}
          className="flex flex-col items-start">
          
          <div className="inline-flex items-center space-x-2 bg-navy-light border border-white/10 rounded-full px-3 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-xs font-mono text-accent font-medium tracking-wider">
              AVAILABLE FOR HIRE
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold font-display leading-tight mb-6">
            <span className="block text-white">Divine Ezinwa</span>
            <span className="block text-accent">Azubuike</span>
          </h1>

          <p className="text-2xl md:text-3xl font-light text-gray-300 mb-6 leading-snug">
            Full Stack Developer building{' '}
            <em className="font-serif italic text-white">kinetic</em> digital
            experiences.
          </p>

          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Results-driven Computer Science graduate and Full Stack Developer
            with hands-on experience building, deploying, and maintaining web
            applications.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent text-navy font-medium rounded-sm hover:bg-accent-hover transition-colors">
              
              VIEW MY WORK <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors">
              
              CONTACT ME
            </Link>
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
            duration: 0.6,
            delay: 0.2
          }}
          className="relative w-full max-w-lg mx-auto lg:ml-auto">
          
          {/* Terminal Mockup */}
          <div className="bg-[#0d1322] rounded-lg border border-white/10 overflow-hidden shadow-2xl shadow-accent/5">
            {/* Terminal Header */}
            <div className="bg-[#151e32] px-4 py-3 flex items-center border-b border-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto text-xs font-mono text-gray-500">
                bash — portfolio.ts
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="flex">
                <span className="text-gray-600 mr-4 select-none">01</span>
                <span>
                  <span className="text-blue-400">const</span>{' '}
                  <span className="text-white">developer</span>{' '}
                  <span className="text-accent">=</span> {'{'}
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 mr-4 select-none">02</span>
                <span className="ml-4">
                  <span className="text-gray-300">name:</span>{' '}
                  <span className="text-green-400">'Divine Azubuike'</span>,
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 mr-4 select-none">03</span>
                <span className="ml-4">
                  <span className="text-gray-300">role:</span>{' '}
                  <span className="text-green-400">'Full Stack Developer'</span>,
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 mr-4 select-none">04</span>
                <span className="ml-4">
                  <span className="text-gray-300">focus:</span> [
                  <span className="text-green-400">'React'</span>,{' '}
                  <span className="text-green-400">'Node'</span>,{' '}
                  <span className="text-green-400">'Database'</span>],
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 mr-4 select-none">05</span>
                <span className="ml-4">
                  <span className="text-gray-300">status:</span>{' '}
                  <span className="text-green-400">'Actively Innovating'</span>
                </span>
              </div>
              <div className="flex">
                <span className="text-gray-600 mr-4 select-none">06</span>
                <span>{'}'};</span>
              </div>
              <div className="flex mt-4">
                <span className="text-gray-600 mr-4 select-none">07</span>
                <span>
                  <span className="text-blue-400">await</span>{' '}
                  <span className="text-white">developer</span>.
                  <span className="text-blue-300">deploy</span>();
                </span>
              </div>
              <div className="flex mt-4 items-center">
                <span className="text-accent mr-2">→</span>
                <span className="w-2.5 h-4 bg-gray-400 animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-accent/10 blur-3xl -z-10 rounded-full opacity-50"></div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-navy-light/30">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
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
              className="flex flex-col">
              
              <div className="text-4xl md:text-5xl font-bold font-display text-accent mb-2">
                20+
              </div>
              <div className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                PROJECTS BUILT
              </div>
            </motion.div>

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
              className="flex flex-col">
              
              <div className="text-4xl md:text-5xl font-bold font-display text-accent mb-2">
                BSC
              </div>
              <div className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                COMPUTER SCIENCE
              </div>
            </motion.div>

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
              className="flex flex-col">
              
              <div className="text-4xl md:text-5xl font-bold font-display text-accent mb-2">
                Full
              </div>
              <div className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                STACK MASTERY
              </div>
            </motion.div>

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
                delay: 0.3
              }}
              className="flex flex-col">
              
              <div className="text-4xl md:text-5xl font-bold font-display text-accent mb-2">
                Kinetic
              </div>
              <div className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                DESIGN SYSTEM
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Intro Section */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Heading + CTA */}
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
                className="lg:col-span-5">

              <div className="inline-flex items-center space-x-2 bg-navy-light border border-white/10 rounded-full px-3 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                <span className="text-xs font-mono text-accent font-medium tracking-wider">
                  WHAT_I_BUILD
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-5 leading-tight">
                Solutions that <span className="text-accent">scale</span> with
                your business.
              </h2>

              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                From websites and booking systems to AI chatbots and CRMs. I
                design and ship production-grade digital products tailored to
                your needs.
              </p>

              <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-accent text-navy font-medium rounded-sm hover:bg-accent-hover transition-colors w-full sm:w-auto group">

                EXPLORE ALL SERVICES
                <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform" />

              </Link>
            </motion.div>

            {/* Right: Quick service grid preview */}
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
                  delay: 0.15
                }}
                className="lg:col-span-7">

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  {
                    icon: Globe,
                    label: 'Website Development'
                  },
                  {
                    icon: CalendarCheck,
                    label: 'Booking Systems'
                  },
                  {
                    icon: MessageCircle,
                    label: 'WhatsApp Integration'
                  },
                  {
                    icon: Bot,
                    label: 'AI Chatbots'
                  },
                  {
                    icon: CreditCard,
                    label: 'Payment Integration'
                  },
                  {
                    icon: LayoutDashboard,
                    label: 'Admin Portals'
                  }].
                map((item) => {
                  const Icon = item.icon;
                  return (
                      <Link
                          key={item.label}
                          to="/services"
                          className="group bg-navy-light border border-white/5 rounded-xl p-4 md:p-5 hover:border-accent/30 transition-all duration-300 flex flex-col items-start">

                        <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                          <Icon size={16} className="text-accent" />
                        </div>
                        <div className="text-white text-sm font-medium leading-snug">
                          {item.label}
                        </div>
                      </Link>);

                })}
              </div>

              {/* Mobile-friendly "more services" hint */}
              <Link
                  to="/services"
                  className="mt-4 inline-flex items-center text-sm text-gray-400 hover:text-accent transition-colors font-mono">

                + 3 more services <ArrowRight size={14} className="ml-1.5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Subtle background glow */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 blur-[120px] -z-10 rounded-full pointer-events-none" />
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.h2
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
            className="text-4xl md:text-5xl font-bold font-display mb-6 leading-tight">
            
            Ready to bring your technical
            <br />
            vision to life?
          </motion.h2>
          <motion.p
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
            className="text-gray-400 text-lg mb-10">
            
            I'm currently accepting new projects and collaboration
            opportunities.
          </motion.p>
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
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-accent text-navy font-medium rounded-sm hover:bg-accent-hover transition-colors text-center">
              
              LET'S TALK
            </Link>
            <a
              href={RESUME_URL}
              download={RESUME_DOWNLOAD_NAME}
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors text-center">
              GET RESUME
            </a>
          </motion.div>
        </div>

        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-accent/5 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
      </section>
    </div>);

}
