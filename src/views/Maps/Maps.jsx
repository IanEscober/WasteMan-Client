import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSpinner from 'react-spinjs-fix';
import { switchMarker } from '../../actions/index';
import TargetArea from '../../components/TargetArea/TargetArea';
import MarkerSwitch from '../../components/MarkerSwitch/MarkerSwitch';
import { spinnerOptions } from '../../variables/Variables';
import '../../assets/css/components.css';

class Maps extends Component {
  render() {
    const {
      marker, isFetching, items,
      switchMarker
    } = this.props;
    return (
      <div className="content">
        {isFetching && <ReactSpinner config={spinnerOptions} />}
        {!isFetching &&
          <div>
            <MarkerSwitch marker={marker} switchMarker={switchMarker} />

            <TargetArea
              googleMapURL={window._env_.REACT_APP_GOOGLE_MAPS_API_URL}
              loadingElement={<div className='mapElements' />}
              containerElement={<div className='mapElements' />}
              mapElement={<div className='mapElements' />}
              markerView={marker}
              {...items}
            />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { result, marker } = state
  const { isFetching, items } = result;

  return { marker, isFetching, items };
};

const mapDispatchToProps = dispatch => ({
  switchMarker: arg => dispatch(switchMarker(arg))
})

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
