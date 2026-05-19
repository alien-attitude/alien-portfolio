import { motion } from 'framer-motion';
import { type FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Send,
  FileText,
  Download,
  AtSign,
  Phone,
  Code2,
  Terminal } from
'lucide-react';
import {
  CONTACT_EMAIL,
  RESUME_DOWNLOAD_NAME,
  RESUME_URL
} from '../constants';

type ToastState = {
  message: string;
  type: 'success' | 'error';
} | null

export function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    window.setTimeout(() => setToast(null), 3500);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const subject = String(formData.get('subject') ?? 'Portfolio inquiry').trim();
    const message = String(formData.get('message') ?? '').trim();

    if (!name || !email || !message) {
    showToast('Please fill in all required fields', 'error');
    return;}

    setIsSending(true);

    try {
      await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: name,
            from_email: email,
            subject,
            message,
            to_email: CONTACT_EMAIL
          },
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          }
      );
      showToast('Message sent successfully!', 'success');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      showToast('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSending(false)
    }
  };

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
          
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
            <span className="text-white">Let's </span>
            <span className="text-accent">Collaborate.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Currently looking for new opportunities or technical challenges.
            Whether you have a question or just want to say hi, my inbox is
            always open.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Form */}
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
              duration: 0.5,
              delay: 0.1
            }}
            className="lg:col-span-7 bg-navy-light border border-white/5 rounded-xl p-8">
            
            <div className="flex items-center space-x-3 mb-8">
              <Send size={24} className="text-accent" />
              <h2 className="text-2xl font-bold text-white">Send a Message</h2>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                    FULL NAME
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#0b1121] border border-white/5 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 transition-colors" />
                  
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                    EMAIL ADDRESS
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#0b1121] border border-white/5 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 transition-colors" />
                  
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                  SUBJECT
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Inquiry about project..."
                  required
                  className="w-full bg-[#0b1121] border border-white/5 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 transition-colors" />
              </div>

              {toast && (
                  <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`w-full md:w-[85%] mx-auto text-center px-4 py-3 rounded-md border text-sm ${
                          toast.type === 'success'
                              ? 'bg-emerald-500/10 border-emerald-400/40 text-emerald-300'
                              : 'bg-red-500/10 border-red-400/40 text-red-300'
                      }`}
                  >
                    {toast.message}
                  </motion.div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 tracking-widest uppercase">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your message here..."
                  required
                  className="w-full bg-[#0b1121] border border-white/5 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 transition-colors resize-none">
                </textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center px-6 py-3 bg-accent text-navy font-medium rounded-sm hover:bg-accent-hover transition-colors text-sm tracking-wide">
                {isSending ? (
                    <>
                    <span className="w-4 h-4 rounded-full border-2 border-navy/40 border-t-navy animate-spin mr-2" />
                    </>
                    ) : (
                        <>
                          INITIALIZE CONNECTION <Terminal size={16} className="ml-2" />
                        </>
                    )}

              </button>
            </form>
          </motion.div>

          {/* Right: Info Cards */}
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
              duration: 0.5,
              delay: 0.2
            }}
            className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Resume Card */}
            <div className="bg-navy-light border border-white/5 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-3">
                Professional Resume
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Computer Science graduate and Full Stack Developer with
                experience in Node.js, Express, Python, and scalable web
                architecture.
              </p>

              <a
                href={RESUME_URL}
                download={RESUME_DOWNLOAD_NAME}
                className="bg-[#1a2332] rounded-lg p-4 flex items-center justify-between group cursor-pointer hover:bg-[#222d40] transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded flex items-center justify-center">
                    <FileText size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">
                      Divine Ez. Azubuike CV
                    </h4>
                    <p className="text-gray-500 text-xs mt-0.5">
                      PDF • Updated 2024 • Computer Science Graduate
                    </p>
                  </div>
                </div>
                <Download
                  size={18}
                  className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                
              </a>
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-light border border-white/5 rounded-xl p-6 flex flex-col justify-center">
                <AtSign size={20} className="text-accent mb-4" />
                <h4 className="text-white font-medium text-sm mb-1">Email</h4>
                <p className="text-gray-500 text-xs">{CONTACT_EMAIL}</p>
              </div>
              <div className="bg-navy-light border border-white/5 rounded-xl p-6 flex flex-col justify-center">
                <Phone size={20} className="text-accent mb-4" />
                <h4 className="text-white font-medium text-sm mb-1">Call Me</h4>
                <p className="text-gray-500 text-xs">+2348 1450 13172</p>
              </div>
            </div>

            {/* GitHub Card */}
            <a href="https://github.com/alien-attitude?tab=repositories">
              <div className="bg-navy-light border border-white/5 rounded-xl p-6 flex items-center space-x-4">
                <Code2 size={20} className="text-accent" />
                <div>
                  <h4 className="text-white font-medium text-sm">GitHub</h4>
                  <p className="text-gray-500 text-xs mt-0.5">
                    View Repositories
                  </p>
                </div>
              </div>
            </a>

            {/* Availability Banner */}
            <div className="mt-auto bg-black border border-white/5 rounded-xl p-6 flex items-center space-x-3">
              <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse"></span>
              <span className="text-xs font-mono text-accent font-medium tracking-widest uppercase">
                AVAILABLE FOR NEW PROJECTS
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-6">
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
          className="w-full h-80 bg-[#080c17] rounded-2xl border border-white/5 relative overflow-hidden flex items-end p-8">
          
          {/* Abstract Map Background */}
          <div className="absolute inset-0 opacity-30">
            {/* Using a radial gradient to simulate a glowing map center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
            {/* Grid lines to look like a map/radar */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
            {/* Simulated nodes */}
            <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"></div>
            <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)]"></div>
            <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_15px_3px_rgba(0,229,199,0.8)] animate-pulse"></div>
          </div>

          <div className="relative z-10">
            <h4 className="text-xs font-mono text-gray-500 tracking-widest uppercase mb-2">
              BASE OF OPERATIONS
            </h4>
            <h2 className="text-3xl font-bold text-white mb-1">Aba, Nigeria</h2>
            <p className="text-gray-400 text-sm">
              Remote worldwide • Open to relocation
            </p>
          </div>
        </motion.div>
      </section>
    </div>);

}
