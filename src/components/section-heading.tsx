export function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow: string; title: string; description?: string; centered?: boolean }) {
  return <div className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}><p className="eyebrow">{eyebrow}</p><h2 className="heading-lg mt-4">{title}</h2>{description && <p className="text-muted mt-4 text-base leading-7">{description}</p>}</div>;
}
