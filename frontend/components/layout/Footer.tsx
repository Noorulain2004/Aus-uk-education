
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Courses", href: "/courses" },
  { label: "How it works", href: "/how-it-works" },
  { label: "About us", href: "/about" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Refund policy", href: "/refunds" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className="site-container py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-light)]">
              AUS (UK) Education
            </p>
            <h2 className="mt-4 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
              Build skills.
              <br />
              Open doors.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
              Explore Functional Skills learning opportunities and take your
              next step with confidence.
            </p>
            <Link
              href="/courses"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[var(--accent-light)]"
            >
              Explore courses <ArrowUpRight size={16} />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Useful information</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xs text-xs leading-6 text-white/50">
              Please review the details and terms of your chosen course before
              enrolling.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} AUS (UK) Education. All rights reserved.
          </p>
          <p>Supporting your next step in education.</p>
        </div>
      </div>
    </footer>
  );
}
