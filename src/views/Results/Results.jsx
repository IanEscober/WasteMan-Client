import React, { Component } from "react";
import { connect } from 'react-redux';
import { Grid, Row, Col } from "react-bootstrap";
import ReactSpinner from 'react-spinjs-fix';
import { execFetchGarbageBins, execFetchResult, selectSource, selectDate } from '../../actions/index';
import SPFResult from '../../components/SPFResult/SPFResult';
import MDFSResult from '../../components/MDFSResult/MDFSResult';
import SourcePicker from '../../components/SourcePicker/SourcePicker';
import DatePicker from '../../components/DatePicker/DatePicker';
import { spinnerOptions } from '../../variables/Variables';

class Results extends Component {
    render() {
        const {
            isFetching, items, source,
            execFetchGarbageBins, execFetchResult, selectSource, date, selectDate
        } = this.props;

        return (
            <div className="content">
                {isFetching && <ReactSpinner config={spinnerOptions} />}
                {!isFetching &&
                    <Grid fluid>
                        <Row>
                            <Col>
                                <DatePicker
                                    date={date}
                                    selectDate={selectDate}
                                    execFetchGarbageBins={execFetchGarbageBins}
                                    execFetchResult={execFetchResult}
                                />
                            </Col>
                            <Col>
                                <SourcePicker
                                    selectSource={selectSource}
                                    execFetchResult={execFetchResult}
                                    execFetchGarbageBins={execFetchGarbageBins}
                                    {...source}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <SPFResult {...items} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <MDFSResult {...items} />
                            </Col>
                        </Row>
                    </Grid>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { result, source, date } = state;
    const { isFetching, items } = result;

    return { isFetching, items, source, date };
}

const mapDispatchToProps = dispatch => ({
    execFetchGarbageBins: (source, shouldToggle) => dispatch(execFetchGarbageBins(source, shouldToggle)),
    execFetchResult: source => dispatch(execFetchResult(source)),
    selectSource: source => dispatch(selectSource(source)),
    selectDate: date => dispatch(selectDate(date))
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);