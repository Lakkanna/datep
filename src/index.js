import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import LuxonUtils from "material-ui-pickers/utils/luxon-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DatePicker from "material-ui-pickers/DatePicker/DatePickerModal";
import {TextField} from "@material-ui/core";
import {Container} from "./IndexStyledComponent";

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: "",
            errorText: ""
        };
    }

    helperText(event) {
        if (event.value.match(/^\d+$/)) {
                this.setState({
                errorText: ""
            });
            return false;
        }
        else {
            this.setState({
                errorText: "Input field takes only numbers..!"
            });
            return true;
        }
    }
    render() {
        return (
            <Container>
                <MuiPickersUtilsProvider utils={LuxonUtils}>
                    <DatePicker
                        InputAdornmentProps={{
                            placeholder: "some text"
                        }}
                        label="Date demo"
                        container="inline"
                        autoOk={true}
                        hint="hint"
                        format="yyyy-MM-dd"
                        maxDate="2019-01-01"
                        fullWidth={true}
                        value={null}
                        onChange={(date) => {
                            console.log(date.day);
                        }}

                    />
                </MuiPickersUtilsProvider>
                    <TextField
                        label="enter number"
                        error={this.state.errorText !== ""}
                        helperText={this.state.errorText}
                        onChange={(event) => {
                            this.helperText({value: event.target.value});
                        }}
                    />
            </Container>
        );
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
