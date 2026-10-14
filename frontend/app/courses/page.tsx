import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  GraduationCap,
  Search,
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
  data?: Course[];
};

async function getCourses(): Promise<Course[]> {
  const apiUrl =
    process.env.BACKEND_API_URL ||
    process.env.API_URL ||
    "http://localhost:4000";

  try {
    const response = await fetch(`${apiUrl}/api/courses`, {
      cache: "no-store",
    });

    if (!response.ok) return [];

    const result: CourseResponse = await response.json();
    return result.success && Array.isArray(result.data) ? result.data : [];
  } catch {
    return [];
  }
}

function formatPrice(price: string, currency: string) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: currency || "GBP",
  }).format(Number(price));
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <><Header /><main className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
          <section className="border-b border-[var(--border)] bg-[var(--surface)]">
              <div className="site-container py-12 sm:py-16 lg:py-20">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-brown)]">
                      Explore your options
                  </p>

                  <div className="mt-4 grid gap-6 md:grid-cols-[minmax(0,1fr)_280px] md:items-end">
                      <div>
                          <h1 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                              Courses designed to build your skills
                          </h1>
                          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
                              Explore our Functional Skills courses and find a learning
                              option that suits your goals.
                          </p>
                      </div>

                      <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--paper)] p-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--brand-brown)]">
                              <GraduationCap size={22} />
                          </div>
                          <div>
                              <p className="text-2xl font-semibold">{courses.length}</p>
                              <p className="text-sm text-[var(--muted)]">
                                  Available courses
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="site-container py-10 sm:py-14 lg:py-16">
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                  <div>
                      <h2 className="text-xl font-semibold sm:text-2xl">
                          Browse all courses
                      </h2>
                      <p className="mt-2 text-sm text-[var(--muted)]">
                          Choose a course to explore its details and price.
                      </p>
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--muted)]">
                      <Search size={16} />
                      <span>Course catalogue</span>
                  </div>
              </div>

              {courses.length > 0 ? (
                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                      {courses.map((course) => (
                          <article
                              key={course.id}
                              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                          >
                              <div className="flex min-h-32 items-start justify-between gap-4 bg-[var(--surface)] p-5">
                                  <div className="flex size-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--paper)] text-[var(--brand-brown)]">
                                      {course.subject.toLowerCase().includes("math") ? (
                                          <Calculator size={23} strokeWidth={1.7} />
                                      ) : (
                                          <BookOpen size={23} strokeWidth={1.7} />
                                      )}
                                  </div>

                                  <span className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-3 py-1.5 text-xs font-semibold text-[var(--brand-brown)]">
                                      Level {course.level}
                                  </span>
                              </div>

                              <div className="flex flex-1 flex-col p-5 sm:p-6">
                                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                                      {course.qualification}
                                  </p>

                                  <h3 className="mt-3 text-lg font-semibold leading-7 tracking-tight">
                                      {course.title}
                                  </h3>

                                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-[var(--muted)]">
                                      {course.short_description}
                                  </p>

                                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-5">
                                      <div>
                                          <p className="text-xs text-[var(--muted)]">Course price</p>
                                          <p className="mt-1 text-lg font-semibold">
                                              {formatPrice(course.price, course.currency)}
                                          </p>
                                      </div>

                                      <Link
                                          href={`/courses/${encodeURIComponent(course.slug)}`}
                                          className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-brown)] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-brown-dark)]"
                                      >
                                          View
                                          <ArrowRight
                                              size={16}
                                              className="transition-transform group-hover:translate-x-0.5" />
                                      </Link>
                                  </div>
                              </div>
                          </article>
                      ))}
                  </div>
              ) : (
                  <div className="rounded-2xl border border-[var(--border)] bg-white px-6 py-14 text-center">
                      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--brand-brown)]">
                          <BookOpen size={26} />
                      </div>
                      <h2 className="mt-5 text-xl font-semibold">
                          Courses are temporarily unavailable
                      </h2>
                      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
                          Please try again shortly or contact our team for help finding a
                          suitable course.
                      </p>
                      <Link href="/contact" className="button-primary mt-6 inline-flex">
                          Contact our team
                      </Link>
                  </div>
              )}
          </section>

          <section className="site-container pb-14 sm:pb-20">
              <div className="flex flex-col justify-between gap-5 rounded-2xl bg-[var(--ink)] p-6 text-white sm:flex-row sm:items-center sm:p-9">
                  <div>
                      <h2 className="text-xl font-semibold sm:text-2xl">
                          Need help choosing a course?
                      </h2>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                          Contact our team if you have questions about our course options.
                      </p>
                  </div>
                  <Link
                      href="/contact"
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--surface)]"
                  >
                      Contact us
                      <ArrowRight size={16} />
                  </Link>
              </div>
          </section>
      </main><Footer /></>
  );
}
