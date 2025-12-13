export function Footer() {
  return (
    <footer
      className="px-8 py-16 md:py-24"
      aria-labelledby="footer-title"
    >
      <div className="max-w-[1376px] mx-auto">
        <h2 id="footer-title" className="sr-only">
          Basement - Wear Everyday
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Decorative Ellipses */}
          <div className="flex-shrink-0" aria-hidden="true">
            <svg
              className="w-32 h-48 md:w-40 md:h-56"
              viewBox="0 0 160 224"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="80"
                cy="40"
                rx="78"
                ry="38"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <ellipse
                cx="80"
                cy="112"
                rx="78"
                ry="38"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <ellipse
                cx="80"
                cy="184"
                rx="78"
                ry="38"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* Typography */}
          <div className="flex-1 text-center md:text-left" aria-hidden="true">
            <div className="font-basement text-[clamp(3rem,12vw,10rem)] leading-[0.9] uppercase tracking-tight">
              Wear
            </div>
            <div
              className="font-basement text-[clamp(3rem,12vw,10rem)] leading-[0.9] uppercase tracking-tight"
              style={{
                WebkitTextStroke: '2px white',
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

