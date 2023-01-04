import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";
import { useStoreState } from "pullstate";
import { AuthStore } from "./stores/AuthStore";

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

require("dotenv").config();

const App = () => {
  const public_routes = [
    <Route path="/login" exact component={Login} key="/login" />,
    <Route path="/" exact component={HomeDefault} key="/" />,
    <Route path="/about-us" exact component={AboutUs} key="/about-us" />,
    <Route path="/blog-news" exact component={BlogNews} key="/blog-news" />,
    <Route path="/seminars" exact component={BlogSeminars} key="/seminars" />,
    <Route path="/courses" exact component={BlogCourses} key="/courses" />,
    <Route path="/blog-archive" exact component={BlogArchive} key="/blog-archive" />,
    <Route path="/blog-details/:id" exact component={BlogDetails} key="/blog-details/:id" />,
    <Route path="/board-of-directors" exact component={Directors} key="/board-of-directors" />,
    <Route path="/ethics" exact component={Ethics} key="/ethics" />,
    <Route path="/control-board" exact component={ControlBoard} key="/control-board" />,
    <Route path="/burgas" exact component={Burgas} key="/burgas" />,
    <Route path="/varna" exact component={Varna} key="/varna" />,
    <Route path="/pleven" exact component={Pleven} key="/pleven" />,
    <Route path="/plovdiv" exact component={Plovdiv} key="/plovdiv" />,
    <Route path="/ruse" exact component={Ruse} key="/ruse" />,
    <Route path="/sofia" exact component={Sofia} key="/sofia" />,
    <Route path="/stara-zagora" exact component={StaraZagora} key="/stara-zagora" />,
    <Route path="/shumen" exact component={Shumen} key="/shumen" />,
    <Route path="/normative" exact component={Normative} key="/normative" />,
    <Route path="/valuation-standards" exact component={ValuationStandards} key="/valuation-standards" />,
    <Route path="/rev" exact component={Rev} key="/rev" />,
    <Route path="/helpful-links" exact component={HelpfulLinks} key="/helpful-links" />,
    <Route path="/contact" exact component={Contact} key="/contact" />,
    <Route path="/member-table" exact component={MemberTable} key="/member-table" />,
    <Route path="/public-registry" exact component={PublicRegistry} key="/public-registry" />,
    <Route path="/banks" exact component={Banks} key="/banks" />,
    <Route path="/documents" exact component={Documents} key="/documents" />,
    <Route path="/qualifications" exact component={BlogQualifications} key="/qualifications" />,
    <Route path="/qualification-committee" exact component={QualificationCommittee} key="/qualification-committee" />,
    <Route path="/valuation-standards-eu" exact component={ValuationStandardsEu} key="/valuation-standards-eu" />,
    <Route path="/rev-registry" exact component={RevRegistry} key="/rev-registry" />,
    <Route path="/literature" exact component={Literature} key="/literature" />,
    <Route path="/publications" exact component={Publication} key="/publications" />,
  ];
  const guest_routes = [
    <Route path="/us" exact component={Us} key="/us" />,
    <Route path="/ks" exact component={Ks} key="/ks" />,
    <Route path="/kpe" exact component={Kpe} key="/kpe" />,
    <Route path="/os" exact component={Os} key="/os" />,
  ];
  const curator_routes = [
    <Route path="/dashboard-admin" exact component={DashboardNews} key="/dashboard-admin" />,
    <Route path="/dashboard-international" exact component={DashboardInternational} key="/dashboard-international" />,
    <Route path="/dashboard-publications" exact component={DashboardResources} key="/dashboard-publications" />,
    <Route path="/dashboard-us" exact component={DashboardPublicationsUs} key="/dashboard-us" />,
    <Route path="/dashboard-ks" exact component={DashboardPublicationsKs} key="/dashboard-ks" />,
    <Route path="/dashboard-kpe" exact component={DashboardPublicationsKpe} key="/dashboard-kpe" />,
    <Route path="/dashboard-os" exact component={DashboardPublicationsOs} key="/dashboard-os" />,
    <Route path="/dashboard-literature" exact component={DashboardLiterature} key="/dashboard-literature" />,
    <Route path="/members-methodology" exact component={DashboardMethodology} key="/members-methodology" />,
    <Route path="/members-us" exact component={DashboardUs} key="/members-us" />,
    <Route path="/members-ks" exact component={DashboardKs} key="/members-ks" />,
    <Route path="/members-kpe" exact component={DashboardKpe} key="/members-kpe" />,
    <Route path="/members-rc" exact component={DashboardRc} key="/members-rc" />,
    <Route path="/dashboard-standards" exact component={DashboardStandards} key="/dashboard-standards" />,
    <Route path="/dashboard-seminars" exact component={DashboardSeminars} key="/dashboard-seminars" />,
    <Route
      path="/dashboard-qualifications"
      exact
      component={DashboardQualifications}
      key="/dashboard-qualifications"
    />,
    <Route path="/dashboard-courses" exact component={DashboardCourses} key="/dashboard-courses" />,
    <Route path="/dashboard-normative" exact component={DashboardNormative} key="/dashboard-normative" />,
    <Route path="/dashboard-members" exact component={DashboardMembers} key="/dashboard-members" />,
    <Route path="/dashboard-rev" exact component={DashboardRev} key="/dashboard-rev" />,
  ];
  const admin_routes = [
    <Route path="/dashboard-registry" exact component={DashboardRegistry} key="/dashboard-registry" />,
    <Route path="/dashboard-companies" exact component={DashboardCompanies} key="/dashboard-companies" />,
  ];

  const [current_routes, set_current_routes] = React.useState(public_routes);

  const auth_state = useStoreState(AuthStore);

  React.useState(() => {
    if (auth_state.token) {
      fetch(`${process.env.REACT_APP_API_URL}/api/is-user-logged-in`, {
        headers: {
          Authorization: `Bearer ${auth_state.token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (!res.result) {
            AuthStore.update((s) => {
              s.is_logged_in = false;
              s.user_type = null;
              s.token = null;
            });
          } else {
            AuthStore.update((s) => {
              s.is_logged_in = true;
            });
          }
        })
        .catch(() => {
          AuthStore.update((s) => {
            s.is_logged_in = false;
            s.user_type = null;
            s.token = null;
          });
        });
      fetch(`${process.env.REACT_APP_API_URL}/api/get-user-type`, {
        headers: {
          Authorization: `Bearer ${auth_state.token}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.result) {
            AuthStore.update((s) => {
              s.is_logged_in = false;
              s.user_type = null;
              s.token = null;
            });
          } else {
            AuthStore.update((s) => {
              s.user_type = res.resultß;
            });
          }
        })
        .catch(() => {
          AuthStore.update((s) => {
            s.is_logged_in = false;
            s.user_type = null;
            s.token = null;
          });
        });
    } else {
      AuthStore.update((s) => {
        s.is_logged_in = false;
        s.user_type = null;
        s.token = null;
      });
    }
  });

  React.useState(() => {
    set_current_routes(public_routes);

    if (auth_state.is_logged_in) {
      set_current_routes(current_routes.concat(guest_routes));
    }

    if (auth_state.user_type === "Curator") {
      set_current_routes(current_routes.concat(curator_routes));
    }

    if (auth_state.user_type === "Admin") {
      set_current_routes(current_routes.concat(curator_routes));
      set_current_routes(current_routes.concat(admin_routes));
    }

    set_current_routes(current_routes.concat(<Route component={Custom404} />));
  }, [auth_state, set_current_routes, current_routes]);

  return (
    <Router>
      <PageScrollTop>
        <Switch>{current_routes.map((x) => x)}</Switch>
      </PageScrollTop>
    </Router>
  );
};

export default App;
document.querySelector("body").classList.toggle("light");
