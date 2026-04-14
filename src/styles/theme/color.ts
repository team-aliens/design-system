export const color = {
  primary: '#3d8aff',
  primaryDarken1: '#1070ff',
  primaryDarken2: '#005de8',
  primaryLighten1: '#b1d0ff',
  primaryLighten2: '#f5f9ff',
  gray1: '#ffffff',
  gray2: '#f9f9f9',
  gray3: '#eeeeee',
  gray4: '#dddddd',
  gray5: '#999999',
  gray6: '#555555',
  gray7: '#343434',
  gray8: '#202020',
  gray9: '#121212',
  gray10: '#000000',
  errorLighten1: '#ffd3d3',
  errorLighten2: '#fff0f0',
  error: '#ff4646',
  errorDarken1: '#c23535',
  errorDarken2: '#852424',
  system: {
    bg: "#F2F4F6",
    button: "#B0B6C1",
    container: "#FFFFFF",
    hover: "#8D929A",
    pressed: "#71757B"
  },
  gray: {
    50: "#FFFFFF",
    100: "#F9F9F9",
    200: "#EEEEEE",
    300: "#DDDDDD",
    400: "#999999",
    500: "#555555",
    600: "#343434",
    700: "#202020",
    800: "#121212",
    900: "#101010"
  },
  blue: {
    50: "#E7F0FF",
    100: "#B1D0FE",
    200: "#65A2FE",
    300: "#0F6EFE",
    400: "#0C58CB",
    500: "#052453",
  },
  red: {
    50: "#FFE7E7",
    100: "#FEB1B1",
    200: "#FE6565",
    300: "#FE0F0F",
    400: "#CB0C0C",
    500: "#530505",
  },
  etc: {
    Button: "#FFFFFF",
    disButton: "#B1D0FE"
  }
} as const;

export const {
  primaryLighten1,
  primaryLighten2,
  primary,
  primaryDarken1,
  primaryDarken2,
  gray1,
  gray2,
  gray3,
  gray4,
  gray5,
  gray6,
  gray8,
  errorDarken1,
  errorDarken2,
  error,
  errorLighten1,
  errorLighten2,
  system,
  gray,
  blue,
  red,
  etc
} = color;

export type colorKeyOfType = keyof typeof color;
