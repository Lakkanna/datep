import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import DatePicker from "material-ui-pickers/DatePicker";
import LuxonUtils from "material-ui-pickers/utils/luxon-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";

export default class App extends PureComponent {
    state = {
        selectedDate: new Date(),
    }

    handleDateChange = (event, date) => {
        this.setState({ selectedDate: date });
    }

    render() {
        const { selectedDate } = this.state;

        return (
            <MuiPickersUtilsProvider utils={LuxonUtils}>
                <DatePicker
                    fullWidth={true}
                    value={selectedDate}
                    onChange={this.handleDateChange}
                />
                <h1> Datessdsdfdfs</h1>
            </MuiPickersUtilsProvider>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));

