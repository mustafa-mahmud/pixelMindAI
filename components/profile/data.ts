export const profileUser = {
  name: 'PixelMind AI',
  email: 'digital.alchemist@lumina.studio',
  avatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDPk8z_aniOSLjn-ZEca2MRKwnCuGekmnz9q4sRXYC7XAJQDtWFvZDk8lnJXfvMaiL5-e1EqRSB3yRHL8VWj3MU1rd4sE0QAnC_0s8lkBBH9zbpuQtNrFQyvQjZxLqp9D4U_JS_DeEmKF7FTh-Eb9yQ4jz_Hbs5wMvI6PwxJnWhwXceBpCYkaVRRFFkwZ78uKJSDzyJXlMZ4kqHQnNNlBgQYfiy9n_GJGs06dqMEFBubBG7kXD40tsCzs7n4gnU5COn56teH3E4c-A',
  smallAvatarUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDq7LhC1-CUkOcM1RUdPOC4pJz_soQtRE_9OIexfxNeUMVHmCH1GQIqDsG3gDHQWeQZPDz7nl4Wu0hvKl-6kqc1b1dCB-HmFoHK_7M4Ay7hvsAVe9vAQtKN9cV_vmvn5cISTk6-BU7O_xuwkc4ITO3Ev4Mz5LlyeOPb95rCliQpyGQiFuJSPS_5ViMq6yGNNvh1aR0UJ2kI7ZCYMU-BvKwDtDsyaQ1TQ5UTLkRr1Xc_j3eLgoBngvClRPXfxkanbxe2DVj-PYqGPQo',
};

export const storageUsage = {
  used: '1.2 TB',
  total: '2 TB',
  percent: 60,
};

export type SettingItem = {
  id: string;
  label: string;
  icon: string;
  accentClass: string;
  sublabel?: string;
  type?: 'toggle' | 'link';
  enabled?: boolean;
};

export const settings: SettingItem[] = [
  {
    id: 'membership',
    label: 'Membership',
    icon: 'stars',
    accentClass: 'bg-[#ddb7ff]/10 text-[#ddb7ff]',
    type: 'link',
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'notifications',
    accentClass: 'bg-[#4cd7f6]/10 text-[#4cd7f6]',
    type: 'toggle',
    enabled: true,
  },
  {
    id: 'dark-theme',
    label: 'Dark Theme',
    icon: 'dark-mode',
    accentClass: 'bg-[#ffafd3]/10 text-[#ffafd3]',
    type: 'toggle',
    enabled: true,
  },
  {
    id: 'language',
    label: 'Language',
    icon: 'language',
    accentClass: 'bg-white/5 text-[#cfc2d6]',
    sublabel: 'English (US)',
    type: 'link',
  },
  {
    id: 'privacy',
    label: 'Privacy & Security',
    icon: 'security',
    accentClass: 'bg-white/5 text-[#cfc2d6]',
    type: 'link',
  },
  {
    id: 'help',
    label: 'Help Center',
    icon: 'help',
    accentClass: 'bg-white/5 text-[#cfc2d6]',
    type: 'link',
  },
];
