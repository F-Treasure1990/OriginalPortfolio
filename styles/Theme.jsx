export const palette = {
  palette: {
    main: "#44475a",
    secondary: "#282A36",
    accent: "#BD93F9",
    textFocused: "#F8F8F2",
    text: "#f8f8f299",
    highlight: "#FF79C6"
  },
  mediaQ: {
    down,
    up,
    customDown: breakpoint => `@media screen and (max-width: ${breakpoint - 1}px)`,
    customUp: breakpoint => `@media screen and (min-width: ${breakpoint}px)`
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    test: 700,
    test2: 800,
    lg: 1200,
    xl: 1536
  },
  typography: {
    body2: {
      fontSize: 14,
      fontWeight: 400
    },
    button: {
      fontSize: 14,
      fontWeight: 600
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400
    }
  }
};

function down(breakpoint) {
  return `@media screen and (max-width: ${palette?.breakpoints?.[breakpoint] - 1}px)`;
}
function up(breakpoint) {
  return `@media screen and (min-width: ${palette?.breakpoints?.[breakpoint]}px)`;
}

// `@media screen and (max-width: ${ breakpoint - 1 }px)`
