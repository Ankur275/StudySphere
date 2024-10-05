import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import ForgetPassword from './Pages/ForgotPassword.jsx';
import Dashboard from './components/Dashboard.jsx';
import Home from './components/Home.jsx';
import Groups from './components/Groups.jsx';
import Schedule from './components/Schedule.jsx';
import Chats from './components/Chat.jsx';
import Resources from './components/Resources.jsx';
import Settings from './components/Settings.jsx';
import Help from './components/Help.jsx';
import Rules from './components/Rules.jsx';

// Import Layout for common navbar
import Layout from './components/Layout.jsx'; // Assuming your Layout contains Navbar

// Create router with Dashboard as the default
const router = createBrowserRouter(createRoutesFromElements(
  <>
    {/* Redirect root path to Dashboard */}
    <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgetPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<Help />} />
      <Route path="/rules" element={<Rules />} />
    </Route>
  </>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>
);
