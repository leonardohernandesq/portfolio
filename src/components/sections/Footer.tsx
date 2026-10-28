import { RollLink } from '@/components/ui/RollLink';

export function Footer() {
  return (
    <footer className="relative flex items-center justify-between border-t border-paper/10 pt-8 font-display text-xs uppercase tracking-[0.3em] text-muted">
      <span>© {new Date().getFullYear()} Leonardo Hernandes</span>
      <RollLink href="#home">Voltar ao topo ↑</RollLink>
    </footer>
  );
}
