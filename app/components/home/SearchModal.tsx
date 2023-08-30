import Modal from "react-bootstrap/Modal";
import Search from "./Search";
// import { stop } from "@/app/GlobalRedux/features/searchRedux/searchSlice";
import { useAppDispatch } from "@/app/GlobalRedux/hook";

type SearchModalProps = {
  show: boolean;
  onHide: () => void;
};

export default function SearchModal({ show, onHide }: SearchModalProps) {
  // const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    // dispatch(stop()); // Dispatch the stop action when the modal is closed
    onHide();
  };
  return (
    <Modal
      show={show}
      onHide={handleCloseModal}
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
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}
