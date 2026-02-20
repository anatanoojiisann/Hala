import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        panel: '#0b1018',
        line: '#1d2530',
        accent: '#8b5cf6',
      },
    },
  },
  plugins: [],
}

export default config
