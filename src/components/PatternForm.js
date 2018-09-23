import React from 'react';
import {func} from 'prop-types';
import TextInput from './TextInput';
import {thePattern} from '../types';

const PatternForm = ({thePattern, onSaveClick, onChange}) => (
  <div>
    <h2>Create / Edit Pattern</h2>
    <table>
      <tbody>
        <tr>
          <td><label htmlFor="heddles">Heddles</label></td>
          <td><TextInput onChange={onChange} name="heddles" value={thePattern.heddles}/>
          </td>
        </tr>
        <tr>
          <td><label htmlFor="treadles">Treadles</label></td>
          <td><TextInput onChange={onChange} name="treadles" value={thePattern.treadles}/>
          </td>
        </tr>
        <tr>
          <td><label>Date Modified</label></td>
          <td>{thePattern.dateModified}</td>
        </tr>
      </tbody>
    </table>
    <input type="submit" value="Save" onClick={onSaveClick}/>
  </div>
);

PatternForm.propTypes = {
  onSaveClick: func.isRequired,
  onChange: func.isRequired,
  thePattern: thePattern.isRequired
};

export default PatternForm;
