import React from "react";
import BlogListArchived from "./BlogListArchived";

const BlogPropMain = ({ data, column, StyleVarProp, archive = "false" }) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="row row--15">
          {data &&
            data.map((item) => (
              <div key={item._id} className={column}>
                <BlogListArchived StyleVar={StyleVarProp} data={item} archive={archive} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default BlogPropMain;
