import React from 'react';
import PropTypes from 'prop-types';
// import {scrubFormatting} from '../utils/numberFormat';
import Toggle from './Toggle';

const PatternResults = ({thePattern}) => {
  // const savingsExist = scrubFormatting(savings.monthly) > 0;
  // const savingsClass = savingsExist ? 'savings' : 'loss';
  // const resultLabel = savingsExist ? 'Savings' : 'Loss';

  // {thePattern.treadles.map((treadle, index) => (
  //   <td>
  //     x
  //   </td>
  // ))}

  // need an on/off that shows value if on

  const handleClick = () => {
    console.log('clickeroo');
   // this.setState(prevState => ({
   //   active: !prevState.active
   // }));
  }


  return (
    <table>
      <tbody>
          <tr>
            <td></td>
            <td>
              <Toggle
                active={false}
                value='X'
                onClick={handleClick}
              />
            </td>
            <td></td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>x</td>
            <td>x</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>x</td>
            <td>x</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>x</td>
            <td>x</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
      </tbody>
    </table>
  );
};

PatternResults.propTypes = {
  thePattern: PropTypes.object.isRequired
};

export default PatternResults;
