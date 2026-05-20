import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Globe,
  CalendarCheck,
  MessageCircle,
  Users,
  CreditCard,
  LayoutDashboard,
  Mail,
  Bot,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  Layers } from
'lucide-react';
const services = [
{
  icon: Globe,
  title: 'Website Development',
  tag: 'WEB',
  description:
  'Fast, accessible, conversion-focused websites built with modern stacks like React, Next.js, and TypeScript.',
  features: ['Custom UI/UX', 'SEO-ready', 'Lightning fast']
},
{
  icon: CalendarCheck,
  title: 'Booking Systems',
  tag: 'AUTOMATION',
  description:
  'Smart scheduling platforms with calendar sync, reminders, and payments, built for service businesses.',
  features: ['Calendar sync', 'Auto reminders', 'Stripe ready']
},
{
  icon: MessageCircle,
  title: 'WhatsApp Integration',
  tag: 'MESSAGING',
  description:
  'Direct your customer journey through WhatsApp with automated flows, notifications, and AI replies.',
  features: ['Cloud API', 'Auto replies', 'Order tracking']
},
{
  icon: Users,
  title: 'CRM Setup',
  tag: 'BUSINESS',
  description:
  'Custom CRMs that centralize leads, pipeline, and customer history, tailored to your sales process.',
  features: ['Lead pipeline', 'Custom fields', 'Reports & analytics']
},
{
  icon: CreditCard,
  title: 'Payment Integration',
  tag: 'FINANCE',
  description:
  'Secure, PCI-compliant payment flows, Stripe, Paystack, Flutterwave, subscriptions, and webhooks.',
  features: ['Multi-gateway', 'Subscriptions', 'Webhook-driven']
},
{
  icon: LayoutDashboard,
  title: 'Admin Portals',
  tag: 'INTERNAL',
  description:
  'Powerful internal dashboards for managing operations, users, and data with role-based access.',
  features: ['Role-based access', 'Real-time data', 'Audit logs']
},
{
  icon: Mail,
  title: 'Email Automation',
  tag: 'GROWTH',
  description:
  'Trigger-based email workflows that nurture leads, onboard users, and recover abandoned carts.',
  features: ['Drip campaigns', 'Personalization', 'Analytics']
},
{
  icon: Bot,
  title: 'AI Chatbots',
  tag: 'AI',
  description:
  'Custom AI assistants powered by GPT, Claude, Gemini, and Groq, trained on your data to support, sell, and engage.',
  features: ['LLM-powered', 'Trained on your data', '24/7 support']
},
{
  icon: GraduationCap,
  title: 'School Portals',
  tag: 'EDUCATION',
  description:
  'End-to-end school management — students, staff, results, fees, and parent communication.',
  features: ['Student records', 'Results & fees', 'Parent access']
}];

const process = [
{
  step: '01',
  title: 'Discovery',
  description:
  'We map out your goals, users, and constraints in a focused kickoff session.'
},
{
  step: '02',
  title: 'Architecture',
  description:
  'I design the system, data model, and UI flows — built for scale from day one.'
},
{
  step: '03',
  title: 'Build',
  description:
  'Iterative development with weekly demos. You see progress, not promises.'
},
{
  step: '04',
  title: 'Launch & Support',
  description:
  'Deploy, monitor, and iterate. I stay on as a partner, not just a contractor.'
}];

const categories = [
{
  id: 'all',
  label: 'All Services'
},
{
  id: 'WEB',
  label: 'Web'
},
{
  id: 'AUTOMATION',
  label: 'Automation'
},
{
  id: 'AI',
  label: 'AI'
},
{
  id: 'BUSINESS',
  label: 'Business'
}];

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const filteredServices =
  activeCategory === 'all' ?
  services :
  services.filter((s) => {
    if (activeCategory === 'AUTOMATION')
    return ['AUTOMATION', 'MESSAGING', 'GROWTH'].includes(s.tag);
    if (activeCategory === 'BUSINESS')
    return ['BUSINESS', 'FINANCE', 'INTERNAL', 'EDUCATION'].includes(
      s.tag
    );
    return s.tag === activeCategory;
  });
  return (
    <div className="w-full pb-20">
      {/* Hero Section */}
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
            <Sparkles size={14} className="text-accent" />
            <span className="text-xs font-mono text-accent font-medium tracking-wider">
              SERVICES.OFFERED: 09
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 leading-[1.05]">
            <span className="text-white">Engineered </span>
            <span className="text-accent">Solutions</span>
            <br />
            <span className="text-white">for ambitious teams.</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            From websites to AI-powered automations. I design and ship
            production-grade digital products that scale with your business.
          </p>

          {/* Quick stat row */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-10">
            {[
            {
              icon: Layers,
              label: '9 Core Services',
              value: 'Full-stack'
            },
            {
              icon: Zap,
              label: 'Avg. Delivery',
              value: '2–6 weeks'
            },
            {
              icon: ShieldCheck,
              label: 'Production Ready',
              value: '100%'
            },
            {
              icon: Clock,
              label: 'Support Window',
              value: '30 days+'
            }].
            map((stat, i) =>
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 10
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.05
              }}
              className="flex flex-col">
              
                <stat.icon size={18} className="text-accent mb-3" />
                <div className="text-xl md:text-2xl font-bold font-display text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-gray-500 tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
          {categories.map((cat) =>
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${activeCategory === cat.id ? 'bg-accent text-navy' : 'bg-navy-light text-gray-400 hover:text-white border border-white/5'}`}>
            
              {cat.label}
            </button>
          )}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
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
                  delay: i * 0.05
                }}
                className="group relative bg-navy-light border border-white/5 rounded-xl p-8 hover:border-accent/30 transition-all duration-300 overflow-hidden">
                
                {/* Hover glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 tracking-widest">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) =>
                    <li
                      key={feature}
                      className="flex items-center text-xs text-gray-300 font-mono">
                      
                        <span className="w-1 h-1 rounded-full bg-accent mr-3" />
                        {feature}
                      </li>
                    )}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm text-accent font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                    
                    Discuss this <ArrowRight size={14} className="ml-1.5" />
                  </Link>
                </div>
              </motion.div>);

          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-y border-white/5 bg-navy-light/30">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center space-x-2 bg-navy border border-white/10 rounded-full px-3 py-1.5 mb-6">
              <span className="text-xs font-mono text-accent font-medium tracking-wider">
                THE_PROCESS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
              How we <span className="text-accent">ship</span>.
            </h2>
            <p className="text-gray-400 text-lg">
              A clear, predictable process — from idea to launch and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) =>
            <motion.div
              key={p.step}
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
                delay: i * 0.1
              }}
              className="relative">
              
                <div className="text-accent font-mono text-sm mb-4">
                  {p.step}
                </div>
                <h4 className="text-xl font-bold font-display text-white mb-3">
                  {p.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {p.description}
                </p>
                {i < process.length - 1 &&
              <div className="hidden lg:block absolute top-2 right-0 w-12 h-px bg-gradient-to-r from-white/10 to-transparent" />
              }
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
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
            className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
            
            Let's build your <span className="text-accent">solution</span>.
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
            className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            
            Have a project in mind? Let's talk about how we can ship it — fast,
            polished, and built to last.
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
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-accent text-navy font-medium rounded-sm hover:bg-accent-hover transition-colors">
              
              START A PROJECT <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors text-center">
              
              VIEW PAST WORK
            </Link>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-accent/5 blur-[100px] -z-10 rounded-full pointer-events-none" />
      </section>
    </div>);

}