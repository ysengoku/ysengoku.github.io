import type { GlobeStop } from '@models/globe';

export const globeStops: GlobeStop[] = [
  {
    id: 'about',
    labelKey: 'globe.about.label',
    lon: 138.5,
    lat: 36.5,
    summaryKey: 'globe.about.summary',
    textKey: 'globe.about.text',
  },
  {
    id: 'experience',
    labelKey: 'globe.experience.label',
    lon: -157,
    lat: 20.8,
    view: [16, 7],
    viewNarrow: [8, 14],
    summaryKey: 'globe.experience.summary',
    textKey: 'globe.experience.text',
  },
  {
    id: 'skills',
    labelKey: 'globe.skills.label',
    lon: -35,
    lat: 40,
    summaryKey: 'globe.skills.summary',
    textKey: 'globe.skills.text',
  },
  {
    id: 'projects',
    labelKey: 'globe.projects.label',
    lon: 2.5,
    lat: 46.5,
    summaryKey: 'globe.projects.summary',
    textKey: 'globe.projects.text',
  },
];
