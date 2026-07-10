export default function SectionLabel({ index, title }) {
  return (
    <div className="flex items-center gap-4 mb-10 md:mb-16">
      <span className="font-display text-sm text-accent">{index}</span>
      <span className="h-px w-10 bg-line" />
      <span className="font-body text-xs uppercase tracking-widest2 text-muted">{title}</span>
    </div>
  )
}
