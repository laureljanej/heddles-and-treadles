import React from 'react';
import PropTypes from 'prop-types';
import Toggle from './Toggle';

const TieUp = ({thePattern}) => {

  // need an on/off that shows value if on
  const handleClick = () => {
    console.log('clickeroo');
   // this.setState(prevState => ({
   //   active: !prevState.active
   // }));
  }

  // create rows
  let rows = Object.values(thePattern.tieup).map((row, row_index) => {

    //create cells for this row
    let cells = Object.values(row).map((cell, cell_index) => {
      return(
        <td key={cell_index}>
            <Toggle
              active={thePattern.tieup[row_index][cell_index]}
              value='X'
              onClick={handleClick}
              row={row_index}
              cell={cell_index}
            />
          </td>
        )
      });

    // return markup for row
    return (
       <tr key={row_index}>
         {cells}
       </tr>
    );

  });

  return (
    <table>
      <tbody>
         {rows}
      </tbody>
    </table>
  );
};

TieUp.propTypes = {
  thePattern: PropTypes.object.isRequired
};

export default TieUp;
