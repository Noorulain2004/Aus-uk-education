import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-800">
        Error 404
      </p>

      <h1 className="mt-4 text-4xl font-bold text-slate-900">
        Page not found
      </h1>

      <p className="mt-4 max-w-md text-slate-600">
        Sorry, we could not find the page you are looking for.
      </p>

      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link href="/" className="button-primary">
          Back to home
        </Link>

        <Link href="/courses" className="button-secondary">
          Explore courses
        </Link>
      </div>
    </main>
  );
}
