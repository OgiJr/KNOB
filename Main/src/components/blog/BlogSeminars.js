import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogPropQuiz from "./itemProp/BlogPropSeminar";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogSeminars = () => {
  const { data, error, isLoading } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-seminars`, fetcher);

  return (
    <>
      <SEO title="Новини " />
      <Layout>
        <BreadcrumbOne title="Квалификационни обучения" rootUrl="/" />
        <div className="main-content">
          {/* Start Blog Area  */}
          <div className="rn-blog-area rn-section-gap">
            <div className="container">
              <div className="row mt_dec--30">
                {isLoading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {data && (
                  <BlogPropQuiz
                    data={data.results}
                    column="col-lg-6 mt--30"
                    StyleVarProp="box-card-style-default card-list-view"
                  />
                )}
              </div>
            </div>
          </div>
          {/* End Blog Area  */}
        </div>
      </Layout>
    </>
  );
};

export default BlogSeminars;
