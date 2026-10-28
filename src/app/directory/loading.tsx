import { Container } from "@/components/ui/container";

/** Skeleton shown while directory results stream during navigation. */
export default function DirectoryLoading() {
  return (
    <div aria-hidden className="bg-canvas">
      <div className="border-b border-navy-100 bg-white">
        <Container className="py-12 lg:py-18">
          <div className="h-4 w-40 animate-pulse rounded bg-navy-100" />
          <div className="mt-6 h-10 w-96 max-w-full animate-pulse rounded-lg bg-navy-100" />
          <div className="mt-4 h-5 w-[30rem] max-w-full animate-pulse rounded bg-navy-100" />
        </Container>
      </div>
      <Container className="py-12">
        <div className="h-16 animate-pulse rounded-2xl bg-ochre-100" />
        <div className="mt-6 h-44 animate-pulse rounded-2xl bg-white shadow-card" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="h-64 animate-pulse rounded-2xl bg-white shadow-card" />
          ))}
        </div>
        <span className="sr-only">Loading directory…</span>
      </Container>
    </div>
  );
}
