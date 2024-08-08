import React from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) {
  //   let pageNumbers = [];
  //   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  //     pageNumbers.push(i);
  //   }
  console.log(currentPage);
  const pageNumbers = [
    ...Array(Math.ceil(totalPosts / postsPerPage)).keys(),
  ].map((i) => i + 1);

  const prevPageHandler = () => {
    if (currentPage !== 1) paginate(currentPage - 1);
  };
  const nextPageHandler = () => {
    if (currentPage !== pageNumbers[pageNumbers.length - 1])
      paginate(currentPage + 1);
  };
  return (
    <div>
      <nav>
        <div className="pagination">
          <span
            onClick={prevPageHandler}
            className={`${currentPage !== 1 ? "active" : ""}`}
          >
            Prev
          </span>
          {pageNumbers.map((number) => (
            <p key={number} className="page-item">
              <span
                href="#"
                className={`${currentPage === number ? "active" : ""}`}
                onClick={() => paginate(number)}
              >
                {number}
              </span>
            </p>
          ))}
          <span onClick={nextPageHandler}>Next</span>
        </div>
        <button
          disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
          onClick={() => paginate(currentPage + 1)}
        >
          next
        </button>
      </nav>
    </div>
  );
}
