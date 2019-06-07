import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Graph from 'react-chartist';
import Gauge from 'react-gauge-animated';
import ToolTip from 'chartist-plugin-tooltips-updated';
import PointLabel from 'chartist-plugin-pointlabels';
import { Card } from '../../components/Card/Card';
import { coalesce } from '../../helpers/coalesceHelpers';
import { graphOptions, toolTipOptions, pointLabelOptions, gaugeOptions } from '../../variables/Variables';
import '../../assets/css/chartistToolTip.css';
import '../../assets/css/components.css';

const GarbageBin = ({ name, location, lidState, lidStateTimeStamp, level, ticks, values }) => (
    <div className="content">
        <Row>
            <Col md={8}>
                <Card
                    title={'Garbage Bin ' + name}
                    category={
                        <div>
                            <p>
                                {'Latitude: ' + coalesce(location, 'locating...', 'latitude')}
                                <br />
                                {'Longitude: ' + coalesce(location, 'locating...', 'longitude')}
                            </p>
                        </div>
                    }
                    content={
                        <div id='graphContainer'>
                            <Graph
                                data={{
                                    labels: coalesce(ticks, []),
                                    series: [coalesce(values, [])]
                                }}
                                type='Line'
                                options={{
                                    ...graphOptions(coalesce(ticks, [])),
                                    plugins: [
                                        ToolTip(toolTipOptions),
                                        PointLabel(pointLabelOptions)
                                    ]
                                }}
                            />
                        </div>
                    }
                />
            </Col>
            <Col md={4}>
                <Card
                    content={
                        <div id='lidStateContainer'>
                            <div id='gaugeContainer'>
                                <Gauge
                                    options={gaugeOptions}
                                    value={level}
                                />
                            </div>
                            <div>
                                <br />
                                <p>Lid State: {lidState}</p>
                                <p>Lid State Time Stamp: {lidStateTimeStamp}</p>
                            </div>
                        </div>
                    }
                />
            </Col>
        </Row>
    </div>
);

export default GarbageBin;