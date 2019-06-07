import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactSpinner from 'react-spinjs-fix';
import { execFetchGarbageBins, switchFilter, selectAngle, execChangeAngle } from '../../actions/index';
import { filterGarbageBins } from '../../helpers/garbageBinsHelpers';
import GarbageBin from '../../components/GarbageBin/GarbageBin';
import MonitorButton from '../../components/MonitorButton/MonitorButton';
import FilterSwitch from '../../components/FilterSwitch/FilterSwitch';
import AnglePicker from '../../components/AnglePicker/AnglePicker';
import { spinnerOptions } from '../../variables/Variables';

class GarbageBins extends Component {
    render() {
        const {
            isFetching, items, monitor, filter, angle,
            execFetchGarbageBins, switchFilter, selectAngle
        } = this.props;

        return (
            <div className="content">
                {isFetching && <ReactSpinner config={spinnerOptions} />}
                {!isFetching &&
                    <Grid fluid>
                        <Row>
                            <Col>
                                <MonitorButton monitor={monitor} execFetchGarbageBins={execFetchGarbageBins} />
                            </Col>
                            <Col>
                                <FilterSwitch filter={filter} switchFilter={switchFilter} />
                            </Col>
                            <Col>
                                <AnglePicker selectAngle={selectAngle} execChangeAngle={execChangeAngle} {...angle} />
                            </Col>
                        </Row>
                        <Row>
                            {items.map(garbageBin =>
                                <GarbageBin
                                    key={garbageBin.name}
                                    {...garbageBin}
                                />
                            )}
                        </Row>
                    </Grid>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { garbageBins, monitor, filter, angle } = state;
    const { isFetching, items } = filterGarbageBins(garbageBins, filter);

    return { isFetching, items, monitor, filter, angle };
}

const mapDispatchToProps = dispatch => ({
    execFetchGarbageBins: (source, shouldToggle) => dispatch(execFetchGarbageBins(source, shouldToggle)),
    switchFilter: filter => dispatch(switchFilter(filter)),
    selectAngle: angle => dispatch(selectAngle(angle))
});

export default connect(mapStateToProps, mapDispatchToProps)(GarbageBins);