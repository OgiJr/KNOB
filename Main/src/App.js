import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Css Here
import "./assets/scss/style.scss";
import "./assets/scss/elements/accents.scss";
import "./assets/scss/elements/bar.scss";
import "./assets/scss/elements/normative.scss";
import "./assets/scss/elements/rev.scss";
import "./assets/scss/table.scss";

// Pages import Here
import HomeDefault from "./pages/index";
import ValuationStandards from "./pages/ValuationStandards";
import Burgas from "./pages/Burgas";
import Varna from "./pages/Varna";
import Pleven from "./pages/Pleven";
import Plovdiv from "./pages/Plovdiv";
import Ruse from "./pages/Ruse";
import Sofia from "./pages/Sofia";
import StaraZagora from "./pages/StaraZagora";
import Shumen from "./pages/Shumen";
import AboutUs from "./pages/AboutUs";
import Rev from "./pages/Rev";
import HelpfulLinks from "./elements/helpful/HelpfulLinks";
import PublicRegistry from "./pages/PublicRegistry";
import Contact from "./elements/contact/Contact";
import BlogNews from "./components/blog/BlogNews";
import BlogDetails from "./pages/BlogDetails";
import ControlBoard from "./pages/ControlBoard";
import Directors from "./pages/Directors";
import Ethics from "./pages/Ethics";
import Normative from "./pages/Normative";
import MemberTable from "./components/table/memberTable";
import Banks from "./pages/Banks";
import Documents from "./pages/Documents";
import Login from "./pages/Dashboard/Login";
import DashboardNews from "./pages/Dashboard/DashboardNews";
import DashboardNormative from "./pages/Dashboard/DashboardNormative";
import DashboardMembers from "./pages/Dashboard/DashboardMembers";
import DashboardRev from "./pages/Dashboard/DashboardRev";
import BlogArchive from "./components/blog/BlogArchive";
import DashboardRegistry from "./pages/Dashboard/DashboardRegistry";
import DashboardCompanies from "./pages/Dashboard/DashboardCompanies";
import BlogSeminars from "./components/blog/BlogSeminars";
import Custom404 from "./pages/404";
import BlogDetailsEu from "./pages/BlogDetailsEU";

import BlogCourses from "./components/blog/BlogCourses";
import BlogQualifications from "./components/blog/BlogQualification";
import QualificationCommittee from "./pages/QualificationCommittee";
import ValuationStandardsEu from "./pages/ValuationStandardsEu";
import RevRegistry from "./pages/RevRegistry";
import Literature from "./components/blog/Literature";
import Publication from "./components/blog/Publications";
import Us from "./pages/Us";
import Ks from "./pages/Ks";
import Kpe from "./pages/Kpe";
import Os from "./pages/Os";
import DashboardSeminars from "./pages/Dashboard/DashboardSeminars";
import DashboardCourses from "./pages/Dashboard/DashboardCourses";
import DashboardQualifications from "./pages/Dashboard/DashboardQualifications";
import DashboardInternational from "./pages/Dashboard/DashboardInternational";
import DashboardMethodology from "./pages/Dashboard/DashboardMethodology";
import DashboardUs from "./pages/Dashboard/DashboardUs";
import DashboardKs from "./pages/Dashboard/DashboardKs";
import DashboardKpe from "./pages/Dashboard/DashboardKpe";
import DashboardRc from "./pages/Dashboard/DashboardRc";
import DashboardStandards from "./pages/Dashboard/DashboardStandards";
import DashboardResources from "./pages/Dashboard/DashboardPublications";
import DashboardLiterature from "./pages/Dashboard/DashboardLiterature";
import DashboardPublicationsUs from "./pages/Dashboard/DashboardPublicationsUs";
import DashboardPublicationsKs from "./pages/Dashboard/DashboardPublicationsKs";
import DashboardPublicationsKpe from "./pages/Dashboard/DashboardPublicationsKpe";
import DashboardPublicationsOs from "./pages/Dashboard/DashboardPublicationsOs";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthLayout } from "./components/AuthLayout";

require("dotenv").config();

