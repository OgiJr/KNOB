import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";

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

// Import Css Here
import "./assets/scss/style.scss";
import "./assets/scss/elements/accents.scss";
import "./assets/scss/elements/bar.scss";
import "./assets/scss/elements/normative.scss";
import "./assets/scss/elements/rev.scss";
import "./assets/scss/table.scss";
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

const App = () => {
  return (
    <Router>
      <PageScrollTop>
        <Switch>
          {/* Frontend pages */}
          <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={HomeDefault} />
          <Route path={`${process.env.PUBLIC_URL + "/about-us"}`} exact component={AboutUs} />
          <Route path={`${process.env.PUBLIC_URL + "/blog-news"}`} exact component={BlogNews} />
          <Route path={`${process.env.PUBLIC_URL + "/seminars"}`} exact component={BlogSeminars} />
          <Route path={`${process.env.PUBLIC_URL + "/courses"}`} exact component={BlogCourses} />
          <Route path={`${process.env.PUBLIC_URL + "/blog-archive"}`} exact component={BlogArchive} />
          <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`} exact component={BlogDetails} />
          <Route path={`${process.env.PUBLIC_URL + "/board-of-directors"}`} exact component={Directors} />
          <Route path={`${process.env.PUBLIC_URL + "/ethics"}`} exact component={Ethics} />
          <Route path={`${process.env.PUBLIC_URL + "/control-board"}`} exact component={ControlBoard} />
          <Route path={`${process.env.PUBLIC_URL + "/burgas"}`} exact component={Burgas} />
          <Route path={`${process.env.PUBLIC_URL + "/varna"}`} exact component={Varna} />
          <Route path={`${process.env.PUBLIC_URL + "/pleven"}`} exact component={Pleven} />
          <Route path={`${process.env.PUBLIC_URL + "/plovdiv"}`} exact component={Plovdiv} />
          <Route path={`${process.env.PUBLIC_URL + "/ruse"}`} exact component={Ruse} />
          <Route path={`${process.env.PUBLIC_URL + "/sofia"}`} exact component={Sofia} />
          <Route path={`${process.env.PUBLIC_URL + "/stara-zagora"}`} exact component={StaraZagora} />
          <Route path={`${process.env.PUBLIC_URL + "/shumen"}`} exact component={Shumen} />
          <Route path={`${process.env.PUBLIC_URL + "/normative"}`} exact component={Normative} />
          <Route path={`${process.env.PUBLIC_URL + "/valuation-standards"}`} exact component={ValuationStandards} />
          <Route path={`${process.env.PUBLIC_URL + "/rev"}`} exact component={Rev} />
          <Route path={`${process.env.PUBLIC_URL + "/helpful-links"}`} exact component={HelpfulLinks} />
          <Route path={`${process.env.PUBLIC_URL + "/contact"}`} exact component={Contact} />
          <Route path={`${process.env.PUBLIC_URL + "/contact"}`} exact component={Contact} />
          <Route path={`${process.env.PUBLIC_URL + "/member-table"}`} exact component={MemberTable} />
          <Route path={`${process.env.PUBLIC_URL + "/public-registry"}`} exact component={PublicRegistry} />
          <Route path={`${process.env.PUBLIC_URL + "/banks"}`} exact component={Banks} />
          <Route path={`${process.env.PUBLIC_URL + "/documents"}`} exact component={Documents} />
          <Route path={`${process.env.PUBLIC_URL + "/qualifications"}`} exact component={BlogQualifications} />
          <Route path={`${process.env.PUBLIC_URL + "/qualification-committee"}`} exact component={QualificationCommittee} />
          <Route path={`${process.env.PUBLIC_URL + "/valuation-standards-eu"}`} exact component={ValuationStandardsEu} />
          <Route path={`${process.env.PUBLIC_URL + "/rev-registry"}`} exact component={RevRegistry} />
          <Route path={`${process.env.PUBLIC_URL + "/literature"}`} exact component={Literature} />
          <Route path={`${process.env.PUBLIC_URL + "/publications"}`} exact component={Publication} />
          <Route path={`${process.env.PUBLIC_URL + "/us"}`} exact component={Us} />
          <Route path={`${process.env.PUBLIC_URL + "/ks"}`} exact component={Ks} />
          <Route path={`${process.env.PUBLIC_URL + "/kpe"}`} exact component={Kpe} />
          <Route path={`${process.env.PUBLIC_URL + "/os"}`} exact component={Os} />
          {/* Frontend pages end*/}
          {/* Backend pages start*/}
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-admin"}`} exact component={DashboardNews} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-international"}`} exact component={DashboardInternational} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-publications"}`} exact component={DashboardResources} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-us"}`} exact component={DashboardPublicationsUs} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-ks"}`} exact component={DashboardPublicationsKs} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-kpe"}`} exact component={DashboardPublicationsKpe} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-os"}`} exact component={DashboardPublicationsOs} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-literature"}`} exact component={DashboardLiterature} />
          <Route path={`${process.env.PUBLIC_URL + "/members-methodology"}`} exact component={DashboardMethodology} />
          <Route path={`${process.env.PUBLIC_URL + "/members-us"}`} exact component={DashboardUs} />
          <Route path={`${process.env.PUBLIC_URL + "/members-ks"}`} exact component={DashboardKs} />
          <Route path={`${process.env.PUBLIC_URL + "/members-kpe"}`} exact component={DashboardKpe} />
          <Route path={`${process.env.PUBLIC_URL + "/members-rc"}`} exact component={DashboardRc} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-standards"}`} exact component={DashboardStandards} />
          <Route path={`${process.env.PUBLIC_URL + "/login"}`} exact component={Login} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-seminars"}`} exact component={DashboardSeminars} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-qualifications"}`} exact component={DashboardQualifications} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-courses"}`} exact component={DashboardCourses} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-normative"}`} exact component={DashboardNormative} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-members"}`} exact component={DashboardMembers} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-registry"}`} exact component={DashboardRegistry} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-companies"}`} exact component={DashboardCompanies} />
          <Route path={`${process.env.PUBLIC_URL + "/dashboard-rev"}`} exact component={DashboardRev} />
          {/*Backend pages end */}
        </Switch>
      </PageScrollTop>
    </Router>
  );
};

export default App;
document.querySelector("body").classList.toggle("light");
