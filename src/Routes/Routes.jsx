import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout2 from "../Layout/Layout2";
import Layout6 from "../Layout/Layout6";
import Home2 from "../Pages/Home2";
import AboutDark from "../Pages/AboutDark";
import ServicePageDark from "../Pages/ServicePageDark";
import ServiceDetailsCenterDark from "../Pages/ServiceDetailsCenterDark";
import ContactPage from "../Pages/ContactPage";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsConditions from "../Pages/TermsConditions";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout2></Layout2>,
      children: [
        {
          index: true,
          element: <Home2></Home2>,
        }
      ]
    },
    {
      element: <Layout6></Layout6>,
      children: [
        {
            path: "about",
            element:<AboutDark></AboutDark> ,
        }, 
        {
          path: "service",
          element:<ServicePageDark></ServicePageDark> ,
        }, 
        {
          path: "service/service-details",
          element:<ServiceDetailsCenterDark></ServiceDetailsCenterDark> ,
        },                                  
        {
          path: "contact",
          element:<ContactPage></ContactPage> ,
        },
        {
          path: "privacy-policy",
          element:<PrivacyPolicy></PrivacyPolicy> ,
        },
        {
          path: "terms-conditions",
          element:<TermsConditions></TermsConditions> ,
        }                                                                                 
      ],
    }
  ]);