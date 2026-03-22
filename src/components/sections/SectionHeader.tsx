import Link from "next/link";

interface SectionHeaderProps {
  label: string;
  viewAllHref?: string;
}

export function SectionHeader({ label, viewAllHref }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <span className="section-label">{label}</span>
      {viewAllHref && (
        <Link href={viewAllHref} className="view-all">
          View All &rarr;
        </Link>
      )}
    </div>
  );
}
