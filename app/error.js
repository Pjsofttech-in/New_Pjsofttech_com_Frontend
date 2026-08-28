"use client";

export default function Error({ reset }) {
  return (
    <main className="migration-shell">
      <h1>Something went wrong</h1>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}