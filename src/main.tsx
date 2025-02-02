import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './app'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ThemeProvider>
  </StrictMode>,
)
