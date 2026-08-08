import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-fixed-dim': '#ffb786',
        outline: '#8b7263',
        'on-background': '#1b1c1c',
        'tertiary-container': '#9c9d9d',
        'on-secondary-fixed-variant': '#474646',
        'surface-container-low': '#f5f3f3',
        'inverse-primary': '#ffb786',
        'on-surface': '#1b1c1c',
        'surface-bright': '#fbf9f9',
        'on-primary-fixed': '#311300',
        'secondary-fixed-dim': '#c8c6c5',
        'surface-container-lowest': '#ffffff',
        'on-error-container': '#93000a',
        'on-secondary-fixed': '#1c1b1b',
        'on-secondary': '#ffffff',
        error: '#ba1a1a',
        'outline-variant': '#dec1af',
        'surface-dim': '#dbdad9',
        'secondary-container': '#e5e2e1',
        'surface-tint': '#964900',
        'surface-variant': '#e3e2e2',
        'surface-container-highest': '#e3e2e2',
        'tertiary-fixed-dim': '#c6c6c7',
        'on-secondary-container': '#656464',
        'surface-container-high': '#e9e8e7',
        'tertiary-fixed': '#e2e2e2',
        'on-surface-variant': '#574235',
        secondary: '#5f5e5e',
        'on-tertiary-fixed': '#1a1c1c',
        primary: '#964900',
        'on-tertiary-container': '#333535',
        'inverse-on-surface': '#f2f0f0',
        'on-tertiary': '#ffffff',
        'inverse-surface': '#303031',
        tertiary: '#5d5f5f',
        'on-error': '#ffffff',
        'on-primary': '#ffffff',
        'error-container': '#ffdad6',
        'on-tertiary-fixed-variant': '#454747',
        'on-primary-fixed-variant': '#723600',
        background: '#fbf9f9',
        'primary-container': '#f57c00',
        surface: '#fbf9f9',
        'primary-fixed': '#ffdcc6',
        'on-primary-container': '#572800',
        'secondary-fixed': '#e5e2e1',
        'surface-container': '#efeded'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        gutter: '24px',
        xs: '4px',
        'margin-desktop': '64px',
        md: '24px',
        xl: '80px',
        sm: '12px',
        base: '8px',
        lg: '48px',
        'margin-mobile': '16px'
      },
      fontFamily: {
        'label-lg': ['Outfit'],
        'body-md': ['Outfit'],
        'headline-md': ['Outfit'],
        'headline-lg-mobile': ['Outfit'],
        'label-md': ['Outfit'],
        'headline-xl': ['Outfit'],
        'display-lg': ['Outfit'],
        'body-lg': ['Outfit'],
        'headline-lg': ['Outfit']
      },
      fontSize: {
        'label-lg': ['14px', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-lg-mobile': ['28px', { lineHeight: '1.25', fontWeight: '600' }],
        'label-md': ['12px', { lineHeight: '1.4', fontWeight: '500' }],
        'headline-xl': ['48px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'headline-lg': ['32px', { lineHeight: '1.25', fontWeight: '600' }]
      }
    }
  },
  plugins: [forms, containerQueries]
};
