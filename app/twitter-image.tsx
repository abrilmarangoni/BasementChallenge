import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Basement Supply - Premium Streetwear'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
        }}
      >
        {/* Balloon image */}
        <img
          src="https://basement-challenge.vercel.app/balloon.png"
          alt=""
          style={{
            position: 'absolute',
            right: '-2%',
            top: 0,
            bottom: 0,
            width: '500px',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        
        {/* Text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '50px',
            paddingLeft: '50px',
          }}
        >
          <div
            style={{
              fontSize: '110px',
              fontWeight: 900,
              color: 'white',
              lineHeight: 0.99,
              textTransform: 'uppercase',
              textShadow: '0px 4px 10px rgba(0,0,0,0.25)',
              fontFamily: 'Arial Black, sans-serif',
            }}
          >
            BASEMENT
          </div>
          <div
            style={{
              fontSize: '110px',
              fontWeight: 900,
              color: 'transparent',
              lineHeight: 0.99,
              textTransform: 'uppercase',
              WebkitTextStroke: '2px white',
              fontFamily: 'Arial Black, sans-serif',
            }}
          >
            SUPPLY
          </div>
        </div>
        
        {/* Copyright */}
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50px',
            fontSize: '16px',
            color: 'white',
            letterSpacing: '0.5px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          ©basement.studio LLC. All rights reserved.
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

