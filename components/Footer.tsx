export function Footer() {
  return (
    <footer
      className="px-4 md:px-8 py-8 md:py-24"
      aria-labelledby="footer-title"
    >
      <div className="max-w-[1376px] mx-auto">
        <h2 id="footer-title" className="sr-only">
          Basement - Wear Everyday
        </h2>
        
        <div className="flex flex-row items-center gap-4 md:gap-8">
          {/* Decorative Ellipses */}
          <div className="flex-shrink-0" aria-hidden="true">
            <svg
              className="w-[114px] h-[64px] md:w-40 md:h-56"
              viewBox="0 0 114 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="57"
                cy="12"
                rx="55"
                ry="10"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <ellipse
                cx="57"
                cy="32"
                rx="55"
                ry="10"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
              <ellipse
                cx="57"
                cy="52"
                rx="55"
                ry="10"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>

          {/* Typography */}
          <div className="flex-1 text-right" aria-hidden="true">
            <div className="font-basement text-[54px] md:text-[clamp(3rem,12vw,10rem)] leading-[1.06] uppercase tracking-tight">
              Wear
            </div>
            <div
              className="font-basement text-[54px] md:text-[clamp(3rem,12vw,10rem)] leading-[1.06] uppercase tracking-tight"
              style={{
                WebkitTextStroke: '1px white',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Everyday
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
