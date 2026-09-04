import reactLogo        from '@/assets/react.png'
import expoLogo         from '@/assets/expo-logo.png'
import typescriptLogo   from '@/assets/typescript.webp'
import reduxLogo        from '@/assets/redux_toolkit.png'
import zustandLogo      from '@/assets/zustand.png'
import sqliteLogo       from '@/assets/sqlite-logo.jpeg'
import geminiLogo       from '@/assets/gemini.svg'
import vertexLogo       from '@/assets/Vertex_AI_Logo.webp'
import claudeLogo       from '@/assets/Claude-ai-logo.webp'
import aiStudioLogo     from '@/assets/aistudio.png'
import cursorLogo       from '@/assets/Cursor_logo.png'
import revenuecatLogo   from '@/assets/revenuecat.png'
import razorpayLogo     from '@/assets/razorpay.svg'
import juspayLogo       from '@/assets/juspay.svg'
import fastlaneLogo     from '@/assets/fastlane.svg'
import codepushLogo     from '@/assets/codepush.png'
import androidLogo      from '@/assets/Android_Studio_Logo_.webp'
import xcodeLogo        from '@/assets/xcode.jpeg'
import githubLogo       from '@/assets/github.svg'
import firebaseLogo     from '@/assets/firebase.png'
import crashlyticsLogo  from '@/assets/crashlytics.png'
import sentryLogo       from '@/assets/sentry.png'
import onesignalLogo    from '@/assets/onesignal.png'
import shopifyLogo      from '@/assets/Shopify.webp'
import appmakerLogo     from '@/assets/Appmaker.xyz.webp'
import graphqlLogo      from '@/assets/graphql.png'
import nodeLogo         from '@/assets/Node.js_logo.svg'
import expressLogo      from '@/assets/express-js.png'
import mongoLogo        from '@/assets/mongodb.png'
import postmanLogo      from '@/assets/postman.png'
import figmaLogo        from '@/assets/Figma-logo.webp'

export interface Skill {
  name: string
  logo?: string
  darkBg?: boolean
}

export interface SkillCategory {
  label: string
  skills: Skill[]
}

export const skillsData: SkillCategory[] = [
  {
    label: 'Mobile',
    skills: [
      { name: 'React Native', logo: reactLogo },
      { name: 'Expo',         logo: expoLogo },
      { name: 'TypeScript',   logo: typescriptLogo },
      { name: 'Redux Toolkit',logo: reduxLogo },
      { name: 'Zustand',      logo: zustandLogo },
      { name: 'SQLite',       logo: sqliteLogo },
      { name: 'MMKV' },
    ],
  },
  {
    label: 'AI & LLMs',
    skills: [
      { name: 'Gemini Flash',     logo: geminiLogo },
      { name: 'Vertex AI',        logo: vertexLogo },
      { name: 'Claude',           logo: claudeLogo },
      { name: 'Google AI Studio', logo: aiStudioLogo, darkBg: true },
      { name: 'Cursor',           logo: cursorLogo },
    ],
  },
  {
    label: 'Payments & Monetisation',
    skills: [
      { name: 'RevenueCat', logo: revenuecatLogo },
      { name: 'Razorpay',   logo: razorpayLogo },
      { name: 'Juspay',     logo: juspayLogo },
    ],
  },
  {
    label: 'DevOps & Release',
    skills: [
      { name: 'Fastlane',       logo: fastlaneLogo },
      { name: 'CodePush',       logo: codepushLogo },
      { name: 'Android Studio', logo: androidLogo },
      { name: 'Xcode',          logo: xcodeLogo },
      { name: 'GitHub Actions', logo: githubLogo },
    ],
  },
  {
    label: 'Analytics & Monitoring',
    skills: [
      { name: 'Firebase',    logo: firebaseLogo },
      { name: 'Crashlytics', logo: crashlyticsLogo },
      { name: 'Sentry',      logo: sentryLogo },
      { name: 'OneSignal',   logo: onesignalLogo },
    ],
  },
  {
    label: 'Integrations',
    skills: [
      { name: 'Shopify',  logo: shopifyLogo },
      { name: 'AppMaker', logo: appmakerLogo },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js',    logo: nodeLogo },
      { name: 'Express.js', logo: expressLogo, darkBg: true },
      { name: 'MongoDB',    logo: mongoLogo },
      { name: 'GraphQL',    logo: graphqlLogo },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git',     logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma',   logo: figmaLogo },
    ],
  },
]
