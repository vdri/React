import React from 'react';
import ReactDOM from 'react-dom';
import { InfiniteLoader, List } from 'react-virtualized';
 
 
// This example assumes you have a way to know/load this information
const remoteRowCount = 1000;

let list = [];

function isRowLoaded ({ index }) {
  return !!list[index];
}

function loadMoreRows ({ startIndex, stopIndex }) {
  return fetch(`http://localhost:7070/api/cities?_start=${startIndex}&_end=${stopIndex}`)
    .then(response => {
      // Store response data in list...
       return response.json();
    })
    .then ( (cities) => {
       //list = cities;
       list = cities.map (c => c.name);
       console.log("lenth ", list.length, list)
       
    })
}

function rowRenderer ({ key, index, style}) {
  console.log("length , index ", list.length, index);

  return (
    
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}

export default function ListInfinite(props) {
  return (
    <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={remoteRowCount}
      >
        {({ onRowsRendered, registerChild }) => (
          <List
            height={200}
            onRowsRendered={onRowsRendered}
            ref={registerChild}
            rowCount={remoteRowCount}
            rowHeight={20}
            rowRenderer={rowRenderer}
            width={300}
          />
        )}
      </InfiniteLoader>
  )
}