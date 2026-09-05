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
import graphqlLogo       from '@/assets/graphql.png'
import onesignalLogo     from '@/assets/onesignal.png'

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
  /** Short ownership / employment context shown on the card */
  context?: string
  stack: StackItem[]
  integrations?: Integration[]
  live?: string
  website?: string
  stores?: StoreLink[]
  category: string
  logo?: string
  /** Wide wordmarks (e.g. Jockey, OWND) - use contain + wider frame, not square crop */
  logoWide?: boolean
}

/** Impact rank for All (category filters keep relative order): proof → ownership → brand → rest. */
export const projectsData: Project[] = [
  {
    id: 'jockey',
    name: 'Jockey',
    context: 'Seventh Triangle · Full-time',
    description:
      'Mobile commerce on the App Store and Play Store. Digital wallet, Disney/Marvel campaign flows, and an in-app review path that moved store rating from 3.8 to 4.8.',
    stack: [
      { name: 'React Native', logo: reactLogo },
      { name: 'TypeScript',   logo: typescriptLogo },
    ],
    integrations: [
      { name: 'Shopify',      logo: shopifyLogo },
      { name: 'AppMaker',     logo: appmakerLogo },
      { name: 'GraphQL',      logo: graphqlLogo },
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
    id: 'kash',
    name: 'Kash',
    description:
      'Money companion on the App Store and Google Play. Solo product: Quick Log for plain-language entries, local-first SQLite, multi-account, multi-currency, optional cloud backup.',
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
      { name: 'OneSignal',  logo: onesignalLogo },
    ],
    live: 'https://kash.appmatters.in',
    stores: [
      { platform: 'ios',     url: 'https://apps.apple.com/us/app/kash-your-money-companion/id6774987648' },
      { platform: 'android', url: 'https://play.google.com/store/apps/details?id=com.kashfinance.app' },
    ],
    category: 'Finance',
    logo: kashLogo,
  },

  {
    id: 'ownd',
    name: 'OWND!',
    context: 'Seventh Triangle · Full-time',
    description:
      'Aditya Birla Gen Z fashion commerce (pre-launch). Core commerce journeys and Juspay payment integration for a large consumer platform.',
    stack: [
      { name: 'React Native', logo: reactLogo },
      { name: 'TypeScript',   logo: typescriptLogo },
    ],
    integrations: [
      { name: 'Juspay',   logo: juspayLogo },
      { name: 'Shopify',  logo: shopifyLogo },
      { name: 'GraphQL',  logo: graphqlLogo },
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
    context: 'Addicting Elements · Freelance',
    description:
      'AI interior and exterior design app with 20K+ downloads and 4.5 rating. Gemini Flash / Vertex image flows with subscription gating on iOS and Android.',
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
    context: 'Seventh Triangle · Full-time',
    description:
      'Three live role-based apps (athlete, coach, academy) with shared UI. Fastlane releases, CodePush OTA, payments and booking on the stores.',
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
    id: 'picklebay',
    name: 'Picklebay',
    context: 'Seventh Triangle · Full-time',
    description:
      'Pickleball platform for India: courts, matchmaking, bookings, tournaments, community. WebToNative shell with custom JS bridges; live on App Store and Play Store.',
    stack: [
      { name: 'WebToNative' },
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
  }
]
