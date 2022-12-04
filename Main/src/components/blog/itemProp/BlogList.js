import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Modal, useModal } from "@nextui-org/react";
import { Link } from "react-router-dom";

const BlogList = ({ data, StyleVar }) => {
  const { setVisible, bindings } = useModal();
  return (
    <Card isHoverable isPressable onClick={() => setVisible(true)}>
      <Modal preventClose scroll width="900px" aria-labelledby="modal-title" aria-describedby="modal-description" {...bindings}>
        <Modal.Header>
          <span style={{ fontSize: "14px" }}>
            <b>{data.title}</b>
          </span>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div style={{ fontSize: "12px" }}>
            {data.body.map((value, i) => {
              return <div key={i} dangerouslySetInnerHTML={{ __html: value }} />;
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Затвори
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={{ margin: 20 }}>
        <Card.Header style={{ textAlign: "center" }}>
          <b>{data.title}</b>
        </Card.Header>
        <Card.Body>
          <img src={`${process.env.PUBLIC_URL}/${data.image}`} alt="Blog Image" style={{ height: 300, width: 300, alignSelf: "center", borderRadius: 50 }} />
          <br />
          <ul className="rn-meta-list">
            {data.fileName !== "" ? (
              <div style={{ display: "flex", flexAlign: "row" }}>
                <li>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src="images/icons/file.png" alt="File" style={{ width: 20, height: 20, marginTop: 2 }} />
                    <Link to={"#"} style={{ textDecoration: "underline", color: data.file.includes(".doc") ? "#021691" : data.file.includes(".xl") || data.file.includes(".csv") ? "green" : data.file.includes(".pdf") ? "#8b0000" : "orange" }}>
                      {"  " + data.fileName}
                    </Link>
                    <br />
                  </div>
                  {data.fileName2 !== "" ? (
                    <div style={{ display: "flex", flexAlign: "row" }}>
                      <li>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <img src="images/icons/file.png" alt="File" style={{ width: 20, height: 20, marginTop: 2 }} />
                          <Link to={"#"} style={{ textDecoration: "underline", color: data.file2.includes(".doc") ? "#021691" : data.file2.includes(".xl") || data.file2.includes(".csv") ? "green" : data.file2.includes(".pdf") ? "#8b0000" : "orange" }}>
                            {" " + data.file2Name}
                          </Link>
                        </div>
                      </li>
                      <br />
                    </div>
                  ) : (
                    <></>
                  )}
                  {data.fileName2 !== "" ? (
                    <div style={{ display: "flex", flexAlign: "row" }}>
                      <li>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <img src="images/icons/file.png" alt="File" style={{ width: 20, height: 20, marginTop: 2 }} />
                          <Link to={"#"} style={{ textDecoration: "underline", color: data.file3.includes(".doc") ? "#021691" : data.file3.includes(".xl") || data.file3.includes(".csv") ? "green" : data.file3.includes(".pdf") ? "#8b0000" : "orange" }}>
                            {" " + data.file3Name}
                          </Link>
                        </div>
                      </li>
                      <br />
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
                <br />
              </div>
            ) : (
              <></>
            )}
            <br />
          </ul>
        </Card.Body>
        <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
            <span>{data.date}</span>
            <span style={{ fontWeight: "bold", color: "orange" }}>Натиснете за повече информация</span>
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
};
BlogList.propTypes = {
  data: PropTypes.object,
};
export default BlogList;
