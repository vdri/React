import React from 'react';
import { List } from 'react-virtualized';

// List data as an array of strings
const list = [
  'Brian Vaughn'
  // And so on...
];

for (var i =0; i < 10000; i++)
  {
    list.push("Name " + i);
  }

function rowRenderer ({
  key,         // Unique key within array of rows
  index,       // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible,   // This row is visible within the List (eg it is not an overscanned row)
  style        // Style object to be applied to row (to position it)
}) {
   console.log(key, index, isScrolling, isVisible);

  return (
    <div
      key={key}
      style={style}
    >
      {list[index]}
    </div>
  )
}

export default function ListExample(props) {
     return (
     <List
            width={300}
            height={300}
            rowCount={list.length}
            rowHeight={20}
            rowRenderer={rowRenderer}
    />
     )
}

// export default function ListText(props) {
//   let listElems = list.map( n => <li key={n}>{n}</li>);
//   return (
//       <div>
//         <ul>
//             {listElems}
//           </ul>
//         </div>
        
//         )
// }