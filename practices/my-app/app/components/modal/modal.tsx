import React from "react";

export default function Modal({
  id,
  header,
  body,
  footer,
  onClose,
}: {
  id: string;
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
  onClose: Function;
}) {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-modal-icon" onClick={() => onClose()}>
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? body : <div>this is our modal </div>}
        </div>
        <div className="footer">{footer ? footer : <div>footer</div>}</div>
      </div>
    </div>
  );
}
