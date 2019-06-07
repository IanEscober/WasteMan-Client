import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import '../../../node_modules/react-datepicker/dist/react-datepicker.css';
import '../../assets/css/components.css';
import '../../assets/css/datePicker.css';

const DatePickerToolTip = (
    <Tooltip id="tooltip">
        <strong>Check Records</strong>
    </Tooltip>
);

const DatePicker = ({ date, selectDate, execFetchResult, execFetchGarbageBins }) => (
    <div id='datePickerContainer'>
        <OverlayTrigger placement="right" overlay={DatePickerToolTip}>
            <div id='datePickerPopOut'>
                <ReactDatePicker
                    selected={date}
                    onChange={date => {
                        selectDate(date);
                        execFetchGarbageBins(date.format('YYYY-MM-DD'), false);
                        execFetchResult(date.format('YYYY-MM-DD'));
                    }}
                />
            </div>
        </OverlayTrigger>
    </div>
);

export default DatePicker;