import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogListArchived = ({ data, StyleVar, international = false }) => {
  return (
    <>
      <div className={`rn-card ${StyleVar}`}>
        <div className="inner" style={{ display: "flex", flexDirection: "column" }}>
          <div className="thumbnail">
            {data.short_description !== "" ? (
              <>
                {
                  !international ? (
                    <Link to={`/blog-details?id=${data._id}`} className="image" style={{ height: 200 }}>
                      <img
                        src={`${process.env.REACT_APP_API_URL}/${data.picture.path}`}
                        alt="Blog"
                        style={{ width: "100%", height: "100%", borderRadius: 0, objecitFit: "cover" }}
                      />
                    </Link>) : (
                    <Link to={`/blog-european?id=${data._id}`} className="image" style={{ height: 200 }}>
                      <img
                        src={`${process.env.REACT_APP_API_URL}/${data.picture.path}`}
                        alt="Blog"
                        style={{ width: "100%", height: "100%", borderRadius: 0, objecitFit: "cover" }}
                      />
                    </Link>)}
              </>
            ) : (
              <div className="image">
                <img
                  src={`${process.env.REACT_APP_API_URL}/${data.picture.path}`}
                  alt="Blog"
                  style={{ width: "100%", height: "100%", borderRadius: 0, objecitFit: "cover" }}
                />
              </div>
            )}
          </div>
          <div className="content" style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ fontSize: 20 }}>
              {data.short_description ? (
                <Link to={process.env.PUBLIC_URL + `/blog-details?id=${data.id}`}>{data.title}</Link>
              ) : (
                data.title
              )}
            </h4>
            <ul className="rn-meta-list">
              {data.file && (
                <div style={{ display: "flex", flexAlign: "row" }}>
                  <li>
                    <a
                      href={`${process.env.REACT_APP_API_URL}/${data.file.path}`}
                      style={{ textDecoration: "underline", color: "orange", marginRight: 5 }}
                    >
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <img src="images/icons/file.png" alt="File" style={{ width: 20, height: 20, marginTop: 2 }} />

                        {data.file.name}
                      </div>
                    </a>
                  </li>
                  <br />
                </div>
              )}
              <li>
                {new Date(data.timestamp).toLocaleString("bg-BG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </li>
            </ul>
            <p className="descriptiion">{data.short_description}...</p>
          </div>
        </div>
      </div>
    </>
  );
};
BlogListArchived.propTypes = {
  data: PropTypes.object,
};
export default BlogListArchived;
