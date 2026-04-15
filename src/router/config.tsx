import { RouteObject } from "react-router-dom";
import HomePage from "@/pages/home/page";
import CustomisedPackagesPage from "@/pages/customised-packages/page";
import GlobalToursPage from "@/pages/global-tours/page";
import HotelBookingsPage from "@/pages/hotel-bookings/page";
import FlightDealsPage from "@/pages/flight-deals/page";
import GroupToursPage from "@/pages/group-tours/page";
import VisaAssistancePage from "@/pages/visa-assistance/page";
import SupportServicePage from "@/pages/support-service/page";
import TravelInsurancePage from "@/pages/travel-insurance/page";
import AboutUsPage from "@/pages/about-us/page";
import TomorrowlandPage from "@/pages/tomorrowland/page";
import FullMoonFestivalPage from "@/pages/full-moon-festival/page";
import NotFound from "@/pages/NotFound";

const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/customised-packages", element: <CustomisedPackagesPage /> },
  { path: "/global-tours", element: <GlobalToursPage /> },
  { path: "/hotel-bookings", element: <HotelBookingsPage /> },
  { path: "/flight-deals", element: <FlightDealsPage /> },
  { path: "/group-tours", element: <GroupToursPage /> },
  { path: "/visa-assistance", element: <VisaAssistancePage /> },
  { path: "/support-service", element: <SupportServicePage /> },
  { path: "/travel-insurance", element: <TravelInsurancePage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/tomorrowland-packages", element: <TomorrowlandPage /> },
  { path: "/full-moon-festival-thailand-2026", element: <FullMoonFestivalPage /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
