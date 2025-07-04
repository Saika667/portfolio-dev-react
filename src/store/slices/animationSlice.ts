import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AnimationState {
  heroAnimationComplete: boolean;
  navVisible: boolean;
  currentSection: string;
  isAnimating: boolean;
}

const initialState: AnimationState = {
  heroAnimationComplete: false,
  navVisible: false,
  currentSection: 'hero',
  isAnimating: false,
};

const animationSlice = createSlice({
  name: 'animation',
  initialState,
  reducers: {
    setHeroAnimationComplete: (state, action: PayloadAction<boolean>) => {
      state.heroAnimationComplete = action.payload;
    },
    setNavVisible: (state, action: PayloadAction<boolean>) => {
      state.navVisible = action.payload;
    },
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload;
    },
    setIsAnimating: (state, action: PayloadAction<boolean>) => {
      state.isAnimating = action.payload;
    },
    resetAnimationState: (state) => {
      state.heroAnimationComplete = false;
      state.navVisible = false;
      state.currentSection = 'hero';
      state.isAnimating = false;
    },
  },
});

export const {
  setHeroAnimationComplete,
  setNavVisible,
  setCurrentSection,
  setIsAnimating,
  resetAnimationState,
} = animationSlice.actions;

export default animationSlice.reducer; 