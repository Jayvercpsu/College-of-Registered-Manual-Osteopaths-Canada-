"use client";

import { useEffect } from "react";
import { CircleAlert } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button, LinkButton } from "@/components/ui/button";

/**
 * Error boundary for the directory. Kept generic (no sensitive detail leaks);
 * the Retry control re-renders the segment.
 */
export default function DirectoryError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Directory error:", error);
  }, [error]);

  return (
    <div className="bg-canvas py-20">
      <Container className="flex flex-col items-center text-center">
        <span
          aria-hidden
          className="flex h-14 w-14 items-center justify-center rounded-full bg-ochre-100 text-ochre-600"
        >
          <CircleAlert className="h-7 w-7" strokeWidth={1.8} />
        </span>
        <h1 className="mt-5 font-display text-3xl font-semibold text-navy-900">
          The directory could not be loaded
        </h1>
        <p className="mt-3 max-w-md leading-relaxed text-muted">
          Something went wrong while retrieving practitioner records. Please try
          again — if the problem continues, contact the college.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button onClick={reset}>Try again</Button>
          <LinkButton href="/contact" variant="outline">
            Contact CRMO
          </LinkButton>
        </div>
      </Container>
    </div>
  );
}
