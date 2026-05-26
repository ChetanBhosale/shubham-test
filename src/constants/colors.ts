export const colors = {
  sage: {
    DEFAULT: "#B9CDBE",
    light: "#d4e3d8",
    dark: "#8fa896",
  },
  lavender: {
    DEFAULT: "#756187",
    light: "#9b8aab",
    dark: "#5a4a68",
  },
  mint: {
    DEFAULT: "#57A999",
    light: "#7ec4b7",
    dark: "#3d8a7c",
  },
  orange: {
    DEFAULT: "#F69A4A",
    light: "#f8b574",
    dark: "#e07d2a",
  },
  ocean: {
    DEFAULT: "#003F54",
    light: "#1a6680",
    dark: "#002a38",
  },
  surface: {
    DEFAULT: "#ECECEC",
    light: "#F8F8F8",
    dark: "#DEDEDE",
  },
} as const;

export const gradients = {
  calm: "linear-gradient(135deg, #B9CDBE 0%, #57A999 100%)",
  emotional: "linear-gradient(135deg, #756187 0%, #003F54 100%)",
  warmth: "linear-gradient(135deg, #F69A4A 0%, #756187 100%)",
  ocean: "linear-gradient(135deg, #003F54 0%, #57A999 100%)",
  sunrise: "linear-gradient(135deg, #F69A4A 0%, #B9CDBE 100%)",
  ambient: "linear-gradient(180deg, #F8F8F8 0%, #B9CDBE 50%, #57A999 100%)",
} as const;
