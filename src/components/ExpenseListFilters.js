import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />

        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              // console.log('sorted by date', props);
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              // console.log('sorted by amount', props);
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

// const ExpenseListFilters = (props) => {
//   return (
//     <div>
//       <input
//         type='text'
//         value={props.filters.text}
//         onChange={(e) => {
//           props.dispatch(setTextFilter(e.target.value));
//         }}
//       />

//       <select
//         value={props.filters.sortBy}
//         onChange={(e) => {
//           if (e.target.value === 'date') {
//             console.log('sorted by date', props);
//             props.dispatch(sortByDate());
//           } else if (e.target.value === 'amount') {
//             console.log('sorted by amount', props);
//             props.dispatch(sortByAmount());
//           }
//         }}
//       >
//         <option value='date'>Date</option>
//         <option value='amount'>Amount</option>
//       </select>
//     </div>
//   );
// };

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
