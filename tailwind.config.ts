/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        customPulse: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "custom-pulse": "customPulse 1s steps(1) infinite",
      },
      colors: {
        first: "#8d9aa0",
        second: "#f2f8fc",
        third: "#f2f8fcad",
        fourth: "#d9a78b",
        fifth: "#0d0d0d",

        mainty: "#21324A",
        mfotsy: "#F2F8FC",

        matotra: "#465973",
        mgruis: "#2C3540",
        maitso: "#2CBF6C",
        mena: "#ED4C57",
        mavo: "#F2A03D",
        manga: "#0487D9",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

// generated function
function flattenColorPalette(colors: any) {
  const flattenedColors: any = {};

  function flatten(prefix: string, colorObj: any) {
    for (const key in colorObj) {
      const value = colorObj[key];
      const newKey = prefix ? `${prefix}-${key}` : key;

      if (typeof value === "object") {
        flatten(newKey, value);
      } else {
        flattenedColors[newKey] = value;
      }
    }
  }

  flatten("", colors);

  return flattenedColors;
}
