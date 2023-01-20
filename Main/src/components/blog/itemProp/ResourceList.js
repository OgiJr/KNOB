import React from "react";
import PropTypes from "prop-types";

const ResourceList = ({ data, StyleVar }) => {
  return (
    <>
      <div className={`rn-card ${StyleVar}`}>
        <div className="inner" style={{ display: "flex", flexDirection: "column" }}>
          <div className="thumbnail">
            <div className="image">
              <img
                src={`${process.env.REACT_APP_API_URL}/${data.picture.path}`}
                alt="Blog"
                style={{ width: "100%", height: "100%", borderRadius: 0, objecitFit: "cover" }}
              />
            </div>
          </div>
          <div className="content" style={{ display: "flex", flexDirection: "column" }}>
            <h4 style={{ fontSize: 20 }}>
              {data.title}
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
                        <img src="images/icons/file.png" alt="File" style={{ width: 20, height: 20, marginTop: 2, objecitFit: "cover" }} />

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
            <p className="descriptiion" dangerouslySetInnerHTML={{ __html: data.description }}></p>
          </div>
        </div>
      </div>
    </>
  );
};
ResourceList.propTypes = {
  data: PropTypes.object,
};
export default ResourceList;
