'use client'

export function FloatingShapes() {
  return (
    <>
      {/* Shape 1 - Left side, centered on BOTTOM border line */}
      <div 
        className="absolute pointer-events-none z-20 hidden md:block"
        style={{
          width: 'clamp(60px, calc(100vw * 130 / 1440), 160px)',
          height: 'auto',
          bottom: '-80px',
          left: 'clamp(20px, calc(100vw * 30 / 1440), 50px)',
          animation: 'floatSubtle 6s ease-in-out infinite',
        }}
      >
        <svg 
          viewBox="0 0 162 170" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ animation: 'rotate1 20s linear infinite' }}
        >
          <path d="M33.1199 101.758L8.97541 125.388L20.5588 150.036L42.2166 152.156L74.0126 121.023L95.4154 166.631L117.094 168.75L135.479 150.736L116.308 109.875L142.365 112.439L160.75 94.4249L149.188 69.777L128.38 67.7424L152.525 44.1118L140.941 19.4639L119.262 17.3446L87.4876 48.4776L66.0849 2.86952L44.4058 0.750183L26.0211 18.7645L45.1922 59.6042L19.1348 57.061L0.750122 75.0753L12.3123 99.7232L33.1199 101.758Z" fill="black"/>
          <path d="M44.4058 0.750183L113.8 148.616" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M130.846 41.9926L20.5587 150.036" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M160.75 94.4247L30.6969 81.7086" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M135.479 150.736L106.552 89.1267" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M95.4153 166.631L66.5099 105.021" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M73.3112 62.3592L119.262 17.3445" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M106.552 89.1268L152.525 44.1121" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.1346 57.061L73.3111 62.3593" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.3121 99.7234L66.5098 105.022" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M87.4878 48.4777L66.0851 2.86963" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M95.4156 166.631L74.0128 121.023" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M45.1922 59.6252L26.0211 18.7644" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M135.479 150.736L116.308 109.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M87.4877 48.4775L119.262 17.3445" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42.2164 152.156L74.0124 121.023" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.97546 125.388L33.12 101.758" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M128.38 67.7427L152.525 44.1121" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30.6968 81.7089L19.1346 57.061" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M152.525 44.1118L140.941 19.4639" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M119.262 17.3445L130.845 41.9924" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0.750122 75.0752L12.3123 99.7231" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M149.188 69.7771L160.75 94.425" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.5589 150.036L8.97546 125.388" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.1346 57.061L45.192 59.6254" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M116.308 109.875L142.366 112.439" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M117.095 168.75L135.479 150.736" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M113.8 148.616L95.4154 166.631" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.1348 57.061L0.750122 75.0754" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.3121 99.723L30.6968 81.7086" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M160.75 94.4248L142.365 112.439" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26.0211 18.7645L44.4058 0.750183" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42.2165 152.155L20.5587 150.036" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M95.4154 166.631L117.094 168.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M44.4058 0.750183L66.0848 2.86952" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M135.479 150.735L113.8 148.616" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M140.941 19.4638L119.262 17.3445" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M130.846 41.9926L152.525 44.112" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12.3121 99.7234L33.1198 101.758" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M128.38 67.7423L149.188 69.7768" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Shape 2 - Right side, centered on TOP border line */}
      <div 
        className="absolute pointer-events-none z-20 hidden md:block"
        style={{
          width: 'clamp(55px, calc(100vw * 120 / 1440), 150px)',
          height: 'auto',
          top: '-72px',
          right: 'clamp(20px, calc(100vw * 30 / 1440), 50px)',
          animation: 'floatSubtle 7s ease-in-out infinite',
        }}
      >
        <svg 
          viewBox="0 0 146 146" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ animation: 'rotate2 25s linear infinite reverse' }}
        >
          <path d="M65.874 105.442L67.7911 110.126L87.158 126.852L97.8587 116.567L123.349 138.582L143.303 119.377L138.412 107.335L99.1499 73.4135L144.75 29.5382L139.86 17.4765L120.473 0.75L79.6264 40.0582L77.7289 35.3935L58.3424 18.6475L47.6417 28.9527L22.1516 6.91752L2.19783 26.1227L7.10803 38.165L46.3505 72.0863L0.750198 115.981L5.64084 128.023L25.0273 144.75L65.874 105.442Z" fill="black"/>
          <path d="M20.117 132.708L139.859 17.4767" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.19795 26.1226L118.458 126.54" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M57.775 54.579L87.158 126.852" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25.0275 144.75L74.9121 96.7367" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M50.6347 67.9682L0.750198 115.981" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M74.9119 96.7367L123.349 138.582" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M138.412 107.335L89.9749 65.4892" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M99.1497 73.4134L144.75 29.5381" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M46.3505 72.0865L0.750198 115.981" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25.0275 144.75L65.8742 105.442" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M120.473 0.75L79.6263 40.0582" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.10799 38.1649L46.3505 72.0862" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M138.412 107.335L99.1497 73.4132" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M47.6417 28.9526L22.1517 6.91736" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M97.8588 116.566L123.349 138.582" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M77.729 35.3935L89.9751 65.4894" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M38.3886 37.8528L50.6348 67.9683" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M123.349 138.582L143.303 119.377" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M58.3424 18.6476L38.3886 37.8528" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M138.412 107.335L118.458 126.54" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2.19795 26.1225L22.1518 6.91736" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M57.775 54.5791L77.7288 35.3935" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M87.1579 126.852L67.791 110.126" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M77.7287 35.3936L58.3422 18.6476" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M120.473 0.75L139.86 17.4765" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M38.3886 37.8528L57.7751 54.5793" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20.1171 132.708L0.750198 115.981" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.64082 128.024L25.0273 144.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M58.3425 18.6476L47.6418 28.9529" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M97.8587 116.566L87.1579 126.852" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M143.303 119.377L138.412 107.335" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25.0272 144.75L20.117 132.707" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0.750198 115.981L5.64084 128.024" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M139.86 17.4767L144.75 29.5385" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.10815 38.1648L2.19795 26.1226" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M118.458 126.54L123.349 138.582" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M77.729 35.3935L79.6265 40.0582" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M65.8741 105.442L67.7912 110.126" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <style jsx global>{`
        @keyframes floatSubtle {
          0% {
            transform: translateY(0px);
          }
          25% {
            transform: translateY(-3px);
          }
          50% {
            transform: translateY(-6px);
          }
          75% {
            transform: translateY(-3px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes rotate1 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotate2 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

