import React from "react";
import ResourceList from "./ResourceList";

const BlogPropLiterature = ({ column, StyleVarProp, data }) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="row row--15">
          {data &&
            data.map((item) => (
              <div key={item.id} className={column}>
                <ResourceList StyleVar={StyleVarProp} data={item} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default BlogPropLiterature;
