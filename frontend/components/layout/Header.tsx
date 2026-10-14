
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowUpRight,
  Home,
  GraduationCap,
  ShieldCheck,
  LogIn,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

const navigation: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Courses", href: "/courses" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="site-container flex h-[76px] items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          aria-label="AUS UK Education home"
          onClick={closeMenu}
          className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-brown)]"
        >
          <Image
            src="/images/aus-uk-logo.png"
            alt="AUS (UK) Education"
            width={300}
            height={180}
            priority
            className="h-[58px] w-[96px] object-contain sm:h-[66px] sm:w-[112px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 xl:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Login Actions */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            href="/student/login"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--surface)] hover:text-[var(--brand-brown)]"
          >
            <GraduationCap size={18} aria-hidden="true" />
            <span>Student Login</span>
          </Link>

          <Link
            href="/admin/login"
            aria-label="Admin login"
            title="Admin login"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--ink)] transition hover:border-[var(--brand-brown)] hover:bg-[var(--surface)] hover:text-[var(--brand-brown)]"
          >
            <ShieldCheck size={19} aria-hidden="true" />
          </Link>

          <Link
            href="/courses"
            className="button-primary"
          >
            Explore courses
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {/* Tablet and Mobile Actions */}
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <Link
            href="/student/login"
            aria-label="Student login"
            title="Student login"
            className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--ink)] transition hover:bg-[var(--surface)]"
          >
            <GraduationCap size={20} aria-hidden="true" />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--ink)] transition hover:bg-[var(--surface)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-brown)]"
          >
            {menuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-[var(--border)] bg-[var(--paper)] px-5 py-4 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--surface)] hover:text-[var(--brand-brown)]"
                >
                  {Icon ? <Icon size={18} aria-hidden="true" /> : null}
                  {item.label}
                </Link>
              );
            })}

            <div className="my-2 border-t border-[var(--border)]" />

            <Link
              href="/student/login"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--surface)]"
            >
              <GraduationCap size={19} aria-hidden="true" />
              Student Login
              <LogIn size={16} className="ml-auto" aria-hidden="true" />
            </Link>

            <Link
              href="/admin/login"
              onClick={closeMenu}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--surface)]"
            >
              <ShieldCheck size={19} aria-hidden="true" />
              Admin Login
              <ArrowUpRight
                size={16}
                className="ml-auto"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/courses"
              onClick={closeMenu}
              className="button-primary mt-2 justify-center"
            >
              Explore courses
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
