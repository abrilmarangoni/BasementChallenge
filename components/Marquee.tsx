export function Marquee() {
  const text = "A man can't have enough basement. swag"
  const separator = " — "
  const content = `${text}${separator}`.repeat(10)

  return (
    <div
      className="relative overflow-hidden py-4 border-y border-white/20"
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-basement text-2xl md:text-4xl uppercase tracking-wide">
          {content}
        </span>
        <span className="font-basement text-2xl md:text-4xl uppercase tracking-wide">
          {content}
        </span>
      </div>
    </div>
  )
}

