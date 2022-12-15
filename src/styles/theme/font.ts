/** line height가 없을 때엔 undefined px이 뜸 */
const fontToCss = (sz: number, wt: number, lh?: number) =>
  `
  font-weight: ${wt};
  line-height: ${lh}px;
  font-size: ${sz}px;
`;

export const font = {
  headlineL: fontToCss(36, 500, 50),
  headlineM: fontToCss(30, 500, 42),
  headlineS: fontToCss(24, 500, 34),
  titleL: fontToCss(22, 700, 34),
  titleM: fontToCss(20, 700, 32),
  titleS: fontToCss(18, 700, 28),
  bodyL: fontToCss(18, 400, 28),
  bodyM: fontToCss(16, 400, 26),
  bodyS: fontToCss(14, 400, 22),
  captionM: fontToCss(12, 400),
  overlineM: fontToCss(10, 700),
  BtnM: fontToCss(14, 700),
} as const;

export type fontKeyOfType = keyof typeof font;
