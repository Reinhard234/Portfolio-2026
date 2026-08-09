import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Road infrastructure reporting',
    description:
      'A mobile app for citizens to log and keep track of reported road infrastructure defects',
    image: 'road-infrastructure-1',
    client: 'Western Cape Government',
    year: '2025 - 2026',
    skills: ['Blazor', 'C#', 'Maui', 'Android/iOS'],
    caseStudy: {
      industry: 'Govtech',
      role: ['UI/UX Designer', 'Frontend Developer', 'Backend Developer'],
      overview:
        'A cross-platform mobile app that lets Western Cape residents report road defects (i.e., potholes, damaged guardrails) directly to the relevant municipal department, with photo evidence and status tracking.',
      contribution:
        'I led the design and frontend build for both sides of the platform — the citizen-facing reporting flow and the internal workflow foremen and supervisors use to action logged defects — while also contributing to the backend APIs powering both.',
      problem:
        'Residents had no direct, trackable way to report road infrastructure issues. Reports went through disconnected channels with no visibility into whether anything was actioned.',
      outcome:
        'Shipped to Android and iOS, giving 12,134 residents (as of March 2026) a direct channel to report infrastructure issues, with an admin portal that increases accountability of internal staff to action logged issues.',
      decisions:
        'Chose a MAUI Blazor hybrid app so that we could interface with our blazor web portal.',
      quality:
        'Proper regression testing is done before every production release and the backend is tested using xUnit',
      context:
        'Working in a team with 3 - 5 developers with a production release at least every month',
    },
  },
  {
    id: 2,
    title: 'Short term insurance',
    description:
      'A mobile first web platform catered for PPS members to get short term insurance on their everyday products',
    image: 'short-term-insurance-1',
    client: 'PPS',
    year: '2023 - 2024',
    skills: ['Angular', 'TypeScript', 'Mobile-first'],
    caseStudy: {
      industry: 'Fintech',
      role: ['UI/UX Designer', 'Frontend Developer', 'Backend Developer'],
      overview:
        'A mobile-first web platform that lets PPS members take out short-term insurance on everyday items — phones, laptops, appliances — directly from their member portal, without going through a traditional broker process.',
      problem:
        'PPS members had no self-service way to insure everyday personal items. Getting cover meant going through slower, broker-mediated channels not designed for quick, low-value policies.',
      contribution:
        'I designed the quoting and policy purchase flow with a mobile-first approach, since most members were expected to sign up on their phones, then built the Angular frontend and contributed to the backend services handling quoting and policy issuance.',
      outcome:
        'Shipped as a fully self-service flow, reducing the time for a member to get covered from days (broker-dependent) to minutes.',
      decisions:
        'Prioritized a mobile-first design system from the start, given early usage data showed most members were engaging with their PPS portal primarily on mobile.',
      context:
        'Built as an extension to an existing PPS member portal, requiring the new flow to match established design patterns while introducing a simplified, faster UX for this specific product line.',
    },
  },
  {
    id: 3,
    title: 'Long term insurance',
    description:
      'A web based platform for members to keep track and update their long term insurance products',
    image: 'life-insurance-1',
    client: 'PPS',
    year: '2023-2025',
    skills: ['Angular', 'Capacitor'],
    caseStudy: {
      industry: 'Fintech',
      role: ['UI/UX Designer', 'Frontend Developer', 'Backend Developer'],
      overview:
        'A web platform that gives PPS members visibility and control over their long-term insurance products — life cover, disability, and related policies — letting them view, update, and manage their plans without needing to contact PPS directly.',
      problem:
        'Members had limited visibility into their long-term policies and needed to contact PPS directly for basic changes or status checks, creating unnecessary friction and support load.',
      contribution:
        'I designed the member-facing dashboard and policy management flows, built the Angular frontend, and worked on the backend integrations that pulled live policy data into the portal.',
      outcome:
        'Gave members direct, real-time visibility into their policies, reducing reliance on support channels for routine account queries.',
      decisions:
        'Used Capacitor to package the platform as a mobile app from the existing Angular codebase, avoiding a separate native build while still giving members an app-store presence.',
      context:
        'Long-running project (2023-2025) involving multiple iterations as PPS expanded which policy types members could manage self-service.',
    },
  },
  {
    id: 4,
    title: 'Emodle',
    description:
      'A puzzle game where you use emojis to guess the answer of the day on easy or hard mode',
    image: 'emodle-1',
    client: 'Solo',
    year: '2026',
    skills: ['HTML', 'JS', 'CSS'],
    caseStudy: {
      industry: 'Games',
      role: ['UI/UX Designer', 'Frontend Developer', 'Backend Developer'],
      overview:
        'A daily emoji-guessing puzzle game, similar in spirit to Wordle, where players decode a string of emojis to guess a word or phrase, with easy and hard difficulty modes.',
      problem:
        'Wanted to build a small, self-contained project outside of client work to practice end-to-end ownership — concept, design, and build — without the constraints of an existing codebase or design system.',
      contribution:
        'Solo-built the entire game: designed the puzzle mechanic and UI from scratch, and implemented it using vanilla HTML, JS, and CSS with no frameworks.',
      outcome:
        'A fully playable daily puzzle game, built as a personal project to demonstrate independent design and development outside of client work.',
      decisions:
        'Deliberately avoided frameworks to keep the project lightweight and to sharpen fundamentals — DOM manipulation, state handling, and animation — without relying on abstractions.',
    },
  },
];
