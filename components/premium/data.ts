export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBqLZNhvqb3Cg2Ee6OJEhkQBlInl06mkBoxvObEWn9A4ANOQP1OWXlX-hLxlNZBmn7-HBwc9uam2nBliuGOW_G5XNHOlkvY3H1UtdVHxrCzcvu8zuQjq8-zc5tQu_DKuLvydJTFpYlqp--F7pyxVR8ik0zJjZOBqk-rmd4tCnlArCBaNgj51gdyuyq2DCWksfae5E2Z6vQQpD2qcQ2S1WUJWDHp_HgnSno8cTY82xbP2SFq9HL1IHXAdhiRCjJwI_5wXuQQwJrtrVY';

export const perks = [
  {
    icon: 'auto-fix-high',
    title: 'Unlimited generations',
    description: 'Create without boundaries',
  },
  {
    icon: 'bolt',
    title: 'Faster Processing',
    description: 'Priority server access',
  },
  {
    icon: 'high-quality',
    title: '4K Export',
    description: 'Ultra-high resolution results',
  },
  {
    icon: 'block',
    title: 'No Ads',
    description: 'Clean, focused experience',
  },
] as const;

export const plans = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$19.99',
    interval: '/mo',
    savings: undefined,
    badge: undefined,
    selected: false,
    benefits: ['All Pro features', 'Cancel anytime'],
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: '$149.99',
    interval: '/yr',
    savings: 'Save 38%',
    badge: 'BEST VALUE',
    selected: true,
    benefits: ['Everything in Monthly', '2 months free'],
  },
] as const;
