export function Logo({ className = '', onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <span
        className={`text-xl font-bold tracking-tight ${onDark ? 'text-white' : 'text-forest-950'}`}
      >
        Spatio Agri
      </span>
    </div>
  );
}
