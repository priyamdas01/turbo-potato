import React from 'react';

function Results({ filteredData }) {
  return (
    <div>
      {filteredData.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default Results;