import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import WhatsAppFloat from './Components/Common/WhatsAppFloat.jsx';
import "slick-carousel/slick/slick.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/main.css';

// Initialize AOS
AOS.init({
  duration: 800,
  offset: 100,
  once: true,
  easing: 'ease-in-out',
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <WhatsAppFloat />
  </StrictMode>,
)
