import type { ComponentProps } from 'react';

type IconName = ComponentProps<
  typeof import('@expo/vector-icons').MaterialIcons
>['name'];

export const COLORS = {
  background: '#000000',
  primary: '#ddb7ff',
  primaryContainer: '#b76dff',
  onPrimaryContainer: '#400071',
  secondary: '#4cd7f6',
  onSurface: '#e5e2e1',
  onSurfaceVariant: '#cfc2d6',
  surfaceContainer: '#201f1f',
  surfaceContainerLow: '#1c1b1b',
};

export const USER_AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCGjCUBr1ssra2xmwm6gdObIqPI4gvkTUQrmsqEUguVku1laM9SVaUQi9cxR1J4_r2n84zDfWdHa2z-sioHNrpifT0hFuFsRDyZoNHM0lgcGnN-3M2hFMll5QhiuZ9T8pX4eyHm6CB8bDCgNVKSr3sACdbdbg9V0RDVlvucih4B3hjgDo2APaOHnz2FzFEuYNK_8VfrwwUAUKg1cQzkOpjtSWB_opidluXHcLSEJ2jWZcdeATx7h54dkrYdqhY-lZMyDr242pKYeKA';

export const TOOLS: Array<{ label: string; icon: IconName }> = [
  { label: 'Enhance', icon: 'auto-awesome' },
  { label: 'Remove BG', icon: 'layers-clear' },
  { label: 'Restore', icon: 'history-edu' },
  { label: 'Anime', icon: 'palette' },
];

export const PROJECT_COLUMNS = [
  [
    {
      title: 'Futuristic Vogue',
      aspect: 3 / 4,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA8bSjQq_PURQSqR3rBetvTigQZQXmPM9NCnoiXsOzhRTEeF66WCJRF8MvsMowQ_-MdCn7VZUSq_BbI8RPyZu26ZPBikJc_8cdV2hCxQFF3SPZ3t0L3khaEgSSPYpiRoLu-byMiaAkzKNSRNTeGJy8Hm18_k2GuHfK3FAPUxMbFnZR7mc_lq2GxY2Tust8swAyDgTKKp7rt17aVK4KyDTmV7xgpIyinvBrBfOH9ChRm8ub03ES29A9cThV6W2pOdLwN0298fi_tQC4',
    },
    {
      title: 'Crystal Peaks',
      aspect: 1,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA37lxPglYBJHPGly9McAYEQTveg-Jc2fYSha6RW4wzdgOkMv7CazvT_7fj-2gBfV3NRxpW9vimsG4tYX_fiksnfLTGTP4Qx_N_x4J8myV8fDhSuwdZ0Anjxf-OFGOClbFxT1pzxxMhSBZNAfsxPeaH4yd0Ai_OluCzdt1GTz-kBrBOk_n8kHS24pErGA100bxDW5uw_wpucQozLG4iZXUZPOsaEGTj3AXetLoKkw9IM0RqxHDIVjK4156BLVRXciU6lYS_efed36M',
    },
  ],
  [
    {
      title: 'Glass Estate',
      aspect: 4 / 5,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDlFJNf0hK3ULnxQgUlIDCLVitRfaeiWjrmVcxK2YMzwCp2n18Rm4zcIY9StwjpS7DQwRIlQuPEPfLDSrzf1odWX8yjYtscscHvKFKefCiry_EWUy9rWdK627PHTgkJvzGFQOv64iOX2sKAqiaO-_qVoCEuvmPRcROL8m9mytNIM3yA9crtBn2oqN9wFOcfTC_HJzxunDG1jIf87d7B7C-JuoQ_1JqXOyAP4-qRp6Oj20-_Ogp1ymhi79GJej1eiWthJo3HVdBCP7I',
    },
    {
      title: 'Liquid Flow',
      aspect: 3 / 2,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCBbJMLqFpBKYeDwNXV_IxIYa8YHrLhAVOsf3pqULiYzGSU13xX-IcA85YsRLUpt7gu-xw9k3Ljv5APW7pZXk199zu0yVVsN8zFuUieKhr6FGWoi4JD3qnCeZbEoawrgNVlTzw9X7APPLgQzDu3WoIeycFgc-l-9kSlVdXp0CICS7A7nNlWQE6P4sQ5s1_jjfg_AYTI5beB_6a45Pbfe9ZT67xRkoNjVherphemhNB5e1Q82XN4qyYf-Ylczjm0XK5daOe_AogCuQs',
    },
  ],
];

export const TRENDING_STYLES = [
  {
    eyebrow: 'New Style',
    title: 'Cyberpunk 2077',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDIDBMt12VCfrz1mz_qsopIka0U7ME-zGY8tTqkOx7ZcB6BFU-6Pk06uFyPJt0azputNXXByZwu1ITLJIp7uJcnhvSsFTFjxTp7PTIXXsH57GqqS5zAJjwpNDDuvg4AoTQoYpnUtvlxWOUjjakTZCRsCur8Re29DFMNNU7hqk9K_-6EWdRY5T6446g4XrA2MDV60mL-rjj490LcYW8WBtZrTrhDDX_NH63uYhj7VtDdlFPwI7KFDBUv8X7P3pigN2iatdgONBRPkrk',
  },
  {
    eyebrow: 'Popular',
    title: 'Classical Oil',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-T4D5ne6ujcKYtcsI0_mJfCcXcY3ZdX2m0TkZz3hLFlkyfmZ6VuW45FndUqo3n1Hm2R4G9NHkMhm59TwyJW2-hpCW8kQSPMPfGEIfLGn9aZuq6lRXVc8LIYmex-lrDqEfe7BC8v7nb24MyY5tTws_D37hB49nscJKE2XxHRJo4MpZcC1HPOS7HQyCjQDluFkrArBbxWQqM04ss4iZe7QdHcIaeZo5SpiU3icrMT98covE9-0ZQXWApbT8QO55xS8tn4lXdi9Q0lw',
  },
  {
    eyebrow: 'Featured',
    title: 'Prism Glass',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDT6jiAqHtkof5XzNbGiXnBH_NZEbHDFxyQyZyF16wSvAptjwqRDvL4vP2YGCDEE6YzlXi4-DmGdHkfzXFvPiRcmS78uF__bK9nenR6VxrEAq6TMd7FUYe1ZvGuQ4Gf6X24tpjC08nVCFRIFa953RDMlS9erniuuzWtT9Ud4YecmQNkYqQ8nw4UQuuiOLaCdKARvHs86BSuq4Elr1VLlbTH9rYkGkguM73hPittSL2YiXzfhwKV66YxAOtckafenLYnlQk_TA96vso',
  },
];

export const NAV_ITEMS: Array<{
  icon: IconName;
  active?: boolean;
  link: string;
}> = [
  { icon: 'home', active: true, link: '/home' },
  { icon: 'auto-fix-high', link: '/home' },
  { icon: 'add-a-photo', link: '/home' },
  { icon: 'history', link: '/home' },
  { icon: 'person', link: '/profile' },
];
