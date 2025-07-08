import type { Config } from 'tailwindcss';

/**
 * Tailwind CSS Configuration
 * -------------------------
 * Here you can adjust your global design-tokens – in particular
 * font-sizes and font-weights – without touching component code.
 *
 * Usage example in a component:
 *   <h1 className="text-heading font-bold">Hello</h1>
 *
 * Any class name defined below becomes available as `text-{key}` or `font-{key}`.
 */
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Custom font sizes (rem based)
      fontSize: {
        xs: '0.75rem',   // 12px
        sm: '0.875rem',  // 14px
        base: '1rem',    // 16px
        lg: '1.125rem',  // 18px
        xl: '1.25rem',   // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        heading: '0.175rem',   // 48px custom
      },

      // Custom font weights
      fontWeight: {
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },

      // Example font family override, in case you switch fonts later
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config; 