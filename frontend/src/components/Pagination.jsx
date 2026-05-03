import useResize from "./useResize";

const Pagination = ({ startPage, endPage, currentPage, setCurrentPage }) => {
  const range = (startPage, endPage) => {
    let length = endPage - startPage + 1;
    return Array.from({ length }, (_, i) => i + startPage);
  };

  let resize = useResize();
  let size = resize <= 600 ? 2 : 3;

  const genratePageButton = () => {
    if (endPage <= 5) {
      // if endpage(totalPage)=4 is less then 4 or equal then show prev [1][2][3][4] next
      return [...range(startPage, endPage)];
    } else {
      // else if endPage(totalPage) is greater then 4 add ellipses  prev [1][2][3][4]...[10] next
      if (currentPage <= size + 1) {
        return [...range(startPage, size + 1), "right-ellipses", endPage];
      } else if (currentPage >= endPage - size) {
        //else if endPage(totalPage) is greater then equal to 6 add ellipses  prev [1]...[6][7][8][9][10] next
        return [startPage, "left-ellipses", ...range(endPage - size, endPage)];
      }

      let siblingCount = resize <= 600 ? 1 : 2;

      //Prevent that buttonElement don't fall under -1 or negative go low but stop at 1
      let leftElementSibling = Math.max(currentPage - siblingCount, startPage);
      //Prevent that buttonElement don't fall greater then the total pages go high but stop at totalPage
      let rightElementSibling = Math.min(currentPage + siblingCount, endPage);

      // Middle range   prev  [1]...[4][5][6]...[10] next
      return [
        startPage,
        "left-ellipses",
        //         [4] leftSibling  [5]-->currentPage   [6]rightSibling so range is from 4 to 6
        ...range(leftElementSibling, rightElementSibling),
        "right-ellipses",
        endPage,
      ];
    }
  };

  const buttons = genratePageButton();

  console.log(range(startPage, endPage));

  return (
    <div className="pagination">
      <button
        className="prev-btn"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage <= startPage}
      >
        «
      </button>
      <div className="page-btn-container">
        {buttons.map((pageNo) => {
          if (typeof pageNo === "string") return <Ellipses />;

          return (
            <PageButton
              key={pageNo}
              pageNo={pageNo}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          );
        })}
      </div>
      <button
        className="next-btn"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage >= endPage}
      >
        »
      </button>
    </div>
  );
};

function PageButton({ pageNo, currentPage, setCurrentPage }) {
  return (
    <button
      className={`${currentPage === pageNo ? "active" : ""} page-btn`}
      onClick={() => setCurrentPage(pageNo)}
    >
      {pageNo}
    </button>
  );
}

const Ellipses = () => {
  return <span className="ellipses">...</span>;
};

export default Pagination;
