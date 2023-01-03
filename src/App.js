import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import './App.css'
import theme from './Config/Mui';
import { ThemeProvider } from '@mui/material';
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
