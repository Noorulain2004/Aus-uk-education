
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Headphones,
  Sparkles,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

type Course = {
  id: string;
  slug: string;
  title: string;
  qualification: string | null;
  level: number | null;
  subject: string | null;
  short_description: string | null;
  description: string | null;
  price: string | number;
  currency: string;
  image_url: string | null;
};

type CoursesResponse = {
  success: boolean;
  count: number;
  data: Course[];
};

async function getCourses(): Promise<Course[] | null> {
  const apiUrl =
    process.env.BACKEND_API_URL || "http://localhost:4000";

  try {
    const response = await fetch(`${apiUrl}/api/courses`, {
      cache: "no-store",
    });

    if (!response.ok) return null;

    const result: CoursesResponse = await response.json();

    if (!result.success || !Array.isArray(result.data)) return null;

    return result.data;
  } catch {
    return null;
  }
}

function formatPrice(price: string | number, currency: string) {
  const amount = Number(price);

  if (!Number.isFinite(amount)) return "Price to be confirmed";

  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency || "GBP",
  }).format(amount);
}

const benefits = [
  {
    icon: BookOpen,
    title: "Clear course information",
    description: "Understand what each course offers before you choose.",
  },
  {
    icon: FileCheck2,
    title: "Structured assessments",
    description: "Work through assignments and receive feedback.",
  },
  {
    icon: Headphones,
    title: "Guidance along the way",
    description: "Know where to go when you need help.",
  },
];

const learningSteps = [
  {
    number: "01",
    title: "Find your course",
    description:
      "Explore English and Mathematics options and compare available levels.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Enrol and get started",
    description:
      "Follow the enrolment process and access your learning materials once confirmed.",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Learn and submit",
    description:
      "Complete your assignments, submit your work and review feedback.",
    icon: FileCheck2,
  },
];

