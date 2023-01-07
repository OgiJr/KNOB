import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const BlogPropQuiz = ({ column, StyleVarProp, data }) => {

  return (
    <>
      <div className="col-lg-12">
        <div className="row row--15">
          {
          data &&
          data.map((item) => (
            <div key={item.id} className={column}>
              <BlogList StyleVar={StyleVarProp} data={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default BlogPropQuiz;
