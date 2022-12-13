import React from "react";
import BlogPropMain from "./itemProp/BlogPropMain";

const BlogHomePage = () => {
  return (
    <>
      <div className="main-content">
        {/* Start Blog Area  */}
        <div className="rn-blog-area rn-section-gap">
          <div className="container">
            <div className="row mt_dec--30">
              <BlogPropMain column="col-lg-6 mt--30" StyleVarProp="box-card-style-default card-list-view" />
            </div>
          </div>
        </div>
        {/* End Blog Area  */}
      </div>
    </>
  );
};

export default BlogHomePage;
