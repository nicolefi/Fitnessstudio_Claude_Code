export function ImagePlaceholder({
  label = "Foto Platzhalter",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-foreground/20 bg-foreground/5 ${className}`}
    >
      <span className="px-3 text-center font-mono text-[10px] uppercase tracking-wide text-foreground/40">
        {label}
      </span>
    </div>
  );
}
