import React, { useState, useEffect } from "react";
import BlogClassicData from "../../../data/blog/BlogQualification.json";
import BlogList from "./BlogList";
import { FaSpinner } from "react-icons/fa";

const alldataBLog = BlogClassicData;
const BlogPropQualification = ({ column, StyleVarProp }) => {
  const [getAllItems] = useState(alldataBLog);
  const [dataVisibleCount] = useState(6);
  const [noMorePost] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, [dataVisibleCount, getAllItems]);

  const handleLoadmorebl = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="row row--15">
          {visibleItems.map((item) => (
            <div key={item.id} className={column}>
              <BlogList StyleVar={StyleVarProp} data={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-12">
        <div className="rwt-load-more text-center mt--60">
          <button
            className="btn btn-default btn-icon"
            onClick={handleLoadmorebl}
            disabled={noMorePost ? "disabled" : null}
          >
            {visibleItems.length === 0 ? (
              "Няма актуални квалификации"
            ) : (
              <span>
                Покажи още квалификации
                <span className="icon">
                  <FaSpinner />
                </span>
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};
export default BlogPropQualification;
