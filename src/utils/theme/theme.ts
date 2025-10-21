export const theme = {
  color: {
    base: {
      white: '#ffffff',
      black: '#000000',
      grey: '#464963',
      lightGrey: '#f5f5f5',
    },
    text: {
      primary: '#262b4f',
      secondary: '#464963',
    },
    primary: {
      yellow: '#f8d94f',
      purple: '#6871ee',
    },
    status: {
      red: '',
      yellow: '',
      green: '',
    },
    bg: {
      lightGrey: '#F8FAFF',
    },
  },
  spacing: (space: number) => {
    const baseSpacing = 8;
    return baseSpacing * space;
  },
};
