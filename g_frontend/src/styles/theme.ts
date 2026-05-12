import { createTheme } from '@mui/material/styles';

// Modern Design Tokens
export const designTokens = {
  colors: {
    // Primary gradient
    primary: '#f97316',
    primaryLight: '#fb923c',
    primaryDark: '#ea580c',
    
    // Secondary gradient
    secondary: '#06b6d4',
    secondaryLight: '#22d3ee',
    secondaryDark: '#0891b2',
    
    // Neutrals
    dark: '#0f172a',
    darkSecondary: '#1e293b',
    darkTertiary: '#334155',
    
    white: '#ffffff',
    textLight: '#f1f5f9',
    textMuted: '#cbd5e1',
    
    // Functional
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  
  borderRadius: {
    sm: '6px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },
};

// Create Material-UI Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: designTokens.colors.primary,
      light: designTokens.colors.primaryLight,
      dark: designTokens.colors.primaryDark,
    },
    secondary: {
      main: designTokens.colors.secondary,
      light: designTokens.colors.secondaryLight,
      dark: designTokens.colors.secondaryDark,
    },
    background: {
      default: designTokens.colors.dark,
      paper: designTokens.colors.darkSecondary,
    },
    text: {
      primary: designTokens.colors.textLight,
      secondary: designTokens.colors.textMuted,
    },
    success: {
      main: designTokens.colors.success,
    },
    warning: {
      main: designTokens.colors.warning,
    },
    error: {
      main: designTokens.colors.error,
    },
    info: {
      main: designTokens.colors.info,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.875rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 700,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.875rem',
      fontWeight: 700,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
      '@media (max-width:600px)': {
        fontSize: '1.125rem',
      },
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.5px',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          transition: `all ${designTokens.transitions.normal}`,
          '&:focus-visible': {
            outline: `2px solid ${designTokens.colors.primary}`,
            outlineOffset: '2px',
          },
        },
        contained: {
          boxShadow: designTokens.shadows.md,
          '&:hover': {
            boxShadow: designTokens.shadows.lg,
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          border: `2px solid currentColor`,
          '&:hover': {
            backgroundColor: 'rgba(249, 115, 22, 0.08)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.borderRadius.lg,
          backgroundColor: designTokens.colors.darkSecondary,
          border: `1px solid rgba(255, 255, 255, 0.08)`,
          transition: `all ${designTokens.transitions.normal}`,
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 20px 25px -5px rgba(249, 115, 22, 0.15)`,
            borderColor: `rgba(249, 115, 22, 0.3)`,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: designTokens.colors.darkSecondary,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.borderRadius.md,
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
