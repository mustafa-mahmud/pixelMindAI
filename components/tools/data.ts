export type ToolTone = 'primary' | 'secondary' | 'tertiary' | 'error';

export type ToolItem = {
  title: string;
  description: string;
  icon: string;
  tone: ToolTone;
  filled?: boolean;
};

export const palette = {
  background: '#131313',
  surfaceContainer: '#201f1f',
  surfaceContainerLow: '#1c1b1b',
  surfaceContainerHigh: '#2a2a2a',
  surfaceContainerHighest: '#353534',
  onSurface: '#e5e2e1',
  onSurfaceVariant: '#cfc2d6',
  primary: '#ddb7ff',
  secondary: '#4cd7f6',
  tertiary: '#ffafd3',
  error: '#ffb4ab',
  onPrimaryContainer: '#400071',
};

export const toolToneClasses: Record<
  ToolTone,
  { background: string; text: string }
> = {
  primary: {
    background: 'bg-[#ddb7ff]/10',
    text: 'text-[#ddb7ff]',
  },
  secondary: {
    background: 'bg-[#4cd7f6]/10',
    text: 'text-[#4cd7f6]',
  },
  tertiary: {
    background: 'bg-[#ffafd3]/10',
    text: 'text-[#ffafd3]',
  },
  error: {
    background: 'bg-[#ffb4ab]/10',
    text: 'text-[#ffb4ab]',
  },
};

export const tools: ToolItem[] = [
  {
    title: 'Enhance',
    description: 'One-tap magic quality boost',
    icon: 'auto-fix-high',
    tone: 'primary',
    filled: true,
  },
  {
    title: 'Object Removal',
    description: 'Clean unwanted elements',
    icon: 'auto-fix-normal',
    tone: 'secondary',
  },
  {
    title: 'Face Restore',
    description: 'Revive blurry memories',
    icon: 'face',
    tone: 'tertiary',
  },
  {
    title: 'AI Avatar',
    description: 'Generate custom personas',
    icon: 'account-circle',
    tone: 'primary',
  },
  {
    title: 'AI Expand',
    description: 'Generative outpainting',
    icon: 'aspect-ratio',
    tone: 'secondary',
  },
  {
    title: 'AI Replace',
    description: 'Swap any scene element',
    icon: 'swap-horiz',
    tone: 'tertiary',
  },
  {
    title: 'AI Eraser',
    description: 'Precise pixel cleanup',
    icon: 'backspace',
    tone: 'error',
  },
  {
    title: 'AI Upscale',
    description: 'Enhance to 4K resolution',
    icon: 'high-quality',
    tone: 'secondary',
  },
];

const imgUrl = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCUkaSZzIp2F_BNJIbtoBEa0K8TfR4o5vcwP-GqJEb7mRK7HoADik0Oc6A55lTJ29z39tIROtCoBq3AN3ZyRQVk5IrZL6kcBWhPpxDF0cvyTWSgrGqFNf9fES5vavXotyXAwPnY-SbRJBkz60J3cJ-QxJWGit8fMg60_-vZFg07zGre-1HgtrZ5OKmCKUYEheCunfOoWkmGw9ONm0u3TQnSgVhHIIlGTWFH8kMePT36QE8WFV5iXYSH5LgwNjn-MmoFCkK1oyHVDJM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBX7YzjrCoI4gr7231yS9MTGRKNlr4TOvCmdlFkJWNmKnKivDn_UBqBDRIizNeN1wXAB_tAk9dnI9TWD33abXgwrg66DxfpTCLCFlqwwQy4vt1bGT27qk9GQIrAoH_tq-2cuE28dy6iFhA_qLm_ySAkBikfO4ziXFYuM-vJulggdY7tiFJwvtbG1AqGZTIydXpwCSCxBlVXKbvWXnChxlw2gIlwePJDNUmSBsAdcnQH9HCztK9XbAEcFy3NMrw_69jUH6ve0n_krJ8',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB5hCY9Azwhr6Ir5adUufe5FEo-5-5YfkAkAGlRZQ-jrlrIGlcHUkogtrxk2w7z4bZMjhtB1m0iUh_6jXpK7q0gw46YiqfdwfRNMHZ6IRbI43ppR_aqBVcvK5e5FWLdDo_0p-9vcDdiPRwuf3ZPv9Q5Ri16IJ_fDxRCCTI9ewMUnrVO4W64RiuHKssIVGEwFI_9ZV5iJql2VyvXEx6pHYk_jemccWzdTHZ-a1sgiMoRxVfM2Q0BP4L5_ohSRyn9GhCL6HnmsqBihWM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBi6hL-gBBgQItGKWrXvizAakOPO8wSKussTCuZnivaE0XVq_Id0j-iFL45mPHPwCMhTneLD-3r_AKhIJZxMeqIaXMwtWBG2WnsBrJsTVra4nR2VAuKz49U0K3FXgF4gMQgc_ZXGeEtpQieCLs7-X2XzOr12ZL6lgTi3it0MT5M8aane3f0zQMrSXA9KfNItjzOMvvHFj3S2Jqze6woA5Ztpoa_ndyrrTznqO-D8Irar9Rx_0N6po7nQGDSrdjR4SZ-2belIPsWdPA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC5zP77zYTKYOivOK8rTE3nyiqvf6NE4psS2OxGG_L9GISteWYqWQKEzEm3gE8h3DJueWV1P3VLfGe38q-V9Q_1N1bs2oRAjAVnMqD8EL4xgayoewadOT5JK39xRk4kU4Rn6aAyP0mS9OE6UoJN2PfA2JbPpSVVkcvALyhCMILl1wWhzyS8ZaWz2upVFiCMGlk4yExUffQ2deIuB3LP3dTqFmexfn5KviFlElM8iB_h45jY31Axyt8VWk464YkjyPw08d9R_2zZDb0',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDdZHCj3oDFrS20jL46b3jGsjoG1toSakKCbN0ILtFhMx5NPl79C3Hg6tLA2bjR205f_hRTfss1b1fNHTUBI3b0XU6LxrO1jajPVJp75F-oSawsvzBq1ILP1ZO4uG23hFwgChukE32NZbYq80SDQzPjMlRdk_wL8oQWFxbyLt_PWNlYChmQw5cEOWZRoeLEShKZrjbKOXWsLenX7OiKEJfyYrEh2Dq-sOutJDzOQg3AWXa9HDYF4286IwqaN0qC5OGfUXOogjsAQFY',
];

export const recentCreations = Array.from({ length: 6 }, (_, index) => ({
  id: `recent-${index + 1}`,
  uri: `${imgUrl[index]}`,
}));
