import {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Menu, X} from 'lucide-react';
import {RESUME_URL, RESUME_DOWNLOAD_NAME} from "../constants.ts";

export function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    {
      name: 'HOME',
      path: '/'
    },
    {
      name: 'SERVICES',
      path: '/services'
    },
    {
      name: 'PROJECTS',
      path: '/projects'
    },
    {
      name: 'ABOUT',
      path: '/about'
    },
    {
      name: 'CONTACT',
      path: '/contact'
    }];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-navy/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="text-xl font-bold tracking-tight text-white font-display">
          
          ALIEN 👽
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative py-2 ${isActive ? 'text-accent' : 'text-gray-400 hover:text-white'}`}>
                
                {link.name}
                {isActive &&
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-t-md" />
                }
              </Link>);

          })}
        </div>

        <div className="hidden md:flex items-center">
          <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME}>
            <button className="px-6 py-2 text-sm font-medium text-navy bg-accent hover:bg-accent-hover transition-colors rounded-sm">
              RESUME
            </button>
          </a>
        </div>

        <button
            type="button"
            className="md:hidden inline-flex items-center justify-center text-gray-200 hover:text-white"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-navy px-6 py-4 space-y-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                  <Link
                      key={link.name}
                      to={link.path}
                      onClick={closeMobileMenu}
                      className={`block text-sm font-medium py-2 ${
                          isActive ? 'text-accent' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
              );
            })}

            <a
                href={RESUME_URL}
                download={RESUME_DOWNLOAD_NAME}
                onClick={closeMobileMenu}
                className="inline-block mt-2"
            >
              <button className="px-5 py-2 text-sm font-medium text-navy bg-accent hover:bg-accent-hover transition-colors rounded-sm">
                RESUME
              </button>
            </a>
          </div>
      )}
    </nav>
  );
}