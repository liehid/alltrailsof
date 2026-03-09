export const metadata = {
  title: 'All Trails Of',
  description: '콘텐츠로 시작하는 한국 여행. Discover K-Drama & K-Pop filming locations.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0D0D0D' }}>{children}</body>
    </html>
  )
}
