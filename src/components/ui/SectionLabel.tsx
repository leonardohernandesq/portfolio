export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-4 font-display text-xs uppercase tracking-[0.3em] text-muted">
      <span className="text-accent">({index})</span>
      <span className="h-px w-12 bg-paper/20" />
      <span>{children}</span>
    </div>
  );
}
