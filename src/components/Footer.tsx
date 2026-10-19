export function Footer() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© {new Date().getFullYear()} So Fresh</p>
        <div className="flex gap-6">
          <a href="/impressum" className="transition-colors hover:text-accent">
            Impressum
          </a>
          <a href="/datenschutz" className="transition-colors hover:text-accent">
            Datenschutz
          </a>
        </div>
      </div>
    </footer>
  );
}
