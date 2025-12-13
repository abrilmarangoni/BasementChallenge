export function Hero() {
  return (
    <section
      className="relative pt-32 pb-8 px-8"
      aria-labelledby="hero-title"
    >
      <div className="max-w-[1376px] mx-auto relative">
        {/* EST Badge - Left */}
        <div className="absolute left-0 top-[45%] -translate-y-1/2 hidden lg:block">
          <svg
            className="w-[160px] h-[126px]"
            viewBox="0 0 160 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="80" cy="63" rx="78" ry="61" stroke="white" strokeWidth="2" fill="none" />
            <text
              x="80"
              y="70"
              textAnchor="middle"
              fill="white"
              className="font-basement text-2xl uppercase"
              style={{ fontSize: '24px' }}
            >
              EST
            </text>
          </svg>
        </div>

        {/* 2K19 Badge - Right */}
        <div className="absolute right-0 top-[30%] -translate-y-1/2 hidden lg:block">
          <svg
            className="w-[144px] h-[108px]"
            viewBox="0 0 144 108"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="72" cy="54" rx="70" ry="52" stroke="white" strokeWidth="2" fill="none" />
            <text
              x="72"
              y="62"
              textAnchor="middle"
              fill="white"
              className="font-basement text-xl uppercase"
              style={{ fontSize: '20px' }}
            >
              2K19
            </text>
          </svg>
        </div>

        {/* Cross decoration - Left */}
        <div className="absolute left-[5%] bottom-[15%] hidden lg:block">
          <svg
            className="w-20 h-20 rotate-12"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 0L44 36L80 40L44 44L40 80L36 44L0 40L36 36L40 0Z"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Cross decoration - Right */}
        <div className="absolute right-[5%] bottom-[5%] hidden lg:block">
          <svg
            className="w-24 h-24 -rotate-12"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 0L44 36L80 40L44 44L40 80L36 44L0 40L36 36L40 0Z"
              stroke="white"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Main Typography */}
        <h1 id="hero-title" className="sr-only">
          Basement Supply - Wear Everyday
        </h1>
        <div
          className="text-center"
          aria-hidden="true"
        >
          <div className="font-basement text-[clamp(4rem,15vw,12rem)] leading-[0.85] uppercase tracking-tight">
            Basement
          </div>
          <div
            className="font-basement text-[clamp(4rem,15vw,12rem)] leading-[0.85] uppercase tracking-tight"
            style={{
              WebkitTextStroke: '2px white',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Supply
          </div>
        </div>
      </div>
    </section>
  )
}

