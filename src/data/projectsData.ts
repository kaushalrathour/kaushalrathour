import kashLogo          from '@/assets/kash-favicon.png'
import jockeyLogo        from '@/assets/jockey-india-mobile-commerce-app.webp'
import houseAiLogo       from '@/assets/house-ai-interior-design-app-react-native.webp'
import khelcoachIcon     from '@/assets/khelcoach-sports-app-icon.webp'
import owndLogo          from '@/assets/ownd-aditya-birla-fashion-app.svg'
import picklebayLogo     from '@/assets/picklebay.svg'

// Integration logos
import shopifyLogo       from '@/assets/Shopify.webp'
import revenuecatLogo    from '@/assets/revenuecat.png'
import sentryLogo        from '@/assets/sentry.png'
import juspayLogo        from '@/assets/juspay.svg'
import appmakerLogo      from '@/assets/Appmaker.xyz.webp'
import razorpayLogo      from '@/assets/razorpay.svg'
import firebaseLogo      from '@/assets/firebase.png'
import crashlyticsLogo   from '@/assets/crashlytics.png'
import fastlaneLogo      from '@/assets/fastlane.svg'
import codepushLogo      from '@/assets/codepush.png'
import geminiLogo        from '@/assets/gemini.svg'
import vertexLogo        from '@/assets/Vertex_AI_Logo.webp'

// Tech stack logos
import reactLogo         from '@/assets/react.png'
import typescriptLogo    from '@/assets/typescript.webp'
import nodeLogo          from '@/assets/Node.js_logo.svg'
import sqliteLogo        from '@/assets/sqlite-logo.jpeg'

export interface StoreLink {
  platform: 'ios' | 'android'
  url: string
}

export interface Integration {
  name: string
  logo: string
}

export interface StackItem {
  name: string
  logo?: string
}

export interface Project {
  id: string
  name: string
  description: string
  stack: StackItem[]
  integrations?: Integration[]
  live?: string
  website?: string
  stores?: StoreLink[]
  category: string
  logo?: string
  /** Wide wordmarks (e.g. Jockey, OWND) — use contain + wider frame, not square crop */
  logoWide?: boolean
}

