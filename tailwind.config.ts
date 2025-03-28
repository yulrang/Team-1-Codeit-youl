import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // 컴포넌트 경로
    './.storybook/**/*.{js,jsx,ts,tsx}', // Storybook 설정 경로
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '360px',
        // => @media (min-width: 360px) { ... }

        md: '744px',
        // => @media (min-width: 744px) { ... }

        lg: '1200px',
        // => @media (min-width: 1200px) { ... }
      },
      maxWidth: {
        pc: '1200px',
        7.5: '30px',
        12.5: '50px',
        27.5: '110px',
      },
      minWidth: {
        ic: 'calc(11.11111% - 7.1111px)',
        7.5: '30px',
        12.5: '50px',
        21.5: '86px',
        26: '104px',
        27.5: '110px',
      },
      width: {
        7.5: '30px',
        12.5: '56px',
        18: '72px',
        27.5: '110px',
        29.5: '118px',
        30: '120px',
      },
      height: {
        header: '50px',
        7.5: '30px',
        12.5: '50px',
        13: '52px',
        27.5: '110px',
        30: '120px',
      },
      padding: {
        7.5: '30px',
        11.5: '46px',
        12.5: '50px',
        18: '72px',
      },
      margin: {
        7.5: '30px',
        12.5: '50px',
        18: '72px',
      },
      flexBasis: {
        67: '268px',
      },
      gap: {
        6.5: '26px',
        7.5: '30px',
        12.5: '50px',
      },
      translate: {
        17: '68px',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)', 'sans-serif'],
      },
      fontSize: {
        '4xl': ['2.5rem', { lineHeight: '3.25rem' }],
        '3.5xl': ['2rem', { lineHeight: '2.75rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
        404: ['26.8vh', { lineHeight: '26.8vh' }],
        '404-back': ['87.5vh', { lineHeight: '87.5vh' }],
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        normal: '400',
        light: '300',
      },
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3388FF',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
      },
      boxShadow: {
        xl: '0 4px 4px 0 rgba(0,0,0,0.25)',
        bg: '0 4px 30px 1px rgba(0,122,255,0.04)',
        card: '0 4px 15px 1px rgba(0,122,255,0.1)',
        xs: '0px 2px 4px 0px rgba(0, 0, 0, 0.02)',
      },
      keyframes: {
        show: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wave: {
          '0%': { transform: 'translate(-90px)' },
          '100%': { transform: 'translate(85px)' },
        },
      },
      animation: {
        fade: 'show 0.5s ease-in',
        wave: 'wave 10s ease infinite',
      },
    },
  },
  plugins: [
    plugin(
      ({
        addComponents,
      }: {
        addComponents: (components: CSSRuleObject | CSSRuleObject[]) => void;
      }) => {
        addComponents({
          // 커스텀 클래스
          '.scrollbar-hide': {
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
          },
          '.snap-align-start': {
            'scroll-snap-align': 'start',
          },
          '.sort-bg': {
            'background-image': "url('../../public/assets/icons/ic-sort.svg')",
            'background-repeat': 'no-repeat',
            'background-position': '12px center',
            'background-size': '24px 24px',
          },
          '.sort-bg-on': {
            'background-image': "url('../../public/assets/icons/ic-sort-on.svg')",
            'background-repeat': 'no-repeat',
            'background-position': '12px center',
            'background-size': '24px 24px',
          },
          // button style
          '.btn-filled': {
            backgroundColor: '#3B82F6',
            color: '#ffffff',
            transition: 'background-color 0.3s ease',
            '&:hover, &:active': {
              backgroundColor: '#2563EB',
            },
            '&:disabled': {
              backgroundColor: '#6B7280',
              opacity: '0.8',
            },
          },
          '.btn-outlined': {
            border: '1px solid #3B82F6',
            backgroundColor: '#ffffff',
            color: '#3B82F6',
            transition: 'color 0.3s ease border-color 0.3s ease',
            '&:hover, &:active': {
              border: '1px solid #2563EB',
              color: '#2563EB',
            },
            '&:disabled': {
              backgroundColor: '#6B7280',
              color: '#ffffff',
              opacity: '0.8',
            },
          },
          '.btn-disabled': {
            backgroundColor: '#6B7280',
            color: '#ffffff',
            cursor: 'not-allowed',
            opacity: '0.8',
            '&:disabled': {
              backgroundColor: '#6B7280',
              opacity: '0.8',
            },
          },
        });
      },
    ),
  ],
};
export default config;
