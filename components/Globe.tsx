'use client'

interface GlobeProps {
  size?: number
  className?: string
}

export function Globe({ size = 180, className = '' }: GlobeProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Outer rotating ring */}
      <div 
        className="absolute inset-0 rounded-full border border-white/60"
        style={{ animation: 'spin 20s linear infinite' }}
      />
      
      {/* Sphere wireframe using SVG */}
      <svg 
        viewBox="0 0 100 100" 
        className="absolute inset-0 w-full h-full"
        style={{ animation: 'spin 15s linear infinite reverse' }}
      >
        {/* Horizontal lines (latitude) */}
        <ellipse cx="50" cy="50" rx="48" ry="48" fill="none" stroke="white" strokeWidth="0.5" opacity="0.6" />
        <ellipse cx="50" cy="50" rx="48" ry="38" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="48" ry="24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <ellipse cx="50" cy="50" rx="48" ry="10" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
        
        {/* Vertical lines (longitude) */}
        <ellipse cx="50" cy="50" rx="48" ry="48" fill="none" stroke="white" strokeWidth="0.5" opacity="0.6" transform="rotate(90 50 50)" />
        <ellipse cx="50" cy="50" rx="38" ry="48" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="24" ry="48" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <ellipse cx="50" cy="50" rx="10" ry="48" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
      </svg>
      
      {/* Second layer rotating opposite */}
      <svg 
        viewBox="0 0 100 100" 
        className="absolute inset-0 w-full h-full"
        style={{ animation: 'spin 25s linear infinite', transform: 'rotateX(60deg)' }}
      >
        <ellipse cx="50" cy="50" rx="48" ry="20" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4" />
        <ellipse cx="50" cy="50" rx="40" ry="16" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="50" cy="50" rx="30" ry="12" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
      </svg>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