/** Ranked for All + category filters (order preserved within each category). */
export const projectsData: Project[] = [
  {
    id: 'jockey',
    name: 'Jockey',
    description:
      'Mobile commerce app. Built digital wallet end-to-end, shipped Disney/Marvel campaign flows in a Shopify + Appmaker.xyz ecosystem. In-app review pushed store rating from 3.8 to 4.8.',
    stack: [
      { name: 'React Native', logo: reactLogo },
      { name: 'TypeScript',   logo: typescriptLogo },
    ],
    integrations: [
      { name: 'Shopify',      logo: shopifyLogo },
      { name: 'Appmaker.xyz', logo: appmakerLogo },
    ],
    website: 'https://jockey.in/',
    stores: [
      { platform: 'ios',     url: 'https://apps.apple.com/in/app/jockey-india-shopping-app/id6739937985' },
      { platform: 'android', url: 'https://play.google.com/store/apps/details?id=in.jockeyindia' },
    ],
    category: 'Commerce',
    logo: jockeyLogo,
    logoWide: true,
  },
  {
    id: 'ownd',
    name: 'OWND!',
    description:
      'Gen Z fashion commerce platform by Aditya Birla Group. Building core commerce journeys, launch-critical integrations, and Juspay payment flows.',
    stack: [
      { name: 'React Native', logo: reactLogo },
      { name: 'TypeScript',   logo: typescriptLogo },
    ],
    integrations: [
      { name: 'Juspay',   logo: juspayLogo },
      { name: 'Shopify',  logo: shopifyLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
    website: 'https://ownd.in/',
    category: 'Commerce',
    logo: owndLogo,
    logoWide: true,
  },
  {
    id: 'house-ai',
    name: 'House AI',
    description:
      'AI interior and exterior design app with 20K+ downloads and 4.5 rating. Built AI image transformation flows using Gemini Flash and Vertex AI with subscription gating.',
    stack: [
      { name: 'React Native', logo: reactLogo },
      { name: 'TypeScript',   logo: typescriptLogo },
    ],
    integrations: [
      { name: 'Gemini Flash', logo: geminiLogo },
      { name: 'Vertex AI',    logo: vertexLogo },
      { name: 'RevenueCat',   logo: revenuecatLogo },
      { name: 'Sentry',       logo: sentryLogo },
    ],
    website: 'https://www.houseaiapp.com/',
    stores: [
      { platform: 'ios',     url: 'https://apps.apple.com/us/app/house-ai-home-interior-design/id6756092749' },
      { platform: 'android', url: 'https://play.google.com/store/apps/details?id=com.arshroopsaini.houseai&hl=en_IN' },
    ],
    category: 'AI',
    logo: houseAiLogo,
  },
  {
    id: 'khelcoach',
    name: 'KhelCoach',
    description:
      '3 role-based apps (athlete, coach, academy) with shared design system. Automated releases with Fastlane, OTA updates via CodePush, integrated payments and booking flows.',
    stack: [
      { name: 'React Native', logo: reactLogo },
      { name: 'TypeScript',   logo: typescriptLogo },
    ],
    integrations: [
      { name: 'Fastlane',  logo: fastlaneLogo },
      { name: 'CodePush',  logo: codepushLogo },
      { name: 'Razorpay',  logo: razorpayLogo },
      { name: 'Firebase',  logo: firebaseLogo },
    ],
    website: 'https://www.khelcoach.com/',
    stores: [
      { platform: 'ios',     url: 'https://apps.apple.com/in/app/khel-coach-athlete/id6740985441' },
      { platform: 'android', url: 'https://play.google.com/store/apps/details?hl=en_IN&id=com.khelsportsplayerapp' },
      { platform: 'ios',     url: 'https://apps.apple.com/in/app/khel-coach-for-coach/id6742438829' },
      { platform: 'android', url: 'https://play.google.com/store/apps/details?hl=en_IN&id=com.khelsportscoachapp' },
      { platform: 'ios',     url: 'https://apps.apple.com/in/app/khelcoach-academy/id6751832125' },
      { platform: 'android', url: 'https://play.google.com/store/apps/details?id=com.khelcoach.academycms&hl=en_IN' },
    ],
    category: 'Sports',
    logo: khelcoachIcon,
  },
  {
    id: 'kash',
    name: 'Kash',
    description:
      'Money companion app on the App Store and Google Play. Built solo: Quick Log parses plain-language entries, local-first SQLite model, multi-account, multi-currency, optional cloud backup.',
    stack: [
      { name: 'React Native', logo: reactLogo },
      { name: 'SQLite',       logo: sqliteLogo },
      { name: 'Node.js',      logo: nodeLogo },
      { name: 'TypeScript',   logo: typescriptLogo },
    ],
    integrations: [
      { name: 'RevenueCat', logo: revenuecatLogo },
      { name: 'Sentry',     logo: sentryLogo },
      { name: 'Firebase',   logo: firebaseLogo },
    ],
    live: 'https://kash.appmatters.in',
    stores: [
      { platform: 'ios',     url: 'https://apps.apple.com/us/app/kash-your-money-companion/id6774987648' },
      { platform: 'android', url: 'https://play.google.com/store/apps/details?id=com.kashfinance.app' },
    ],
    category: 'Indie',
    logo: kashLogo,
  },
  {
    id: 'picklebay',
    name: 'Picklebay',
    description:
      'Pickleball sports-tech platform for India: discover courts, matchmaking, bookings, tournaments, and community. Built WebToNative app with custom JS bridges; instrumented Firebase Analytics and Crashlytics.',
    stack: [
      { name: 'React Native', logo: reactLogo },
      { name: 'JavaScript' },
    ],
    integrations: [
      { name: 'Firebase',    logo: firebaseLogo },
      { name: 'Crashlytics', logo: crashlyticsLogo },
    ],
    website: 'https://picklebay.com/',
    stores: [
      { platform: 'ios',     url: 'https://apps.apple.com/app/id6748446794' },
      { platform: 'android', url: 'https://play.google.com/store/apps/details?id=com.picklebay' },
    ],
    category: 'Sports',
    logo: picklebayLogo,
  },
]
