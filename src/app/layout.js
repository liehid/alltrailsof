export const metadata = {
  metadataBase: new URL('https://alltrailsof.com'),

  title: {
    default: 'All Trails Of',
    template: '%s | All Trails Of',
  },

  description:
    'Discover K-Drama filming locations, K-Pop spots, and hidden gems across Korea. Your guide to travel like your favorite character.',

  keywords: [
    'K-Drama locations',
    'K-Pop filming spots',
    'Korea travel guide',
    'Seoul hidden gems',
    'Korean drama travel',
    'alltrailsof',
  ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alltrailsof.com',
    siteName: 'All Trails Of',
    title: 'All Trails Of',
    description:
      'Discover K-Drama filming locations, K-Pop spots, and hidden gems across Korea.',
    images: [
      {
        url: '/og-image.jpg',   // ← public/og-image.jpg 에 1200×630 이미지 추가 필요
        width: 1200,
        height: 630,
        alt: 'All Trails Of – K-Drama & K-Pop Travel',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'All Trails Of',
    description:
      'Discover K-Drama filming locations, K-Pop spots, and hidden gems across Korea.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0D0D0D' }}>
        {children}
      </body>
    </html>
  )
}