const public_routes = [
  { path: "/login", element: <Login /> },
  { path: "/", element: <HomeDefault /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/blog-news", element: <BlogNews /> },
  { path: "/seminars", element: <BlogSeminars /> },
  { path: "/courses", element: <BlogCourses /> },
  { path: "/blog-archive", element: <BlogArchive /> },
  { path: "/blog-details", element: <BlogDetails /> },
  { path: "/blog-european", element: <BlogDetailsEu /> },
  { path: "/board-of-directors", element: <Directors /> },
  { path: "/ethics", element: <Ethics /> },
  { path: "/control-board", element: <ControlBoard /> },
  { path: "/burgas", element: <Burgas /> },
  { path: "/varna", element: <Varna /> },
  { path: "/pleven", element: <Pleven /> },
  { path: "/plovdiv", element: <Plovdiv /> },
  { path: "/ruse", element: <Ruse /> },
  { path: "/sofia", element: <Sofia /> },
  { path: "/stara-zagora", element: <StaraZagora /> },
  { path: "/shumen", element: <Shumen /> },
  { path: "/normative", element: <Normative /> },
  { path: "/valuation-standards", element: <ValuationStandards /> },
  { path: "/rev", element: <Rev /> },
  { path: "/helpful-links", element: <HelpfulLinks /> },
  { path: "/contact", element: <Contact /> },
  { path: "/member-table", element: <MemberTable /> },
  { path: "/public-registry", element: <PublicRegistry /> },
  { path: "/banks", element: <Banks /> },
  { path: "/documents", element: <Documents /> },
  { path: "/qualifications", element: <BlogQualifications /> },
  { path: "/qualification-committee", element: <QualificationCommittee /> },
  { path: "/valuation-standards-eu", element: <ValuationStandardsEu /> },
  { path: "/rev-registry", element: <RevRegistry /> },
  { path: "/literature", element: <Literature /> },
  { path: "/publications", element: <Publication /> },
];

const guest_routes = [
  {
    path: "/us",
    element: (
      <ProtectedRoute>
        <Us />
      </ProtectedRoute>
    ),
  },
  {
    path: "/ks",
    element: (
      <ProtectedRoute>
        <Ks />
      </ProtectedRoute>
    ),
  },
  {
    path: "/kpe",
    element: (
      <ProtectedRoute>
        <Kpe />
      </ProtectedRoute>
    ),
  },
  {
    path: "/os",
    element: (
      <ProtectedRoute>
        <Os />
      </ProtectedRoute>
    ),
  },
];

const curator_routes = [
  {
    path: "/dashboard-admin",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardNews />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-international",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardInternational />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-publications",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardResources />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-us",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardPublicationsUs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-ks",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardPublicationsKs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-kpe",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardPublicationsKpe />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-os",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardPublicationsOs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-literature",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardLiterature />
      </ProtectedRoute>
    ),
  },
  {
    path: "/members-methodology",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardMethodology />
      </ProtectedRoute>
    ),
  },
  {
    path: "/members-us",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardUs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/members-ks",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardKs />
      </ProtectedRoute>
    ),
  },
  {
    path: "/members-kpe",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardKpe />
      </ProtectedRoute>
    ),
  },
  {
    path: "/members-rc",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardRc />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-standards",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardStandards />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-seminars",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardSeminars />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-qualifications",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardQualifications />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-courses",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardCourses />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-normative",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardNormative />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-members",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardMembers />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-rev",
    element: (
      <ProtectedRoute type="Curator">
        <DashboardRev />
      </ProtectedRoute>
    ),
  },
];

const admin_routes = [
  {
    path: "/dashboard-registry",
    element: (
      <ProtectedRoute type="Admin">
        <DashboardRegistry />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard-companies",
    element: (
      <ProtectedRoute type="Admin">
        <DashboardCompanies />
      </ProtectedRoute>
    ),
  },
];

const all_routes = [
  ...public_routes,
  ...curator_routes,
  ...admin_routes,
  ...guest_routes,
  { path: "*", element: <Custom404 /> },
];

const App = () => {
  // React.useState(() => {
  //   if (auth_state.token) {
  //     fetch(`${process.env.REACT_APP_API_URL}/api/is-user-logged-in`, {
  //       headers: {
  //         Authorization: `Bearer ${auth_state.token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         console.log(res);
  //         if (!res.result) {
  //           AuthStore.update((s) => {
  //             s.is_logged_in = false;
  //             s.user_type = null;
  //             s.token = null;
  //           });
  //         } else {
  //           AuthStore.update((s) => {
  //             s.is_logged_in = true;
  //           });
  //         }
  //       })
  //       .catch(() => {
  //         AuthStore.update((s) => {
  //           s.is_logged_in = false;
  //           s.user_type = null;
  //           s.token = null;
  //         });
  //       });
  //     fetch(`${process.env.REACT_APP_API_URL}/api/get-user-type`, {
  //       headers: {
  //         Authorization: `Bearer ${auth_state.token}`,
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((res) => {
  //         if (!res.result) {
  //           AuthStore.update((s) => {
  //             s.is_logged_in = false;
  //             s.user_type = null;
  //             s.token = null;
  //           });
  //         } else {
  //           AuthStore.update((s) => {
  //             s.user_type = res.resultß;
  //           });
  //         }
  //       })
  //       .catch(() => {
  //         AuthStore.update((s) => {
  //           s.is_logged_in = false;
  //           s.user_type = null;
  //           s.token = null;
  //         });
  //       });
  //   } else {
  //     AuthStore.update((s) => {
  //       s.is_logged_in = false;
  //       s.user_type = null;
  //       s.token = null;
  //     });
  //   }
  // });

  // React.useState(() => {
  //   set_current_routes(public_routes);

  //   if (auth_state.is_logged_in) {
  //     set_current_routes(current_routes.concat(guest_routes));
  //   }

  //   if (auth_state.user_type === "Curator") {
  //     set_current_routes(current_routes.concat(curator_routes));
  //   }

  //   if (auth_state.user_type === "Admin") {
  //     set_current_routes(current_routes.concat(curator_routes));
  //     set_current_routes(current_routes.concat(admin_routes));
  //   }
  // }, [auth_state, set_current_routes, current_routes]);

  // console.log(current_routes);

  const router = createBrowserRouter([{ element: <AuthLayout />, children: all_routes }]);

  return <RouterProvider router={router} />;
};

export default App;
document.querySelector("body").classList.toggle("light");
