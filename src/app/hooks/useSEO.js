// src/app/hooks/useSEO.js
// 'use client' 환경에서 동적으로 <title>, <meta> 를 교체하는 훅
// ArticlePage / TrailDetailPage 에서 호출하세요.

import { useEffect } from 'react'

export function useSEO({ title, description, image, url }) {
  useEffect(() => {
    const BASE = 'All Trails Of'
    const fullTitle = title ? `${title} | ${BASE}` : BASE
    const desc =
      description ||
      'Discover K-Drama filming locations, K-Pop spots, and hidden gems across Korea.'
    const img = image || '/og-image.jpg'
    const canonical = url || 'https://alltrailsof.com'

    // <title>
    document.title = fullTitle

    setMeta('name', 'description', desc)

    // Open Graph
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:image', img)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:type', 'article')

    // Twitter
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', desc)
    setMeta('name', 'twitter:image', img)

    // canonical
    let link = document.querySelector("link[rel='canonical']")
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)

    // cleanup: 페이지 이탈 시 기본값 복원
    return () => {
      document.title = BASE
    }
  }, [title, description, image, url])
}

function setMeta(attrKey, attrValue, content) {
  let el = document.querySelector(`meta[${attrKey}='${attrValue}']`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attrKey, attrValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
