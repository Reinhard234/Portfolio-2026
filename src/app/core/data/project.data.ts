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
        'A cross-platform app that lets Western Cape residents report road defects like potholes and damaged guardrails straight to the road infrastructure department, complete with photos and status tracking.',
      contribution:
        'I handled the frontend for the citizen-facing app and designed the internal tool that foremen and supervisors use to action logged reports. I also review frontend pull requests and handle releases.',
      problem:
        "Before this, residents didn't really have a proper way to report road issues. Everything went through scattered channels and nobody could tell if a reported defect actually led to anything.",
      outcome:
        "It's live on Android and iOS, with 12,134 residents using it as of March 2026. The admin side also means internal staff can actually be held accountable for acting on what gets logged.",
      decisions:
        'Went with a MAUI Blazor hybrid app so it could share code with our existing Blazor web portal instead of building everything twice.',
      quality:
        'Every production release goes through regression testing first, and the backend is tested with xUnit (100% code coverage).',
      context:
        'Working directly with the road infrastructure branch of the Western Cape Government, we are a small team of about 3-5 devs and we ship to production at least once a month.',
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
        'A mobile-first platform where PPS members can insure everyday items (i.e., phones, laptops etc) right from the portal, skipping the usual broker process.',
      problem:
        "There wasn't a self-service option for members who just wanted a quick way to cover their items. It all had to go through brokers, which was inefficient for something like insuring a laptop.",
      contribution:
        "I designed the entire end-to-end quoting flow with mobile in mind first, since that's how most members were using the portal, then built it out in Angular and helped with integrating the backend quoting services.",
      outcome:
        'What used to take days through a broker now takes minutes and you can do it entirely on your own.',
      decisions:
        'Went mobile-first from day one to provide a quick and easy way to get cover. We went with Angular so that it slots in nicely with the rest of the ecosystem.',
      context:
        'Working directly in the existing PPS ecosystem, we were a team of 2-3 devs and worked directly with a business analyst and the head of short term insurance.',
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
        'A platform giving PPS members visibility into their long-term policies (i.e., life cover, disability cover) so they can view and manage plans without having to call PPS every time.',
      problem:
        'Members had very little insight into their own policies. Even small changes meant a phone call, which piled unnecessary load onto support.',
      contribution:
        'I designed and implemented refined member dashboards and the redesigned their policy management flows, and worked on pulling live policy data in through backend integrations.',
      outcome:
        'Members now have a real-time, holisitic view over their policies and other products, which took a real chunk out of routine support queries.',
      decisions:
        'Used Capacitor to wrap the existing Angular codebase into a mobile app, so we got an app store presence without maintaining a separate native build.',
      context:
        'Part of the larger PPS ecosystem, we were a team of about 10 members, ranging from devs to QA testers.',
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
        'A daily emoji puzzle game, a bit like Wordle where you decode a string of emojis into a word or phrase, with easy and hard modes depending on how much of a challenge you want.',
      problem:
        'I wanted a small side project where I owned everything end to end without an existing codebase or design system telling me what to do.',
      contribution:
        'Built the whole thing solo: came up with the mechanic, designed the UI, and coded it in plain HTML, JS, and CSS.',
      outcome:
        'A fully playable daily puzzle game that exists purely because I wanted to build something on my own terms.',
      decisions:
        'Skipped frameworks on purpose. Wanted to get back to basics with DOM manipulation, state, and animation without anything abstracting it away.',
    },
  },
];
