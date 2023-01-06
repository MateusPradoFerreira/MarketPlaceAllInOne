import { keyframes } from "@stitches/react";
import { styled } from "../../sititchesConfig";

const bounce = keyframes({
    '0%': {
        transform: 'translateX(0px)',
        timingFunction: 'ease-in',
    },
    '37%': {
        transform: 'translateX(5px)',
        timingFunction: 'ease-out',
    },
    '55%': {
        transform: 'translateX(-5px)',
        timingFunction: 'ease-in',
    },
    '73%': {
        transform: 'translateX(4px)',
        timingFunction: 'ease-out',
    },
    '82%': {
        transform: 'translateX(-4px)',
        timingFunction: 'ease-in',
    },
    '91%': {
        transform: 'translateX(2px)',
        timingFunction: 'ease-out',
    },
    '96%': {
        transform: ' translateX(-2px)',
        timingFunction: 'ease-in',
    },
    '100%': {
        transform: 'translateX(0px)',
        timingFunction: 'ease-in',
    },
  });

export const Input = styled('input', {
    width: '100%',
    border: 'none',
    background: 'transparent',
    paddingBottom: 10,
    borderBottom: '2px solid $Grey300',
    marginBottom: 15,
    fontWeight: 300,
    fontSize: 16,
    fontFamily: '$Roboto',

    '&:focus': {
        outline: 'none'
    },

    variants: {
        error: {
            true: {
                borderBottom: '2px solid $Red300',
                animation: `${bounce} 0.5s`,
            }
        }
    }
})