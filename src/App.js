import React, { PureComponent } from 'react';
import DatePicker from 'material-ui-pickers/DatePicker';
export default class App extends PureComponent {
    state = {
        selectedDate: new Date(),
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    }

    render() {
        const { selectedDate } = this.state;

        return (
            <div>
                <DatePicker
                    value={new Date()}
                    onChange={function (event) {
                        console.log(event);
                    }}
                />
                <h1> Datessdsdfdfs</h1>
            </div>
        );
    }
}

