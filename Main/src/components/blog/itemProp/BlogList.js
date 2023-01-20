import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Modal, useModal } from "@nextui-org/react";

const BlogList = ({ data, StyleVar }) => {
  const { setVisible, bindings } = useModal();
  return (
    <Card isHoverable isPressable onClick={() => setVisible(true)}>
      <Modal scroll width="900px" preventClose {...bindings}>
        <Modal.Header>
          <span style={{ fontSize: "14px" }}>
            <b>{data.title}</b>
          </span>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div style={{ fontSize: "12px" }}>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
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
          <img
            src={`${process.env.REACT_APP_API_URL}/${data.picture.path}`}
            alt="Blog"
            style={{ height: 300, width: 300, alignSelf: "center", borderRadius: 50, objectFit: "cover" }}
          />
          <br />
          <ul className="rn-meta-list">
            {data.files && (
              <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
                {data.files.map((item) => (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src="images/icons/file.png" alt="File" style={{ width: 20, height: 20, marginTop: 2 }} />
                    <a
                      href={`${process.env.REACT_APP_API_URL}/${item.path}`}
                      style={{
                        textDecoration: "underline",
                        color: item.name.includes(".doc")
                          ? "#021691"
                          : item.name.includes(".xl") || item.name.includes(".csv")
                            ? "green"
                            : item.name.includes(".pdf")
                              ? "#8b0000"
                              : "orange",
                      }}
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
            <br />
            <li>
              {new Date(data.timestamp).toLocaleString("bg-BG", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </li>
          </ul>
        </Card.Body>
        <Card.Footer style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
