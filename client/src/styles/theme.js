import { createBreakpoints } from '@chakra-ui/theme-tools'

export const theme = {
  colors: {
    currIncrease: '#32CD32',
    currNoChange: '#888888',
    currDecrease: '#b00726'
  }
}

// Update the breakpoints as key-value pairs
export const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '1024px',
  xl: '1200px'
})
