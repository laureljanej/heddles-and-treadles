import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/thePatternActions';
import PatternForm from '../PatternForm';
import PatternResults from '../PatternResults';
import TieUp from '../TieUp';

export class Pattern extends React.Component {
  savePattern = () => {
    this.props.actions.savePattern(this.props.thePattern);
  }

  calculatePattern = e => {
    this.props.actions.calculatePattern(this.props.thePattern, e.target.name, e.target.value);
  }

  render() {
    return (
      <div>
        <h1>Pattern</h1>
        <PatternForm
          onSaveClick={this.savePattern}
          onChange={this.calculatePattern}
          thePattern={this.props.thePattern}
        />
      <TieUp thePattern={this.props.thePattern}/>
      </div>
    );
  }
}

Pattern.propTypes = {
  actions: PropTypes.object.isRequired,
  thePattern: PropTypes.object
};

function mapStateToProps(state) {
  return {
    thePattern: state.thePattern
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pattern);
