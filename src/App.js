import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import './App.css'
import theme from './Config/Mui';
import { ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
       <RouterProvider router={router} />
       </ThemeProvider>
    </div>
  );
}

export default App;
