// constants.ts:

export const class_prefix: string = 'header-main-sm';
export const currentYear: number = new Date().getFullYear();
export const versionNum: String = "0.0.0";

export type NavItem = {
  label: string;
  path: string;
};

export const CONTACT_INFO = [
  {
    type: 'phone',
    value: '+12267873529',
    display: '+1 (226) 787-3529',
  },
  {
    type: 'mail',
    value: 'faarizyt@gmail.com',
    display: 'faarizyt@gmail.com',
  }
];

export const ROUTE_LINKS = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  WORK: '/work'
};

export const WORKPAGE_LINKS = [
  { fragment: 'game-dev', text: 'GAME DEVELOPMENT' },
  { fragment: 'web-dev', text: 'WEB DEVELOPMENT' },
  { fragment: 'writing', text: 'WRITING' },
];

export const ROUTE_LINKS_ARRAY: NavItem[] =
  Object.entries(ROUTE_LINKS).map(
    ([key, value]) => ({
      label: key,
      path: value
    })
  );

export const SOCIAL_LINKS = [
  { href: 'https://www.github.com', aria_label: 'GitHub', class_suffix: 'github'},
  { href: 'https://www.instagram.com', aria_label: 'Instagram', class_suffix: 'ig'},
  { href: 'https://kdp.amazon.com', aria_label: 'Amazon KDP', class_suffix: 'kdp'},
  { href: 'https://www.linkedin.com', aria_label: 'Linkedin', class_suffix: 'linkedin'},
  { href: 'https://www.medium.com', aria_label: 'Medium', class_suffix: 'medium'},
  { href: 'https://www.twitter.com', aria_label: 'X (Formerly Twitter)', class_suffix: 'twitterx'},
  { href: 'https://www.unity.com', aria_label: 'Unity', class_suffix: 'unity-engine'},
];
