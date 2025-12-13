export function Marquee() {
  const text = "A man can't have enough basement swag"
  const separator = " — "
  const content = `${text}${separator}`.repeat(10)

  return (
    <div
      className="relative overflow-hidden py-2 md:py-4"
      style={{
        borderTop: '1.5px solid #FFF',
        borderBottom: '1.5px solid #FFF',
      }}
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="font-basement text-xl md:text-4xl tracking-wide">
          {content}
        </span>
        <span className="font-basement text-xl md:text-4xl tracking-wide">
          {content}
        </span>
      </div>
    </div>
  )
}
