import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Switch from 'react-switch';
import { switchOptions } from '../../variables/Variables';
import '../../assets/css/components.css';
import markerPinIcon from '../../assets/svg/markerPinIcon.svg';
import garbageBinIcon from '../../assets/svg/garbageBinIcon.svg'

const MarkerToolTip = (marker) => (
    <Tooltip id="tooltip">
        <strong>Marker View: </strong>
        <br />
        {!marker && 'Garbage Bins'}
        {marker && 'Intersection Points'}
    </Tooltip>
);

const MarkerSwitch = ({ marker, switchMarker }) => (
    <div id='markerSwitchContainer'>
        <OverlayTrigger placement="left" overlay={MarkerToolTip(marker)}>
            <label htmlFor="markerSwitch">
                <Switch
                    checked={marker}
                    onChange={arg => switchMarker(arg)}
                    id='markerSwitch'
                    checkedIcon={
                        <img src={markerPinIcon} alt="Marker Pin Icon" />
                    }
                    uncheckedIcon={
                        <img src={garbageBinIcon} alt="Garbage Bin Icon" />
                    }
                    onColor={switchOptions.onColor}
                    offColor={switchOptions.offColor}
                    height={switchOptions.height}
                    width={switchOptions.width}
                />
            </label>
        </OverlayTrigger>
    </div>
);

export default MarkerSwitch;