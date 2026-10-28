import type { AnchorHTMLAttributes, ReactNode } from 'react';

type RollLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };

export function RollLink({ children, className = '', ...props }: RollLinkProps) {
  return (
    <a {...props} className={`group relative inline-flex overflow-hidden ${className}`}>
      <span className="block transition-transform duration-500 ease-expo group-hover:-translate-y-full">{children}</span>
      <span
        aria-hidden
        className="absolute inset-0 block translate-y-full text-accent transition-transform duration-500 ease-expo group-hover:translate-y-0"
      >
        {children}
      </span>
    </a>
  );
}
