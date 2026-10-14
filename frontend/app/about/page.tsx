
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Compass,
  GraduationCap,
  Target,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const values = [
  {
    icon: Compass,
    title: "Clear guidance",
    description:
      "Understand your options and find the course information you need to make an informed decision.",
  },
  {
    icon: BookOpen,
    title: "Skills for life",
    description:
      "Explore Functional Skills courses focused on practical English and mathematics.",
  },
  {
    icon: Target,
    title: "Learning with purpose",
    description:
      "Find learning options that align with your personal, educational or career goals.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
        <section className="border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="site-container py-14 sm:py-20 lg:py-24">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-brown)]">
              About AUS (UK) Education
            </p>

            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Helping you take the next step in your learning journey.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              We provide a place to explore course information, understand
              available learning options and take the first step towards
              developing practical skills.
            </p>

            <Link href="/courses" className="button-primary mt-8 inline-flex">
              Explore our courses <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="site-container grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-brown)]">
              What we do
            </p>

            <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
              Making course information easier to explore.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[var(--muted)] sm:text-base">
              Choosing a course can raise a lot of questions. Our website
              brings course descriptions, qualification levels, subjects and
              displayed prices together so you can review the information
              available before making your next decision.
            </p>

            <p className="mt-4 text-sm leading-8 text-[var(--muted)] sm:text-base">
              If you need more information, you can use our contact page to
              prepare an enquiry and discuss your options with our team.
            </p>

            <Link
              href="/how-it-works"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-brown)] hover:underline"
            >
              See how it works <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-9">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-[var(--paper)] text-[var(--brand-brown)]">
              <GraduationCap size={28} strokeWidth={1.6} />
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              Your learning goals matter.
            </h3>

            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              Whether you want to develop your English, strengthen your
              mathematics skills or explore a qualification, start by reviewing
              the available course information and asking questions where
              needed.
            </p>

            <div className="mt-7 border-t border-[var(--border)] pt-5">
              <p className="text-sm font-semibold">A practical first step</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                Explore the course catalogue and find the details most relevant
                to your goals.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-[var(--surface)]">
          <div className="site-container py-14 sm:py-20">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-brown)]">
                Our approach
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                A clearer way to explore your options.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                We aim to make the information you need easy to find and
                straightforward to understand.
              </p>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-6"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-brown)]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>

                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-container py-14 sm:py-20">
          <div className="flex flex-col gap-6 rounded-2xl bg-[var(--ink)] p-6 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Ready to explore your options?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
                Browse the available courses or get in touch if you need help
                understanding the next steps.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[var(--ink)] hover:bg-[var(--surface)]"
              >
                View courses <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
