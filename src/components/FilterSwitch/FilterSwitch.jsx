import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import Switch from 'react-switch';
import { switchOptions } from '../../variables/Variables';
import '../../assets/css/components.css';
import crossedGarbageBinIcon from '../../assets/svg/crossedGarbageBinIcon.svg';
import checkedGarbageBinIcon from '../../assets/svg/checkedGarbageBinIcon.svg';

const FilterToolTip = (filter) => (
    <Tooltip id="tooltip">
        <strong>Filtered By: </strong>
        <br />
        {!filter && 'None'}
        {filter && 'Full Garbage Bins'}
    </Tooltip>
);

const FilterSwitch = ({ filter, switchFilter }) => (
    <div id='filterSwitchContainer'>
        <OverlayTrigger placement="left" overlay={FilterToolTip(filter)}>
            <label htmlFor="filterSwitch">
                <Switch
                    checked={filter}
                    onChange={arg => switchFilter(arg)}
                    id='filterSwitch'
                    checkedIcon={
                        <img src={crossedGarbageBinIcon} alt="Crossed Garbage Bin Icon" />
                    }
                    uncheckedIcon={
                        <img src={checkedGarbageBinIcon} alt="Checked Garbage Bin Icon" />
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

export default FilterSwitch;