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
                    {data.date}
                    {data.fileName !== "" ? (
                      <div style={{ display: "flex", flexAlign: "row", justifyContent: "center" }}>
                        <li>
                          <div style={{ display: "flex", flexDirection: "row" }}>
                            <img src={`${process.env.PUBLIC_URL}/images/icons/file.png`} alt="File" style={{ width: 20, height: 20, marginTop: 2 }} />
                            <Link to={"#"} style={{ textDecoration: "underlined", color: "orange" }}>
                              {data.fileName}
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
                    <img src={`${process.env.PUBLIC_URL}/${data.image}`} style={{ borderRadius: 100, width: 300, height: 300 }}></img>
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
                  {data.body.map((value, i) => {
                    return <div key={i} dangerouslySetInnerHTML={{ __html: value }} />;
                  })}
                  {/* 
                <div className="category-meta">
                  <span className="text">Tags:</span>
                  //<SidebarTag />
                </div> */}
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