export default async function Home() {
  const courses = await getCourses();

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[var(--border)]">
          <div className="pointer-events-none absolute -right-36 -top-32 size-[440px] rounded-full border border-[var(--surface-strong)] sm:size-[560px]" />
          <div className="pointer-events-none absolute -right-16 -top-12 size-[300px] rounded-full border border-[var(--surface-strong)] sm:size-[400px]" />

          <div className="site-container relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-24">
            <div className="relative z-10">
              <div className="eyebrow flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--brand-brown)]" />
                Your next step starts here
              </div>

              <h1 className="display-heading mt-6 max-w-2xl text-5xl sm:text-6xl lg:text-[68px]">
                Build skills.
                <span className="mt-1 block text-[var(--brand-brown)]">
                  Open doors.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                Explore Functional Skills English and Mathematics courses
                designed to help you develop practical skills for education,
                work and everyday life.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/courses" className="button-primary">
                  Explore courses
                  <ArrowRight size={17} />
                </Link>

                <Link href="/how-it-works" className="button-secondary">
                  How it works
                  <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="mt-8 flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-[var(--brand-brown)]"
                />
                <p>
                  Clear information, a structured learning journey and
                  straightforward next steps.
                </p>
              </div>
            </div>

            {/* Learning journey visual */}
            <div className="relative">
              <div className="absolute -right-3 -top-4 size-24 rounded-full bg-[var(--surface-strong)]/70 blur-2xl sm:-right-6" />

              <div className="relative overflow-hidden rounded-[26px] border border-[var(--border)] bg-white p-6 shadow-[0_25px_80px_rgba(23,34,41,0.08)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="eyebrow">The learning journey</span>
                    <h2 className="display-heading mt-3 text-3xl sm:text-4xl">
                      Progress, one step at a time.
                    </h2>
                  </div>

                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--brand-brown)]">
                    <GraduationCap size={25} strokeWidth={1.6} />
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {learningSteps.map((step) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.number}
                        className="flex gap-4 rounded-2xl border border-[var(--border)] p-4 transition-colors hover:bg-[var(--paper)] sm:p-5"
                      >
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-brown)]">
                          <Icon size={21} strokeWidth={1.7} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-bold tracking-[0.15em] text-[var(--brand-brown)]">
                            STEP {step.number}
                          </p>
                          <h3 className="mt-1 text-sm font-semibold sm:text-base">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/how-it-works"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-brown)] hover:underline"
                >
                  Understand the process
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="pointer-events-none absolute -bottom-4 -left-3 -z-10 size-28 rounded-full bg-[var(--surface-strong)]/70 blur-2xl" />
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section aria-label="Learning benefits" className="border-b border-[var(--border)] bg-white">
          <div className="site-container grid divide-y divide-[var(--border)] py-3 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 px-2 py-5 sm:px-5 lg:px-8"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-brown)]">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold">
                      {benefit.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="scroll-mt-24 py-16 sm:py-24">
          <div className="site-container">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Explore our courses</p>
                <h2 className="display-heading mt-4 text-4xl sm:text-5xl">
                  Find the right course for you.
                </h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  Explore our published courses and choose the learning option
                  that best fits your goals.
                </p>
              </div>

              <Link
                href="/courses"
                className="inline-flex items-center gap-2 self-start text-sm font-semibold text-[var(--brand-brown)] hover:underline sm:self-auto"
              >
                View all courses
                <ArrowRight size={17} />
              </Link>
            </div>

            {courses === null ? (
              <div className="mt-10 rounded-2xl border border-[var(--border)] bg-white p-7 sm:p-10">
                <h3 className="text-lg font-semibold">
                  Courses are temporarily unavailable
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--muted)]">
                  Please try again shortly. We could not retrieve the course
                  list at this time.
                </p>
                <Link href="/courses" className="button-secondary mt-5">
                  Try the courses page
                  <ArrowRight size={16} />
                </Link>
              </div>
            ) : courses.length === 0 ? (
              <div className="mt-10 rounded-2xl border border-dashed border-[var(--border)] bg-white px-6 py-14 text-center">
                <BookOpen
                  size={32}
                  className="mx-auto text-[var(--brand-brown)]"
                />
                <h3 className="mt-4 text-xl font-semibold">
                  New learning opportunities are on the way
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-[var(--muted)]">
                  Published courses will appear here when they become
                  available. Please check back soon.
                </p>
              </div>
            ) : (
              <>
                <p className="mt-8 text-xs text-[var(--muted)]">
                  {courses.length} published{" "}
                  {courses.length === 1 ? "course" : "courses"}
                </p>

                <div className="mt-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {courses.map((course) => (
                    <article
                      key={course.id}
                      className="course-card flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white"
                    >
                      <div className="relative flex min-h-44 flex-col justify-between overflow-hidden bg-[var(--ink)] p-6">
                        <div className="pointer-events-none absolute -right-10 -top-16 size-52 rounded-full border border-white/10" />
                        <div className="pointer-events-none absolute -right-2 -top-8 size-36 rounded-full border border-white/10" />

                        <div className="relative flex items-center justify-between gap-3">
                          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                            {course.subject || "Functional Skills"}
                          </span>
                          <BookOpen
                            size={22}
                            strokeWidth={1.5}
                            className="text-[var(--accent-light)]"
                          />
                        </div>

                        <div className="relative mt-6">
                          <p className="text-xs leading-5 text-white/65">
                            {course.qualification ||
                              "Functional Skills qualification"}
                          </p>
                          <h3 className="mt-2 max-w-sm text-xl font-semibold leading-snug text-white">
                            {course.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        <div className="flex flex-wrap gap-2">
                          {course.level !== null && (
                            <span className="rounded-md bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--ink)]">
                              Level {course.level}
                            </span>
                          )}
                          <span className="rounded-md bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--ink)]">
                            {course.subject || "Skills development"}
                          </span>
                        </div>

                        <p className="mt-4 flex-1 text-sm leading-7 text-[var(--muted)]">
                          {course.short_description ||
                            course.description ||
                            "Explore this course to learn more about its content and requirements."}
                        </p>

                        <div className="mt-6 flex items-end justify-between gap-3 border-t border-[var(--border)] pt-5">
                          <div>
                            <p className="text-xs text-[var(--muted)]">
                              Course price
                            </p>
                            <p className="mt-1 text-lg font-bold">
                              {formatPrice(course.price, course.currency)}
                            </p>
                          </div>

                          <Link
                            href={`/courses/${course.slug}`}
                            aria-label={`View ${course.title}`}
                            className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[var(--ink)] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[var(--brand-brown)] sm:px-4 sm:text-sm"
                          >
                            View course
                            <ArrowRight size={15} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* How it works */}
        <section
          id="how-it-works"
          className="scroll-mt-24 border-y border-[var(--border)] bg-[var(--surface)] py-16 sm:py-24"
        >
          <div className="site-container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">A clear process</p>
              <h2 className="display-heading mt-4 text-4xl sm:text-5xl">
                Know what comes next.
              </h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                A straightforward overview of how to explore, enrol and work
                towards completing your course.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {learningSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--paper)] p-6 sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold tracking-[0.18em] text-[var(--brand-brown)]">
                        STEP {step.number}
                      </span>
                      <Icon
                        size={23}
                        strokeWidth={1.6}
                        className="text-[var(--brand-brown)]"
                      />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <Link href="/how-it-works" className="button-secondary">
                See how it works
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 py-16 sm:py-24">
          <div className="site-container grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="eyebrow">A more straightforward journey</p>
              <h2 className="display-heading mt-4 text-4xl sm:text-5xl">
                Learning should feel clear, not complicated.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[var(--muted)]">
                Choosing a course is an important decision. That is why we
                aim to make course information, learning steps and assessment
                expectations easier to understand.
              </p>
              <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                Take time to review each course&apos;s qualification,
                requirements and fees before deciding whether to enrol.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-brown)] hover:underline"
              >
                Learn about AUS (UK) Education
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16 sm:pb-24">
          <div className="site-container">
            <div className="relative overflow-hidden rounded-[26px] bg-[var(--ink)] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14">
              <div className="pointer-events-none absolute -right-20 -top-28 size-72 rounded-full border border-white/10 sm:size-96" />
              <div className="pointer-events-none absolute -right-4 -top-12 size-56 rounded-full border border-white/10" />

              <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl">
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-light)]">
                    <Sparkles size={15} />
                    Take your next step
                  </p>
                  <h2 className="display-heading mt-4 text-3xl sm:text-4xl lg:text-5xl">
                    Your next opportunity starts with a first step.
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                    Explore the available courses and find out which learning
                    option could suit your goals.
                  </p>
                </div>

                <Link
                  href="/courses"
                  className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--accent-light)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:bg-white"
                >
                  Explore courses
                  <ArrowDownRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
