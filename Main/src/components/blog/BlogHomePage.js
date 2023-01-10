import React from "react";
import BlogPropMain from "./itemProp/BlogPropMain";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const BlogHomePage = () => {
  const { data, error, isLoading } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-knob-content`, fetcher);

  return (
    <>
      <div className="main-content">
        {/* Start Blog Area  */}
        <div className="rn-blog-area rn-section-gap">
          <div className="container">
            <div className="row mt_dec--30">
              {isLoading && <div>Loading...</div>}
              {error && <div>{JSON.stringify(error)}</div>}
              {data && (
                <BlogPropMain
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
    </>
  );
};

export default BlogHomePage;
