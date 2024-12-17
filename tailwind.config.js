/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx,ts,jsx}"],  // Make sure the paths are correct
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla-Regular"],         
        "karla-bold": ["Karla-Bold"],     
        "karla-medium": ["Karla-Medium"], 
        "karla-semibold": ["Karla-SemiBold"], 
      },
    },
  },
  plugins: [],
};
