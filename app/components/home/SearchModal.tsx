"use client";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Search from "./Search";

type SearchModalProps = {
  show: boolean;
  onHide: () => void;
};

export default function SearchModal(props: SearchModalProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Search one or more fields
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Search />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
