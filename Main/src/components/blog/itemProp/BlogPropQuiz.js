import React, { useState, useEffect } from "react";
import BlogClassicData from "../../../data/blog/QuizList.json";
import BlogListThree from "./BlogListThree";
import { FaSpinner } from "react-icons/fa";
import filters from "./Filters";

const alldataBLog = BlogClassicData;
const BlogPropQuiz = ({ column, StyleVarProp }) => {
  const [getAllItems] = useState(alldataBLog);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [noMorePost, setNoMorePost] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setActiveFilter(filters[0].text.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= dataVisibleCount));
  }, []);

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
              <BlogListThree StyleVar={StyleVarProp} data={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-12">
        <div className="rwt-load-more text-center mt--60">
          <button className="btn btn-default btn-icon" onClick={handleLoadmorebl} disabled={noMorePost ? "disabled" : null}>
            {noMorePost ? (
              "Няма други изпити"
            ) : (
              <span>
                Покажи още изпити
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
export default BlogPropQuiz;
