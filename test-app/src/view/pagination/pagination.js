import React, {useState}  from 'react';

let Paginator = (props) => {
  const {currentPage, onPageChanged, pagesSize, totalItemsCount} = props
  let [portionNumber, setPortionNumber] = useState(1);
  let portionSize = 5;

  let pages = [];
  let pagesCount = Math.ceil(totalItemsCount / pagesSize);
  for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return <div>
      {portionNumber > 1
        && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Пред..</button>
      }
      {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(e => {
              return <span onClick={() => {onPageChanged(e)}}
                className={currentPage === e && styles.activePage}>{e}</span>})
      }
      {portionCount > portionNumber
        &&  <button onClick={() => {setPortionNumber(portionNumber + 1)}}>След..</button>
      }
    </div>
}

export default Paginator