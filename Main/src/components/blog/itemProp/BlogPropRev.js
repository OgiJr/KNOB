import React, { useState, useEffect } from "react";
import BlogClassicData from "../../../data/blog/BlogRev.json";
import BlogListArchived from "./BlogListArchived";
import { FaSpinner } from "react-icons/fa";
import filters from "./Filters";

const alldataBLog = BlogClassicData;
const BlogPropRev = ({ column, StyleVarProp, archive = "false" }) => {
  const [getAllItems] = useState(alldataBLog);
  const [dataVisibleCount, setDataVisibleCount] = useState(2);
  const [dataIncrement] = useState(3);
  const [noMorePost, setNoMorePost] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, [dataVisibleCount, getAllItems]);

  const handleLoadmorebl = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;
    if (dataVisibleCount >= getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].text.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        setVisibleItems(getAllItems.filter((data) => data.text === activeFilter && data.id <= tempCount));
      }
    }
  };
  return (
    <>
      <div className="col-lg-12">
        <div className="row row--15">
          {visibleItems.map((item) => (
            <div key={item.id} className={column}>
              <BlogListArchived StyleVar={StyleVarProp} data={item} archive={archive} />
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
            {noMorePost ? (
              "Няма още новини"
            ) : (
              <span>
                Покажи още новини
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
export default BlogPropRev;
