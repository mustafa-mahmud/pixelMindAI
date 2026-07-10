import type { ComponentProps } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

export type ImageStyleOption = {
  title: string;
  imageUrl: string;
};

export type AspectRatioOption = {
  label: string;
  boxClassName: string;
};

export type NavItem = {
  icon: MaterialIconName;
  active?: boolean;
};

export const avatarUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAQQ3jSRuHxjn6rdmRuBPAanUbHN8KzvRPwLALHwaDIHg-XCzmmVKdBEzOttaexqC-SZW9R1vIb-O6Tcvjp8aa-936Z15x9YX_ZaBlM8RssKqRmOzu5ZU_5oDshVCf9SJkcmo1mGr2TYWOaDC1dhXtJ3yaebju4JxqieFkVAhoJ2iQXVla3KmFEPk55hMUav6NZjuCwaET8BTwnQvsxYnnqFKhIOSDsa5ORkozuMe8rFHfrB1_md1Ai87cTw-Ml0EFRxpXMEQOvc44';

export const styleOptions: ImageStyleOption[] = [
  {
    title: 'Fantasy',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD8VGRQ1Xu1XKsuuEWG2XGH1dGoZ6-Sr90fGgscxijwPG_tfeXvjV-iZ0b7rjspsvU44D1U3ORIkRBRaB4r-OHMOxnFc9_saf853n4T2m1TJ8TpYOMvE5hFjb4aCwHNXdc22y1IP2XsDVSh5bp0AZuhOJChmjUl2OWoh7Xds4MQTs4WtU_6LmkXDaUjbQJBfLhMtgiJ16r7Cr87wftyBx0tOiNe3a06tLxZ1lrG0rXVt84o_GMvbXhR2xgny4trQcjprrpufCVYL6A',
  },
  {
    title: 'Realistic',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDoYLYnAaUTY-2HUgY6X1r1vpmU2ec0yqgGAejgj8fbWju5B0ZI9VrnFcCWjHr0Nx5Nx1dc1uhKCeN9_buWMDZOFdx70pGEgDSAG3oX_9GRekkRxa81nzg29PrnAcpwTtInxsEpatVDA4ifkrMupd77iKrquAUQ-COLEmXzBsDgKw8z6U2XC04vlUB1ocnvlB4eYGuXG_GKlUJk4oSaegZYyJ6L5q1lCWLyFDSLz33Je1VUwxlCSUiZ9RV_hzhfqmj-dLAOOY1Kzgk',
  },
  {
    title: 'Anime',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8M3XZ7ujTJKpzR2moFVdjmL2YNpOL4Yl-GFPUgCSjMWQz-_98t5ltQAxGCkrUUUyucm9UTRCNR_RD2Can9wcmV0qOwd_4K4gMb6Y-svtnIxqweUWPw4Bni0LTdw5BUEL8SbyjVGLYhv5AAn9SgueBtjmiTh2mI1ecjxsBsTucMWHWmFCFNBkbkq1mCfAq7-ym94DE9oNGYWzJiSoJ0p5e83V_EamolIUoPHpjbP_LJzkB97t2K46S3kUoXN0a1uGWBuvGO2UIelQ',
  },
  {
    title: 'Cyberpunk',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAL6N71kCa5A43lRkaeXe3kI7Lf5DWGZ8HmWUx5vwfAT331Vi80PuSkpT2drGYY3IOeNFGqJP2FvR48nA1sDR0LhwG67aHUOSlQmqYlO0hkoMMWAck44nnSjbhjA3muCua6qfKbcDXQJZSWWzo-6g67F1HomJhHspzrH2VTDasY5iKIvoF2zPqDCGBxTFNvFph-QeH7oVJllcyAJ_juuIBpsRRIL60kyzDv_zsTx4TIU07YCcGCHlL45NOr7x3Xc7rvU8R0lTtR3UU',
  },
];

export const ratioOptions: AspectRatioOption[] = [
  { label: '1:1', boxClassName: 'h-6 w-6' },
  { label: '16:9', boxClassName: 'h-4 w-8' },
  { label: '9:16', boxClassName: 'h-8 w-4' },
];

export const navItems: NavItem[] = [
  { icon: 'home' },
  { icon: 'auto-fix-high', active: true },
  { icon: 'add-a-photo' },
  { icon: 'history' },
  { icon: 'person' },
];
