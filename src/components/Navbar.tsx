import { Link, useLocation } from 'react-router-dom';
import {RESUME_URL, RESUME_DOWNLOAD_NAME} from "../constants.ts";

export function Navbar() {
  const location = useLocation();
  const navLinks = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <nav className="sticky top-0 z-50 w-full bg-navy/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
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

        <div className="flex items-center">
          <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME}>
            <button className="px-6 py-2 text-sm font-medium text-navy bg-accent hover:bg-accent-hover transition-colors rounded-sm">
              RESUME
            </button>
          </a>

        </div>
      </div>
    </nav>);

}