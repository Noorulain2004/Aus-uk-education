import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";


type Course = {
  id: string;
  slug: string;
  title: string;
  qualification: string;
  level: number;
  subject: string;
  short_description: string;
  description: string;
  price: string;
  currency: string;
  image_url: string | null;
};

type CourseResponse = {
  success: boolean;
  data?: Course;
  message?: string;
};

async function getCourse(slug: string): Promise<Course | null> {
  const apiUrl =
    process.env.BACKEND_API_URL ||
    process.env.API_URL ||
    "http://localhost:4000";

  const response = await fetch(
    `${apiUrl}/api/courses/${encodeURIComponent(slug)}`,
    { cache: "no-store" }
  );

  if (response.status === 404) return null;

  if (!response.ok) {
    throw new Error(`Course API returned ${response.status}`);
  }

  const result: CourseResponse = await response.json();
  return result.success && result.data ? result.data : null;
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await connection();

  const { slug } = await params;
  const course = await getCourse(slug);

  if (!course) notFound();

  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: course.currency || "GBP",
  }).format(Number(course.price));

  const benefits = [
    {
      icon: BookOpen,
      title: "Practical learning",
      description: "Build skills you can use in everyday life and work.",
    },
    {
      icon: GraduationCap,
      title: "Recognised qualification",
      description: course.qualification,
    },
    {
      icon: Clock3,
      title: "Study information",
      description: "Contact our team for guidance on course arrangements.",
    },
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
        <section className="border-b border-[var(--border)] bg-[var(--surface)]">
          <div className="site-container py-8 sm:py-12 lg:py-16">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-brown)] transition hover:gap-3"
            >
              <ArrowLeft size={16} />
              All courses
            </Link>

            <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--paper)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--brand-brown)]">
                  <GraduationCap size={15} />
                  Functional Skills
                </div>

                <p className="mt-6 text-sm font-semibold text-[var(--muted)]">
                  {course.qualification}
                </p>

                <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {course.title}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                  {course.short_description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded-lg bg-[var(--paper)] px-4 py-2 text-sm font-medium ring-1 ring-[var(--border)]">
                    Level {course.level}
                  </span>
                  <span className="rounded-lg bg-[var(--paper)] px-4 py-2 text-sm font-medium ring-1 ring-[var(--border)]">
                    {course.subject}
                  </span>
                </div>
              </div>

              <aside className="rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-6 shadow-sm sm:p-7 lg:sticky lg:top-24">
                <p className="text-sm font-medium text-[var(--muted)]">
                  Course price
                </p>

                <p className="mt-2 text-3xl font-semibold tracking-tight">
                  {formattedPrice}
                </p>

                <div className="my-6 border-t border-[var(--border)]" />

                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={21}
                    className="mt-0.5 shrink-0 text-[var(--brand-brown)]"
                  />
                  <div>
                    <p className="text-sm font-semibold">
                      Need help choosing?
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      Our team can help you understand the course before you
                      get started.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="button-primary mt-6 flex w-full items-center justify-center gap-2"
                >
                  Enquire about this course
                  <ArrowRight size={16} />
                </Link>

                <p className="mt-3 text-center text-xs leading-5 text-[var(--muted)]">
                  Online enrolment and payment are not yet available.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="site-container py-12 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-brown)]">
                Course overview
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                About this course
              </h2>

              <p className="mt-5 whitespace-pre-line text-base leading-8 text-[var(--muted)]">
                {course.description}
              </p>

              <div className="mt-10 border-t border-[var(--border)] pt-8">
                <h2 className="text-xl font-semibold">
                  What you should know
                </h2>

                <ul className="mt-5 space-y-4">
                  {[
                    `Qualification: ${course.qualification}`,
                    `Study level: Level ${course.level}`,
                    `Subject: ${course.subject}`,
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={19}
                        className="mt-0.5 shrink-0 text-[var(--brand-brown)]"
                      />
                      <span className="text-sm leading-6 text-[var(--muted)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
                <h2 className="text-lg font-semibold">
                  Why study with us?
                </h2>

                <div className="mt-6 space-y-6">
                  {benefits.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="flex gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--paper)] text-[var(--brand-brown)]">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/faqs"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-brown)] hover:underline"
                >
                  Read frequently asked questions
                  <ArrowRight size={15} />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
