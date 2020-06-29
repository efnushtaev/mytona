import React, {useState, useEffect}  from 'react';

let Paginator = (props) => {
  debugger
  const {currentPage, onPageChanged, pagesSize, totalItemsCount} = props
  let [portionNumber, setPortionNumber] = useState(1);
  let portionSize = 5;

  let pages = [];
  let pagesCount = Math.ceil(totalItemsCount.length / pagesSize);
  for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  useEffect(() => {
    
  }, [totalItemsCount]);

  return <>
    <ul class="pagination">
      {portionNumber > 1
        && <li className={"page-item"} onClick={() => {setPortionNumber(portionNumber - 1)}}><a className={"page-link"}>&laquo;</a></li>
      }
      {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(e => {
              return <li className={"page-item"} onClick={() => {onPageChanged(e)}}><a className={"page-link"}>{e}</a></li>})
      }
      {portionCount > portionNumber
        &&  <li className={"page-item"} onClick={() => {setPortionNumber(portionNumber + 1)}}><a className={"page-link"}>&raquo;</a></li>
      } 

    </ul>
    </>
}

export default Paginator