'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BookOpen, Search, DollarSign, Users, Truck, Menu } from 'lucide-react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/post", label: "Sell" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className={`sticky top-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white/20 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-gray-600" />
            <span className="text-2xl font-bold text-gray-600">UniBook</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Button key={item.href} asChild variant="ghost">
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <Button asChild variant="ghost">
              <Link href="/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </nav>
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Button key={item.href} asChild variant="ghost" onClick={() => setIsSidebarOpen(false)}>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
                <Button asChild variant="ghost" onClick={() => setIsSidebarOpen(false)}>
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild onClick={() => setIsSidebarOpen(false)}>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Main content here */}
      </main>

      <footer className="bg-gray-100 mt-16">
        {/* Footer content here */}
      </footer>
    </div>
  )
}
