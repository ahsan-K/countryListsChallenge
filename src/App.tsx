import './App.css';
import React from "react";
import Routes from './routes';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { }, currentTheme:"light" });


function App() {
  const [mode, setMode] = React.useState<any>('light');
  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode: any) => (prevMode === 'light' ? 'dark' : 'light'));
    },
    currentTheme:mode
  }
;

  return (
    <div style={{background:mode === 'dark' ? "hsl(207, 26%, 17%)" : "#fff", minHeight:'100vh'}} className="App">
      <ColorModeContext.Provider value={colorMode}>
        <Routes />
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
