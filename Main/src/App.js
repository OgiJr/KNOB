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

// Import Css Here
import "./assets/scss/style.scss";
import BlogQuiz from "./components/blog/BlogQuiz";
import BlogArchive from "./components/blog/BlogArchive";

const App = () => {
  return (
    <Router>
      <PageScrollTop>
        <Switch>
          {/* Frontend pages */}
          <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={HomeDefault} />
          <Route path={`${process.env.PUBLIC_URL + "/about-us"}`} exact component={AboutUs} />
          <Route path={`${process.env.PUBLIC_URL + "/blog-news"}`} exact component={BlogNews} />
          <Route path={`${process.env.PUBLIC_URL + "/blog-quiz"}`} exact component={BlogQuiz} />
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
          {/* Frontend pages end*/}
        </Switch>
      </PageScrollTop>
    </Router>
  );
};

export default App;
document.querySelector("body").classList.toggle("light");
