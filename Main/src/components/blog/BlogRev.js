import React from "react";
import BlogPropMain from "./itemProp/BlogPropMain";

const BlogRev = (data) => {
  return (
    <>
      <div className="main-content">
        {/* Start Blog Area  */}
        <div className="rn-blog-area rn-section-gap">
          <div className="container">
            <div className="row mt_dec--30">
              <h1 style={{ textAlign: "center" }}>Актуално</h1>
                {data && (
                  <BlogPropMain
                    data={data.data.results}
                    international={true}
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

export default BlogRev;
