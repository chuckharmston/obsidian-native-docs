import type { MarkdownInstance } from 'astro'

export interface Frontmatter {
  draft?: boolean
  title: string
  description?: string
  publishDate: string
  coverSVG?: string
  coverImage?: string
  socialImage?: string
  file?: string
  url?: string
  minutesRead?: string
  extra?: string[]
  section?: string[]
}

export const SiteMetadata = {
  title: 'Hello Astro',
  description: 'An Astro starter for corporate/marketing/blog websites.',
  author: {
    name: 'Chris Tham',
    twitter: '@chris1tham',
    url: 'https://christham.net',
    email: 'chris@christham.net',
    summary: 'Outrageous actualiser.',
  },
  org: {
    name: 'Hello Tham',
    twitter: '@hellothamcom',
    url: 'https://hellotham.com',
    email: 'info@hellotham.com',
    summary:
      'Hello Tham is a boutique management consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
  },
  location: 'Rivendell, Middle Earth',
  latlng: [-33.86785, 151.20732] as [number, number],
  repository: 'https://github.com/hellotham/hello-astro',
  social: [
    {
      name: 'Email',
      link: 'mailto:info@hellothamcom',
      icon: 'envelope',
    },
    {
      name: 'Github',
      link: 'https://github.com/hellothamcom',
      icon: 'github',
    },
  ],
  buildTime: new Date().toString(),
}

export const LogoBlack = '../svg/logo/black.svg'
export const LogoWhite = '../svg/logo/white.svg'
export const LogoBW = '../svg/logo/bw.svg'
export const LogoBWLight = '../svg/logo/bw-light.svg'
export const LogoColor = '../svg/logo/color.svg'
export const LogoColorLight = '../svg/logo/color-light.svg'

export const FeaturedSVG = '../svg/undraw/undraw_design_inspiration.svg'
export const DefaultSVG = '../svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '../images/undraw/undraw_my_feed.png'
export const Logo = LogoColor
export const LogoImage = '../images/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Documentation', href: 'docs/introduction' },
  { name: 'Changelog', href: 'changelog' },
]

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/hellotham/hello-astro`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Getting Started': [
    { text: 'Introduction', link: 'docs/introduction' },
    { text: 'Installation', link: 'docs/install' },
  ],
  'Another Section': [
    { text: 'Page 3', link: 'docs/page-3' },
    { text: 'Page 4', link: 'docs/page-4' },
  ],
}
