
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const steps = [
  {
    number: "01",
    icon: BookOpen,
    title: "Explore courses",
    description:
      "Browse our available courses and review the qualification, level, subject and course information.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Speak to our team",
    description:
      "Ask questions about course options and get guidance before deciding how to proceed.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Discuss your next steps",
    description:
      "Our team can explain the next steps and any information required for your chosen course.",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Start your learning journey",
    description:
      "Once your enrolment arrangements are confirmed, follow the guidance provided for your course.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
        <section className="border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="site-container py-14 sm:py-20 lg:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-brown)]">
              Your journey starts here
            </p>

            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Getting started with your course should feel simple.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Explore your options, ask questions and understand the next steps
              towards developing your skills.
            </p>

            <Link href="/courses" className="button-primary mt-8 inline-flex">
              Explore courses <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="site-container py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-brown)]">
              The process
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Four steps to get started
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Here is an overview of the process. Exact arrangements depend on
              your chosen course and confirmation from our team.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <article
                key={number}
                className="rounded-2xl border border-[var(--border)] bg-white p-6 transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-brown)]">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                  <span className="text-sm font-semibold text-[var(--brand-brown)]">
                    {number}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="site-container pb-16 sm:pb-20">
          <div className="rounded-2xl bg-[var(--ink)] px-6 py-10 text-white sm:px-10 sm:py-12">
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Have a question before you begin?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
              Contact our team if you need help understanding your course
              options or the next steps.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface)]"
              >
                Contact us <ArrowRight size={16} />
              </Link>
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Browse FAQs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
