import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import DemoRequestModal from '../ui/DemoRequestModal'
import { services } from '../data/services'

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [demoModalOpen, setDemoModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-black text-white">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-lg border-b border-white/10' : 'bg-black/50 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Shield className="h-7 text-white transition-transform group-hover:scale-110" />
            <span className="font-semibold">
              CYBER<span className="text-blue-500">DORK</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/about" className="text-sm hover:underline">
              About
            </Link>

            <div className="relative">
              <button
                onClick={() => setServicesOpen((s) => !s)}
                className="flex items-center gap-2 text-sm"
                aria-expanded={servicesOpen}
              >
                Services <ChevronDown className="h-4" />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 mt-2 w-48 bg-white/5 rounded-md shadow-lg p-2"
                  >
                    {services.map((s, i) => (
                      <Link key={i} to={s.href || '#'} className="block px-3 py-2 text-sm">
                        {s.name || s.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => setDemoModalOpen(true)} className="text-sm bg-blue-600 px-3 py-1 rounded-md">
              Request Demo
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen((s) => !s)} aria-label="menu">
              {mobileMenuOpen ? <X className="h-6" /> : <Menu className="h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-black/90 border-t border-white/5"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                  About
                </Link>
                <div>
                  <button onClick={() => setServicesOpen((s) => !s)} className="flex items-center gap-2">
                    Services <ChevronDown className="h-4" />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {services.map((s, i) => (
                          <Link key={i} to={s.href || '#'} className="block px-2 py-1">
                            {s.name || s.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button onClick={() => setDemoModalOpen(true)} className="bg-blue-600 px-3 py-1 rounded-md">
                  Request Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">{children}</main>

      <DemoRequestModal open={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  )
}
