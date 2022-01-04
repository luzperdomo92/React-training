import React from 'react'
import "./styles.scss";

const TableIndexes = ({indexColumn, indexes, setIndexes, setIndexComponent}) => {

  console.log(indexes.length);
  const deleteIndex = () => {
    const newIndexes = indexes.filter(currentIndex => currentIndex.id !== indexColumn.id)
    setIndexes(newIndexes)

    if(newIndexes.length === 0) {
      setIndexComponent(false);
    }
  }

  return (
    <div className="index">
      <div className="index__name">
        <div className="index__input">
          <span>Select Columns</span>
        </div>
      </div>
      <div className="index__elements">
        <div className="index__type"></div>
        <button className="index__button" onClick={deleteIndex}>&#128465;</button>
      </div>
    </div>
  )
}

export default TableIndexes
