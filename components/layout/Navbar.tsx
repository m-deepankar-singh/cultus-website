"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(27, 69, 128, 0.96)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px)",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.2)"
            : "1px solid transparent",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="focus-ring relative z-10 rounded-sm">
            <Image
              src="/images/Cultus-white (1).png"
              alt="Cultus – Skilling & Jobtech"
              width={140}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                {item.children ? (
                  <button
                    className={cn(
                      "focus-ring flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium transition-all duration-300 rounded-full cursor-pointer tracking-wide focus-visible:outline-none",
                      "text-white/85 hover:text-white hover:bg-white/[0.14]"
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn(
                      "w-3 h-3 transition-transform duration-200",
                      dropdownOpen === item.label && "rotate-180"
                    )} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "focus-ring px-4 py-2 text-[13px] font-medium transition-all duration-300 rounded-full block tracking-wide focus-visible:outline-none",
                      "text-white/85 hover:text-white hover:bg-white/[0.14]"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown - Glass effect */}
                <AnimatePresence>
                  {item.children && dropdownOpen === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[var(--shadow-elevated)] border border-primary/10 overflow-hidden py-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="focus-ring group/item flex items-center justify-between px-4 py-3 text-sm text-text-dark/85 hover:text-primary hover:bg-primary/[0.035] transition-all focus-visible:outline-none"
                        >
                          <span>{child.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-primary" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              href="/contact"
              variant="secondary"
              size="sm"
              className="border-white/30 bg-white text-primary hover:bg-white shadow-2xl shadow-black/20"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={cn(
              "focus-ring lg:hidden relative z-10 p-2.5 rounded-xl transition-all cursor-pointer focus-visible:outline-none",
              "text-white hover:bg-white/12"
            )}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-[var(--shadow-elevated)]"
            >
              <div className="flex flex-col pt-24 px-8 h-full overflow-y-auto">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-gray-50">
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setDropdownOpen(
                              dropdownOpen === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full py-4 text-base font-semibold text-text-dark cursor-pointer"
                        >
                          {item.label}
                          <motion.div
                            animate={{
                              rotate: dropdownOpen === item.label ? 180 : 0,
                            }}
                          >
                            <ChevronDown className="w-4 h-4 text-text-muted" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {dropdownOpen === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="focus-ring block rounded-md py-3 pl-4 text-sm text-text-secondary hover:text-primary transition-colors focus-visible:outline-none"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="focus-ring block rounded-md py-4 text-base font-semibold text-text-dark hover:text-primary transition-colors focus-visible:outline-none"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="py-8">
                  <Button href="/contact" size="lg" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
