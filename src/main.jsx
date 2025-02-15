import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './components/CSS FOLDER/index.css';
import App from './App';
import RegisterApp from './components/Pages/RegisterPage';
import Login from './components/Pages/LoginPage';
import HomePage from './components/Pages/Homepage';
import LibraryPage from './components/Pages/LibraryPage';
import GameHome from './components/Pages/GameHome';
import Profedit from './components/Pages/ProfileEdit';
import ContactPage from './components/Pages/Contacts';
import CourierPage from './components/Pages/CourierHome';
import SettingsP from './components/Pages/Settings';
import AboutUs from './components/Pages/AboutPage';
import { AuthProvider } from './components/Login/Context/AuthoProv';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterApp/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "home",
    element: <HomePage/>,
  },
  {
    path: "lib",
    element: <LibraryPage/>,
  },
  {
    path: "gamesh",
    element: <GameHome/>,
  },
  {
    path: "profedit",
    element: <Profedit/>,
  },
  {
    path: "contactpage",
    element: <ContactPage/>,
  },
  {
    path: "courierp",
    element: <CourierPage/>,
  },
  {
    path: "settingsp",
    element: <SettingsP/>,
  },
  {
    path: "aboutus",
    element: <AboutUs/>,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);



