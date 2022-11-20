import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogPropQuiz from "./itemProp/BlogPropQuiz";

const BlogQuiz = () => {
  return (
    <>
      <SEO title="Новини || КНОБ " />
      <Layout>
        <BreadcrumbOne title="Изпити и квалификационни курсове" rootUrl="/" />

        <div className="main-content">
          {/* Start Blog Area  */}
          <div className="rn-blog-area rn-section-gap">
            <div className="container">
              <div className="row mt_dec--30">
                <BlogPropQuiz column="col-lg-6 mt--30" StyleVarProp="box-card-style-default card-list-view" />
              </div>
            </div>
          </div>
          {/* End Blog Area  */}
        </div>
      </Layout>
    </>
  );
};

export default BlogQuiz;
