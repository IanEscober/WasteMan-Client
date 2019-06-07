import React from 'react';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import '../../assets/css/components.css';
import resumeIcon from '../../assets/svg/resumeIcon.svg';

const MonitorButtonToolTip = (
    <Tooltip id="tooltip">
        <strong>Resume Garbage Bin Monitoring</strong>
    </Tooltip>
);

const MonitorButton = ({ monitor, execFetchGarbageBins }) => (
    <div id='monitorButtonContainer'>
        <OverlayTrigger placement="right" overlay={MonitorButtonToolTip}>
            <Button
                disabled={monitor}
                onClick={_ => execFetchGarbageBins('', true)}
            >
                <img src={resumeIcon} alt="Resume Icon" />
            </Button>
        </OverlayTrigger>
    </div>
);

export default MonitorButton;