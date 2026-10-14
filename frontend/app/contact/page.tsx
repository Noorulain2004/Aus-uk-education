
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
        <section className="border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="site-container py-14 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-brown)]">
              We are here to help
            </p>

            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let&apos;s talk about your learning goals.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Have a question about our courses? Send us an enquiry and tell us
              what you would like to know.
            </p>
          </div>
        </section>

        <section className="site-container grid gap-10 py-12 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              How can we help?
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              Whether you need information about a qualification or want to
              understand your next steps, start by getting in touch.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-brown)]">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Email enquiries</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    Use the enquiry form to tell us what you need help with.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-brown)]">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Course guidance</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    Ask about course levels, subjects and available options.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-brown)]">
                  <Clock3 size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Response times</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                    We will confirm our response arrangements once your
                    enquiry channel is configured.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/faqs"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-brown)] hover:underline"
            >
              Browse frequently asked questions
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-brown)]">
                <Mail size={21} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Send an enquiry</h2>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                  Complete the details below to prepare your message.
                </p>
              </div>
            </div>

            <form
              action="mailto:"
              method="get"
              encType="text/plain"
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    name="Name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--brand-brown)] focus:ring-2 focus:ring-[var(--brand-brown)]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="Email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--brand-brown)] focus:ring-2 focus:ring-[var(--brand-brown)]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="course"
                  className="mb-2 block text-sm font-medium"
                >
                  Course you are interested in
                </label>
                <select
                  id="course"
                  name="Course"
                  defaultValue=""
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-sm outline-none transition focus:border-[var(--brand-brown)] focus:ring-2 focus:ring-[var(--brand-brown)]/10"
                >
                  <option value="">Select a course (optional)</option>
                  <option value="Functional Skills English">
                    Functional Skills English
                  </option>
                  <option value="Functional Skills Mathematics">
                    Functional Skills Mathematics
                  </option>
                  <option value="Other course">Other course</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows={5}
                  required
                  placeholder="Tell us how we can help..."
                  className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--paper)] px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--brand-brown)] focus:ring-2 focus:ring-[var(--brand-brown)]/10"
                />
              </div>

              <p className="flex items-start gap-2 text-xs leading-5 text-[var(--muted)]">
                <ShieldCheck
                  size={16}
                  className="mt-0.5 shrink-0 text-[var(--brand-brown)]"
                />
                Please do not include passwords, payment details or other
                sensitive information in your message.
              </p>

              <button
                type="submit"
                className="button-primary flex w-full items-center justify-center gap-2"
              >
                Prepare email enquiry
                <ArrowRight size={16} />
              </button>

              <p className="text-xs leading-5 text-[var(--muted)]">
                This currently uses your device&apos;s email handler. Direct
                website submission will be connected in the backend
                integration step.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
