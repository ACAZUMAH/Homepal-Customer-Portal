import { Home } from "../Home/home";
import { MainLayout } from "../layouts/main";
import { Navigate } from "react-router-dom";
import { Property } from "../property/property";
import { Login } from "../Authentication/login";
import { RequestTour } from "../tour";
import { MakeOffer } from "../offer/offer";
import { routesEndPoints } from "../constants";
import { Favorite } from "../favorite";
import { Buy } from "../properties/buy";
import { Rent } from "../properties/rent";
import { SellPage } from "../Sell";
import { FindAgent } from "../findAgent";
import { Blog } from "../Blog";

export const routes = [
  {
    path: routesEndPoints.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routesEndPoints.FAVORITE,
        element: <Favorite />,
      },
      {
        path: routesEndPoints.BUY,
        element: <Buy />,
      },
      {
        path: routesEndPoints.RENT,
        element: <Rent />,
      },
      {
        path: routesEndPoints.PROPERTY,
        element: <Property />,
        children: [
          {
            path: routesEndPoints.PROPERTY_TOUR,
            element: <RequestTour />,
          },
          {
            path: routesEndPoints.PROPERTY_OFFER,
            element: <MakeOffer />,
          },
        ],
      },
      {
        path: routesEndPoints.SELL,
        element: <SellPage />
      },
      {
        path: routesEndPoints.FIND_AGENT,
        element: <FindAgent />
      },
      {
        path: routesEndPoints.BLOG,
        element: <Blog />
      }
    ],
  },
  {
    path: routesEndPoints.LOGIN,
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={routesEndPoints.HOME} />,
  },
];
