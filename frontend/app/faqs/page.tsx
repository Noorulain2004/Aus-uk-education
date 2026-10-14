
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  CircleHelp,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const faqGroups = [
  {
    title: "Courses and qualifications",
    questions: [
      {
        question: "Which courses can I explore?",
        answer:
          "Visit our courses page to browse the qualifications currently listed on our website. Each course page provides its subject, level, description and displayed price.",
      },
      {
        question: "How do I find the right course for me?",
        answer:
          "Start by reviewing the course description, subject and level. If you are unsure which option suits your goals, contact our team before making a decision.",
      },
      {
        question: "Can I view course details before enquiring?",
        answer:
          "Yes. Open any listed course to review its available information, including the qualification, course overview and displayed price.",
      },
    ],
  },
  {
    title: "Enrolment and fees",
    questions: [
      {
        question: "How do I enrol on a course?",
        answer:
          "Online enrolment is not yet available. You can contact our team to enquire about a course and discuss the next steps.",
      },
      {
        question: "How much does a course cost?",
        answer:
          "The course page displays its current listed price. Please check the relevant course page and contact our team if you need clarification before proceeding.",
      },
      {
        question: "Can I pay online through the website?",
        answer:
          "Online checkout and payment are not currently available on the website. Please contact our team for guidance on the current arrangements.",
      },
    ],
  },
  {
    title: "Getting support",
    questions: [
      {
        question: "How can I ask a question about a course?",
        answer:
          "Visit our Contact page and prepare an enquiry with your name, email address, course of interest and message. Direct website submission is still being developed.",
      },
      {
        question: "What happens after I send an enquiry?",
        answer:
          "Your enquiry channel will depend on the method used to contact us. Please make sure you have a working contact method available. We do not currently display a guaranteed response time.",
      },
      {
        question: "Where can I find information about the learning process?",
        answer:
          "Visit our How It Works page for an overview of exploring courses, asking questions and discussing the next steps with our team.",
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
        <section className="border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="site-container py-14 sm:py-20">
            <div className="flex size-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--paper)] text-[var(--brand-brown)]">
              <CircleHelp size={24} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-brown)]">
              Frequently asked questions
            </p>

            <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The answers you need to get started.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Find information about our courses, displayed fees, enrolment
              and how to get in touch with our team.
            </p>

            <Link href="/courses" className="button-primary mt-8 inline-flex">
              Explore courses <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="site-container py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl space-y-12">
            {faqGroups.map((group, groupIndex) => (
              <section key={group.title}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-brown)]">
                    <BookOpen size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      Section {String(groupIndex + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold sm:text-2xl">
                      {group.title}
                    </h2>
                  </div>
                </div>

                <div className="divide-y divide-[var(--border)] overflow-hidden rounded-2xl border border-[var(--border)] bg-white">
                  {group.questions.map((faq) => (
                    <details key={faq.question} className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                        <span className="text-sm font-semibold leading-6 sm:text-base">
                          {faq.question}
                        </span>

                        <ArrowDownRight
                          size={19}
                          className="shrink-0 text-[var(--brand-brown)] transition-transform group-open:rotate-90"
                        />
                      </summary>

                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <p className="max-w-3xl text-sm leading-7 text-[var(--muted)]">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="site-container pb-16 sm:pb-20">
          <div className="flex flex-col gap-5 rounded-2xl bg-[var(--ink)] p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">
                Still have a question?
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                Get in touch if you need help understanding your course
                options or the next steps.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--surface)]"
            >
              Contact our team <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
