import Link from "next/link";

interface SectionHeaderProps {
  label: string;
  viewAllHref?: string;
}

export function SectionHeader({ label, viewAllHref }: SectionHeaderProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <span className="section-label">{label}</span>
        {viewAllHref && (
          <Link href={viewAllHref} className="view-all">
            View All &rarr;
          </Link>
        )}
      </div>
      <div className="dotted-line mt-3" />
    </div>
  );
}
