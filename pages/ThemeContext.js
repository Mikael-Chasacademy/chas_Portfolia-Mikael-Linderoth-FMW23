import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = {
  theme: "light",
  userPreferences: {
    fontSize: "medium",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  // your code here
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: action.theme,
      };
    case "SET_FONT_SIZE":
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          fontSize: action.payload,
        },
      };
    case "TOGGLE_REDUCED_MOTION":
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          reduceAnimations: !state.userPreferences.reduceAnimations,
        },
      };
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  // your code here
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create and use your own hook instead of using useContext in the components
export const useTheme = () => useContext(ThemeContext);
