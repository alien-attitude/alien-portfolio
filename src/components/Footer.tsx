import { Zap } from 'lucide-react';
export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-navy py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © 2026 Divine Ezinwa Azubuike. Built with Kinetic Terminal.
        </p>

        <div className="flex items-center space-x-6 text-sm text-gray-400">
          <a href="https://github.com/alien-attitude" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/divine-azubuike-535041270/" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/loyalboyfriendd" className="hover:text-accent transition-colors">
            Twitter
          </a>
          <a href="divineazubuikeezinwa@gmail.com" className="hover:text-accent transition-colors">
            Email
          </a>

          <div className="hidden lg:flex items-center space-x-2 text-accent ml-8 pl-8 border-l border-white/10">
            <Zap size={14} className="fill-accent" />
            <span className="font-medium">System Operational</span>
          </div>
        </div>
      </div>
    </footer>);

}