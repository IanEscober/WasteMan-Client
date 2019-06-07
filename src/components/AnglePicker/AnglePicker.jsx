import React from "react";
import { SplitButton, MenuItem, OverlayTrigger, Tooltip } from "react-bootstrap";
import { angles } from '../../variables/Variables';
import '../../assets/css/components.css';
import '../../assets/css/sourceDropDown.css';

const AnglePickerToolTip = (angle) => (
    <Tooltip id="tooltip">
        <strong>Change Overflow Angle Limit To: </strong>
        {angle}
    </Tooltip>
);

const AnglePicker = ({ toggle, angle, selectAngle, execChangeAngle }) => (
    <div id='anglePickerContainer'>
        <OverlayTrigger placement="left" overlay={AnglePickerToolTip(angle)}>
            <SplitButton
                title={angle}
                id={'Angles'}
                pullRight
                onClick={evt => execChangeAngle(evt.target.innerText)}
                disabled={toggle}
            >
                {angles.map(angle =>
                    <MenuItem
                        key={angle}
                        eventKey={angle}
                        onSelect={key => selectAngle(key)}
                    >
                        {angle}
                    </MenuItem>
                )}
            </SplitButton>
        </OverlayTrigger>
    </div>
);

export default AnglePicker;