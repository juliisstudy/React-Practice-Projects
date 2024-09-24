"use client";
import React, { useState } from "react";
import Modal from "./modal";

export default function ModelTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>open modal popup</button>
      {showModalPopup && (
        <Modal
          id="modal"
          body={<div>body</div>}
          header={<div>header</div>}
          footer={<div>footer</div>}
          onClose={onClose}
        />
      )}
    </div>
  );
}
