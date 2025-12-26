import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-8xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
      <p className="text-foreground-muted mb-8 max-w-md">
        Oops! The page you&apos;re looking for seems to have wandered off into
        the digital void.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-background text-foreground hover:bg-background-light transition-colors duration-200"
      >
        Return Home
      </Link>
    </div>
  );
}
