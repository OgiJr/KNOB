import { Card } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

const BlogDetailsContent = ({ data }) => {
  return (
    <>
      <div className="post-page-banner rn-section-gapTop">
        <div className="">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="content text-center">
                <div className="page-title">
                  <h1 className="theme-gradient">{data.title}</h1>
                </div>
                <ul className="rn-meta-list">
                  <li>
                    {new Date(data.timestamp).toLocaleString("bg-BG", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                    {data.file ? (
                      <div style={{ display: "flex", flexAlign: "row", justifyContent: "center" }}>
                        <li>
                          <div style={{ display: "flex", flexDirection: "row" }}>
                            <img
                              src={`/images/icons/file.png`}
                              alt="File"
                              style={{ width: 20, height: 20, marginTop: 2 }}
                            />
                            <Link
                              to={`${process.env.REACT_APP_API_URL}/${data.file.path}`}
                              style={{ textDecoration: "underlined", color: "orange" }}
                            >
                              {data.file.name}
                            </Link>
                          </div>
                        </li>
                        <br />
                      </div>
                    ) : (
                      <></>
                    )}
                  </li>
                  <li>
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${data.picture.path}`}
                      style={{ borderRadius: 20, height: 300 }}
                      alt="blog"
                    ></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details-content pt--60 rn-section-gapBottom">
        <div className="">
          <div className="row" style={{ display: "flex", justifyContent: "center" }}>
            <div className="col-lg-10" style={{ alignSelf: "center" }}>
              <Card isHoverable isPressable>
                <div className="content" style={{ margin: "30px" }}>
                  <div dangerouslySetInnerHTML={{ __html: data.description }} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogDetailsContent;
