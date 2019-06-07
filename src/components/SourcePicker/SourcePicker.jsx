import React from "react";
import { SplitButton, MenuItem, OverlayTrigger, Tooltip } from "react-bootstrap";
import { points } from '../../variables/Variables';
import '../../assets/css/sourceDropDown.css';
import '../../assets/css/components.css';

const SourcePickerToolTip = (source) => (
    <Tooltip id="tooltip">
        <strong>Perform Algorithm Starting In: </strong>
        {source}
    </Tooltip>
);

const SourcePicker = ({ toggle, source, selectSource, execFetchResult, execFetchGarbageBins }) => (
    <div id='sourcePickerContainer'>
        <OverlayTrigger placement="left" overlay={SourcePickerToolTip(source)}>
            <SplitButton
                title={source}
                id={'Sources'}
                pullRight
                onClick={evt => { execFetchResult(evt.target.innerText); execFetchGarbageBins('', false); }}
                disabled={toggle}
            >
                {points.map(point =>
                    <MenuItem
                        key={point.label}
                        eventKey={point.label}
                        onSelect={key => selectSource(key)}
                    >
                        {point.label}
                    </MenuItem>
                )}
            </SplitButton>
        </OverlayTrigger>
    </div>
);

export default SourcePicker;