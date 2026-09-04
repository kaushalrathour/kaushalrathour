import kashIcon            from '@/assets/kash-favicon.png'
import seventhTriangle     from '@/assets/seventh_triangle.svg'
import addictingElements   from '@/assets/addictingelements_logo.jpeg'
import techInstance        from '@/assets/tech_instance.jpeg'
import shopifyLogo         from '@/assets/Shopify.webp'
import appmakerLogo        from '@/assets/Appmaker.xyz.webp'
import revenuecatLogo      from '@/assets/revenuecat.png'
import sentryLogo          from '@/assets/sentry.png'
import juspayLogo          from '@/assets/juspay.svg'
import razorpayLogo        from '@/assets/razorpay.svg'
import firebaseLogo        from '@/assets/firebase.png'
import crashlyticsLogo     from '@/assets/crashlytics.png'
import fastlaneLogo        from '@/assets/fastlane.svg'
import codepushLogo        from '@/assets/codepush.png'
import geminiLogo          from '@/assets/gemini.svg'
import vertexLogo          from '@/assets/Vertex_AI_Logo.webp'
import owndLogo            from '@/assets/ownd-aditya-birla-fashion-app.svg'
import jockeyLogo          from '@/assets/jockey-india-mobile-commerce-app.webp'
import khelcoachLogo       from '@/assets/khelcoach-sports-app-icon.webp'
import picklebayLogo       from '@/assets/picklebay.svg'
import houseAiLogo         from '@/assets/house-ai-interior-design-app-react-native.webp'

export interface Integration {
  name: string
  logo: string
}

export interface Project {
  name: string
  projectLogo?: string
  website?: string
  bullets: string[]
  integrations?: Integration[]
}

export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  type: 'Indie' | 'Full-time' | 'Freelance' | 'Internship'
  website?: string
  linkedin?: string
  projects: Project[]
}

export const EXPERIENCE_LOGOS: Record<string, string> = {
  indie:                kashIcon,
  'seventh-triangle':   seventhTriangle,
  'addicting-elements': addictingElements,
  'tech-instance':      techInstance,
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'seventh-triangle',
    role: 'React Native Engineer',
    company: 'Seventh Triangle Pvt. Ltd.',
    location: 'Noida, India',
    period: 'Mar 2025 – Present',
    type: 'Full-time',
    website: 'https://seventhtriangle.com/',
    linkedin: 'https://www.linkedin.com/company/seventh-triangle-consulting/',
    projects: [
      {
        name: 'Jockey - Mobile Commerce',
        projectLogo: jockeyLogo,
        website: 'https://jockey.in/',
        bullets: [
          'Built digital wallet end-to-end (balance, transactions, redemption).',
          'Shipped Disney and Marvel campaign flows in a Shopify + Appmaker.xyz ecosystem.',
          'Proposed in-app review triggered post-order. Rating: 3.8 to 4.8. The following month: sales +~11%, orders +~5%.',
        ],
        integrations: [
          { name: 'Shopify',      logo: shopifyLogo },
          { name: 'Appmaker.xyz', logo: appmakerLogo },
        ],
      },
      {
        name: 'OWND! – Gen Z Fashion Commerce (Aditya Birla Group)',
        projectLogo: owndLogo,
        website: 'https://ownd.in/',
        bullets: [
          'Building core commerce journeys and launch-critical integrations for a large consumer platform.',
          'Integrated Juspay for payments.',
        ],
        integrations: [
          { name: 'Juspay',   logo: juspayLogo },
          { name: 'Shopify',  logo: shopifyLogo },
          { name: 'Firebase', logo: firebaseLogo },
        ],
      },
      {
        name: 'KhelCoach – Sports Ecosystem',
        projectLogo: khelcoachLogo,
        website: 'https://www.khelcoach.com/',
        bullets: [
          'Delivered 3 role-based apps (athlete/coach/academy) with shared design system.',
          'Automated release pipelines with Fastlane, OTA updates via CodePush.',
          'Integrated payments and booking flows.',
        ],
        integrations: [
          { name: 'Fastlane',  logo: fastlaneLogo },
          { name: 'CodePush',  logo: codepushLogo },
          { name: 'Razorpay',  logo: razorpayLogo },
          { name: 'Firebase',  logo: firebaseLogo },
        ],
      },
      {
        name: 'Picklebay - Pickleball Sports Platform',
        projectLogo: picklebayLogo,
        website: 'https://picklebay.com/',
        bullets: [
          'Owned end-to-end delivery for a WebToNative pickleball app covering courts, play, and community flows.',
          'Instrumented Firebase Analytics and Crashlytics for stability and funnel monitoring.',
        ],
        integrations: [
          { name: 'Firebase',    logo: firebaseLogo },
          { name: 'Crashlytics', logo: crashlyticsLogo },
        ],
      },
    ],
  },
  {
    id: 'indie',
    role: 'Indie Engineer',
    company: 'Kash',
    location: 'Independent',
    period: 'Apr 2026 – Present',
    type: 'Indie',
    website: 'https://kash.appmatters.in',
    projects: [
      {
        name: 'Kash - Money Companion',
        projectLogo: kashIcon,
        bullets: [
          'Built and shipped on App Store and Google Play, solo from design to production.',
          'Quick Log: plain-language multi-entry capture (e.g. "coffee 80 yesterday, movie 299 2 days ago") with confidence-aware fallback.',
          'Local-first SQLite model with optional cloud backup. Multi-account, multi-currency, offline analytics. Owned full product surface including ASO.',
        ],
        integrations: [
          { name: 'RevenueCat', logo: revenuecatLogo },
          { name: 'Sentry',     logo: sentryLogo },
          { name: 'Firebase',   logo: firebaseLogo },
        ],
      },
    ],
  },
  {
    id: 'addicting-elements',
    role: 'React Native Engineer',
    company: 'Addicting Elements',
    location: 'Miami, FL (Remote)',
    period: 'Apr 2026',
    type: 'Freelance',
    linkedin: 'https://www.linkedin.com/company/addictingelements/',
    projects: [
      {
        name: 'House AI – Interior and Exterior Design',
        projectLogo: houseAiLogo,
        website: 'https://www.houseaiapp.com/',
        bullets: [
          'Shipped AI image transformation flows using Gemini Flash and Vertex AI.',
          'Built upload to preview to generate to save journeys with subscription gating.',
          'Supported a consumer product with 20K+ downloads and a 4.5 rating.',
        ],
        integrations: [
          { name: 'Gemini Flash', logo: geminiLogo },
          { name: 'Vertex AI',    logo: vertexLogo },
          { name: 'RevenueCat',   logo: revenuecatLogo },
          { name: 'Sentry',       logo: sentryLogo },
        ],
      },
    ],
  },
  {
    id: 'tech-instance',
    role: 'React Native Engineer',
    company: 'Tech Instance',
    location: 'Remote',
    period: 'Aug 2024 – Nov 2024',
    type: 'Internship',
    linkedin: 'https://www.linkedin.com/company/tech-instance',
    projects: [
      {
        name: 'Hunger – Food Delivery Platform',
        bullets: [
          'Built the app from scratch, delivering core flows and reusable API hooks.',
          'Integrated Firebase Authentication.',
        ],
        integrations: [
          { name: 'Firebase', logo: firebaseLogo },
        ],
      },
    ],
  },
]
