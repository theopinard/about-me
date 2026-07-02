const SITE_ORIGIN = 'https://theopinard.github.io';
const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

export const siteName = 'Theodore Meynard';

export function siteUrl(path = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const withBase = `${BASE_PATH}${cleanPath}`.replace(/\/{2,}/g, '/');
  const trailing = withBase.endsWith('/') ? withBase : `${withBase}/`;
  return `${SITE_ORIGIN}${trailing}`;
}

export function assetUrl(path: string): string {
  const cleanPath = path.replace(/^\/+/, '');
  return `${SITE_ORIGIN}${BASE_PATH}/${cleanPath}`;
}

export function localPath(path = '/'): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`.replace(/\/{2,}/g, '/');
}

export function joinKeywords(values: Array<string | undefined>): string {
  return values.filter(Boolean).join(', ');
}

export function personJsonLd(profile: {
  name: string;
  title: string;
  location: string;
  github: string;
  linkedin: string;
  photo: string;
  expertise_tags?: string[];
  skills: Record<string, string[]>;
  work: Array<{ company: string; url?: string; role: string }>;
  education: Array<{ institution: string; degree: string }>;
}) {
  const skills = [
    ...(profile.expertise_tags ?? []),
    ...Object.values(profile.skills).flat(),
  ];

  return {
    '@type': 'Person',
    '@id': `${siteUrl()}#theodore-meynard`,
    name: profile.name,
    url: siteUrl(),
    image: assetUrl(profile.photo),
    jobTitle: profile.title,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'DE',
    },
    sameAs: [
      `https://github.com/${profile.github}`,
      `https://www.linkedin.com/in/${profile.linkedin}`,
    ],
    knowsAbout: [...new Set(skills)],
    worksFor: profile.work[0]
      ? {
          '@type': 'Organization',
          name: profile.work[0].company,
          url: profile.work[0].url,
        }
      : undefined,
    alumniOf: profile.education.map((edu) => ({
      '@type': 'CollegeOrUniversity',
      name: edu.institution,
      description: edu.degree,
    })),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
