const tintColorLight = "#0a7ea4";
const tintColorDark = "#ffffff";

export const convertHexToRGBA = (hex: string, alpha: number = 1): string => {
  // check hex value starts with hash and is either 6 or 8 characters long
  if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(hex)) {
    throw new Error(
      `Invalid hex color format. Got ${hex}, expected: #RRGGBB or #RRGGBBAA`
    );
  }

  // remove hash
  const hexWithoutHash = hex.slice(1);

  // extract RGB values
  const r = parseInt(hexWithoutHash.slice(0, 2), 16);
  const g = parseInt(hexWithoutHash.slice(2, 4), 16);
  const b = parseInt(hexWithoutHash.slice(4, 6), 16);

  // ensure alpha is between 0 and 1
  if (alpha < 0 || alpha > 1) {
    throw new Error("Alpha value must be between 0 and 1");
  }

  return `rgba(${r},${g},${b},${alpha})`;
};

export const Colors = {
  light: {
    text: "#11181C",
    background: "#ffffff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
