export type HistoryItem = {
  id: string;
  title: string;
  section: 'Today' | 'Yesterday';
  image: string;
  tint: 'secondary' | 'tertiary' | 'primary';
  height: number;
};

export const historyItems: HistoryItem[] = [
  {
    id: 'portrait-1',
    title: 'AI Portrait',
    section: 'Today',
    tint: 'secondary',
    height: 248,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD9UVaywK6DDx6IkMw2HdVTUvt1RpmYcbzAZbkTTzDKeSiSjJ-9EeWe1hnX_zD_TyOGzjOYDLqTn_wPMOVZJK_BfgBtd-R9Rqkb4kUJMBZBJaK4QDX9szLxmftzReYF4iVSIDq5QmCuJtnbi-sFbV2_6UB9p_MgPq_wxpaCL6mvJgLMX7TkNUKtX9Dv5jSz3WIFLO8L9CAz-TPRkv3LfMtmnZlqZCT8OpuWdChopubQCR9ytqec0joWHZ_U8xsmIECNnWTo0YeY46M',
  },
  {
    id: 'landscape-1',
    title: 'Landscape',
    section: 'Today',
    tint: 'tertiary',
    height: 196,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwMl4tXriRwUABnYIYA8K0Tp6jl-RstSJshl_fYz2XFLTdq3N9RZdazaX90WnqDD_lL7uzNae4xuMUUbY0j0lO6idcT8yLE4SpeU5FSbMdqdtLlCpJnd57uo0Rkc-2R9AXy3PwFVLUvC7PKhi8C8XuRkyrFWaTPG3F9uj38PMchpF2izNh6yNk_dG7M8UtrrxthWd6ZEggHMMeMsHmFPjzcltnxPUqG6_9aHZMRm5nmYOvzxJACwZhcUr5LCWBxbhgGclh_JCDeqY',
  },
  {
    id: 'abstract-1',
    title: 'Abstract',
    section: 'Today',
    tint: 'primary',
    height: 178,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCED-05mCXqXr8EaQslhSFRUu837FgscAGiRD2akmu6y7BQUEnNHn3rKQt6NCvF9DdtZhZhaz9A2r0KRY6oS2aT2_igu0Qoxk01eQdBw5p0yduHNah6IB-WQbpu07pvjKLWU_MWosaDRIwqPih7Ndm6RaldZc-NG6v2RV03bYsiV4LDxUxwtUhUtxLn5sZ79gyIkj0uBy4lW0WvSN18Ur5rcTQyZ7reyGkjyAOotBc5UzP1nUYltB8mwHcV6KRorHn6f0C0z1q_B8E',
  },
  {
    id: 'cyberpunk-1',
    title: 'Cyberpunk',
    section: 'Yesterday',
    tint: 'secondary',
    height: 224,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLqf1JvDJ3Ai-YbSUAtmQTSjraqBdgo6PzuxuEOwt4SgfsXkVBN0ONGKoXn0e-CxoBSFkwhYwtWLWfWTkhqyWtgcWPOTtmedArNmAjDaQtSuy0K6eaJYNDRy3k7xt6s2-VMJYcgS9fCWIfhPBMSBZD7QHG4OBoArRQ4lZXTi4PcBpQTJ1fQE0Crk1l0E_OPUYDiaZMoH_nvaKhsXNfcQmCXxXHLMF2UGxYmVTt-1EvCrGbG3-mxotmyqmAMsdtmWauHvyt80mO4Og',
  },
  {
    id: 'concept-1',
    title: 'Concept Art',
    section: 'Yesterday',
    tint: 'tertiary',
    height: 248,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJqKEY4bJuWYG60cz312gYQwpNdy7Fwi6-M6VsP7VcVBXq_do76OLsWPOAbznXllNm8a4k5AxPrHYuPZSf03BLcqn_oVL-A925ZCG4Qy6h15fNr2PmQaNMs5GMUMRh9s1g_8yOgPAwpt-3D4BN1NE7PeuHMb_A8sOoFfAszUApmQFKY5exrQ8Ijp3HYtZZEoTTtzq2KP8-floiYk7HPJ6OcYJeUsnaTiAQs-9gLJMKdDkuZ0vC7Q-CCq_oL5-9CRMp6QpXhPSrrrM',
  },
];

export const avatarImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAiUv4jN6DDji9jvIbySCFbw6lWeGNseyyFa4br485QO3GX9AQ5piGLbWKDbwwkIh8-gDejs1pZ--WWFyg5q7dHGiLIPd_cRYzQbjXa_u78uhTvaZm7e-CPJRfCYLkJAP9MZNytR98JcNQFeGIxuLpYsH594_mJ-D1wDMk3gV5zaMYwpurAfzHb51NXaGd4WIDw3CH_aRMwA_t650r63Vum07Lyj8hq1w7p7xPqOfdkIfmzmGI6uEHpOPVPJB9F08xPqWFJyfz9Wm0';
