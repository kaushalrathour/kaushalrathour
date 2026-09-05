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
import graphqlLogo         from '@/assets/graphql.png'
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
  type: 'Full-time' | 'Freelance' | 'Internship'
  website?: string
  linkedin?: string
  projects: Project[]
}

export const EXPERIENCE_LOGOS: Record<string, string> = {
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
          'Owned the digital wallet surface end-to-end: balance, transactions, and redemption against the commerce stack.',
          'Shipped campaign modules (Disney/Marvel) inside the Shopify + AppMaker + GraphQL setup used by the store app.',
          'Proposed post-order in-app review; store rating moved 3.8 to 4.8. Following month: sales +~11%, orders +~5%.',
        ],
        integrations: [
          { name: 'Shopify',  logo: shopifyLogo },
          { name: 'AppMaker', logo: appmakerLogo },
          { name: 'GraphQL',  logo: graphqlLogo },
        ],
      },
      {
        name: 'OWND! - Gen Z Fashion Commerce (Aditya Birla Group)',
        projectLogo: owndLogo,
        website: 'https://ownd.in/',
        bullets: [
          'Owning pre-launch commerce journeys and payment wiring on a large consumer RN codebase.',
          'Integrated Juspay and kept Shopify/GraphQL/Firebase paths aligned for launch-critical flows.',
        ],
        integrations: [
          { name: 'Juspay',   logo: juspayLogo },
          { name: 'Shopify',  logo: shopifyLogo },
          { name: 'GraphQL',  logo: graphqlLogo },
          { name: 'Firebase', logo: firebaseLogo },
        ],
      },
      {
        name: 'KhelCoach - Sports Ecosystem',
        projectLogo: khelcoachLogo,
        website: 'https://www.khelcoach.com/',
        bullets: [
          'Delivered three role apps (athlete/coach/academy) on a shared design system with one release process.',
          'Owned Fastlane store pipelines and CodePush OTA so fixes could ship without full store cycles.',
          'Wired Razorpay payments and booking flows with Firebase-backed monitoring.',
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
          'Owned WebToNative delivery with custom JS bridges for courts, play, and community flows.',
          'Instrumented Firebase Analytics and Crashlytics for stability and funnel visibility in production.',
        ],
        integrations: [
          { name: 'Firebase',    logo: firebaseLogo },
          { name: 'Crashlytics', logo: crashlyticsLogo },
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
        name: 'House AI - Interior and Exterior Design',
        projectLogo: houseAiLogo,
        website: 'https://www.houseaiapp.com/',
        bullets: [
          'Owned mobile AI generate flows (Gemini Flash / Vertex) plus FastAPI backend work when the product needed it.',
          'Built upload → preview → generate → save with RevenueCat gating and Sentry for production issues.',
          'Shipped against a live consumer base (20K+ downloads, 4.5 rating) - not a demo.',
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
        name: 'Hunger - Food Delivery Platform',
        bullets: [
          'Built the RN app from scratch: core delivery flows and reusable API hooks.',
          'Integrated Firebase Authentication as the auth path for the product.',
        ],
        integrations: [
          { name: 'Firebase', logo: firebaseLogo },
        ],
      },
    ],
  },
]
