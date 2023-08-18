import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/hook";
import {
  next,
  prev,
  totalPagesInDBState,
  paginationSearch,
} from "../../GlobalRedux/features/pagination/paginationSlice";

export default function Pagination() {
  const currentPage = useAppSelector(paginationSearch);
  const totalPagesInDB = useAppSelector(totalPagesInDBState);
  const dispatch = useAppDispatch();
  const handleNextPage = () => {
    dispatch(next());
  };

  const handlePreviousPage = () => {
    dispatch(prev());
  };

  return (
    <div className="d-flex flex-row justify-content-center my-5 align-items-center gap-3 ">
      <button
        onClick={handlePreviousPage}
        className="btn btn-outline-dark"
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>{" "}
        Back
      </button>
      <div>
        Page {currentPage} of {totalPagesInDB}
      </div>
      <button
        onClick={handleNextPage}
        className="btn btn-outline-dark"
        disabled={currentPage === totalPagesInDB}
      >
        Next{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </button>
    </div>
  );
}
