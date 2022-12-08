import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogListArchived = ({ data, StyleVar, archive = "false" }) => {
  return (
    <>
      {data.archived === archive ? (
        <div className={`rn-card ${StyleVar}`}>
          <div className="inner">
            <div className="thumbnail">
              {data.excerpt != "" ? (
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`} className="image">
                  <img src={`${process.env.PUBLIC_URL}/${data.image}`} alt="Blog Image" style={{ width: "90%", height: "100%" }} />
                </Link>
              ) : (
                <div className="image">
                  <img src={`${process.env.PUBLIC_URL}/${data.image}`} alt="Blog Image" style={{ width: "90%", height: "100%" }} />
                </div>
              )}
            </div>
            <div className="content">
              <h4 className="title">{data.excerpt ? <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{data.title}</Link> : data.title}</h4>
              <ul className="rn-meta-list">
                {data.fileName !== "" ? (
                  <div style={{ display: "flex", flexAlign: "row" }}>
                    <li>
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src="images/icons/file.png" alt="File" style={{ width: 20, height: 20, marginTop: 2 }} />
                        <a href={data.file} style={{ textDecoration: "underlined", color: "orange" }}>
                          {data.fileName}
                        </a>
                      </div>
                    </li>
                    <br />
                  </div>
                ) : (
                  <></>
                )}
                <li>{data.date}</li>
              </ul>
              <p className="descriptiion">{data.excerpt}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
BlogListArchived.propTypes = {
  data: PropTypes.object,
};
export default BlogListArchived;
