'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={navRef}
      style={{ height: '88px' }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-200 ${
        scrolled
          ? 'bg-white border-b border-black/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-medium text-[18px] text-black tracking-tight select-none"
        >
          Tabs
          <span className="text-leafy-green">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-black/70 hover:text-black transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-[15px] text-black/70 hover:text-black transition-colors duration-150"
          >
            Sign In
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-leafy-green text-black text-[15px] font-medium px-5 py-2.5 rounded-[12px] hover:bg-[#85d9ae] active:bg-[#5cb88a] transition-colors duration-150 select-none"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2 rounded-[8px] hover:bg-black/[0.05] transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-[88px] left-0 right-0 bg-white border-b border-black/[0.06] px-8 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[17px] text-black"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-leafy-green text-black text-[15px] font-medium px-5 py-3 rounded-[12px] mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
