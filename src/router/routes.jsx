import { Home } from "../Home/home";
import { MainLayout } from "../layouts/main";
import { Navigate } from "react-router-dom";
import { Property } from "../property/property";
import { Login } from "../Authentication/login";
import { routesEndPoints } from "../constants";
import { Favorite } from "../favorite";
import { Buy } from "../properties/buy";
import { Rent } from "../properties/rent";
import { SellPage } from "../Sell";
import { FindAgent } from "../findAgent";
import { Blog } from "../Blog";;
import { UserLayout } from "../layouts/user";
import { Settings } from "../settings";
import { UserListings } from "../user-listings";
import { NewListing } from "../user-listings/components/new-listing/new-listing";
import { UpdateListing } from "../user-listings/components/update-listing/updateListing";
import { TourRequest } from "../user-tours/tourRequest";
import { RequestedTours } from "../user-tours/RequestedTours";
import { ReceivedOffers } from "../user-offers/offer";
import { Loader } from "@mantine/core";


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
      },
      {
        path: routesEndPoints.FIND_AGENT,
        element: <FindAgent />,
      },
      {
        path: routesEndPoints.BLOG,
        element: <Blog />,
      },
      {
        path: routesEndPoints.USER,
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: <UserListings />
          },
          {
            path: routesEndPoints.NEW,
            element: <NewListing />
          },
          {
            path: routesEndPoints.UPDATE,
            element: <UpdateListing />
          },{
            path: routesEndPoints.REQUESTED,
            element: <RequestedTours />
          },
          {
            path: routesEndPoints.REQUEST,
            element: <TourRequest />
          },
          {
            path: routesEndPoints.OFFERS,
            element: <ReceivedOffers />
          },
          {
            path: routesEndPoints.SETTINGS,
            element: <Settings />
          },
        ],
      },
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
