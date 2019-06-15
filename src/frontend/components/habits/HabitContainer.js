/**
 * ************************************
 *
 * @module HabitContainer.js
 * @author Esther and Bruce
 * @date 6/14/2019
 * @description container component for habit
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HabitDetails from './HabitDetails';
import HabitLog from './HabitLog';
import { toggleHabit } from './actions';

class HabitContainer extends Component {
  constructor() {
    super();
    // this.state = {};
  }

  render() {
    const { toggleHabit, habit, habitIndex } = this.props;
    return (
      <div>
        <HabitDetails />
        <HabitLog log={habit.log} habitIndex={habitIndex} toggleHabit={toggleHabit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  startDate: state.habits.startDate,
  endDate: state.habits.endDate,
  participants: state.habits.participants,
  log: state.habits.log,
});

const mapDispatchToProps = dispatch => bindActionCreators({ toggleHabit }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitContainer);