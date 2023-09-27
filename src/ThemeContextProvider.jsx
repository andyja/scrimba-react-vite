import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = React.createContext();

export default function ThemeContextProvider(props) {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes={
    children:PropTypes.node
}