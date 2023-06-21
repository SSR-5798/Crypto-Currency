import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Exchanges, CryptoCurrencies, CryptoDetails, News, RootLayout } from "./components/pages";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";


const darkMode = createTheme({
  palette: {
    mode: 'dark',
  }
})

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { index:true, element:<Home/>},
      { path: "exchanges", element: <Exchanges /> },
      { path: "cryptocurrencies", element: <CryptoCurrencies /> },
      { path: "crypto/:coinId", element: <CryptoDetails /> },
      { path: "news", element: <News /> },
    ],
  },
]);

const App = () => (
  <ThemeProvider theme={darkMode}>
    <CssBaseline/>
    <RouterProvider router={router} />
  </ThemeProvider>
);

export default App;
