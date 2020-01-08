import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => {
  return(
  <input 
    className='search'
    type='search'
    placeholder={props.placeholder}
    onChange={props.handleChange}
  />
  )
}


// You can have the same here with immediately executed func:
// export const SearchBox2 = (props) => ( //-----DEMO ONLY
//   <input 
//     className='search'
//     type='search'
//     placeholder={props.placeholder}
//     onChange={props.handleChange}
//   />
// )



