import React from 'react'
import TableIndexes from "../TableIndexes/TableIndexes";
import "./styles.scss";

const Indexes = ({ columns, indexes, setIndexes, setIndexComponent }) => {
  return (
    <div className="indexes">
      <div className="indexes__title">Indexes</div>
      <div className="indexes__list">
        {indexes && indexes.map(indexColumn => (
          <TableIndexes
            key={indexColumn.id}
            indexColumn={indexColumn}
            indexes={indexes}
            setIndexes={setIndexes}
            setIndexComponent={setIndexComponent}
          />
        ))}
      </div>
    </div>
  )
}

export default Indexes
