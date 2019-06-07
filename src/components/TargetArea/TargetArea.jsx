import React from "react";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polyline,
    Polygon
} from "react-google-maps";
import {
    mapOptions,
    area,
    areaOptions,
    roads,
    roadsOptions,
    bins,
    resultOptions,
    points,
    garbageBinIconOptions
} from '../../variables/Variables';
import garbageBinIcon from '../../assets/icon/garbageBinIcon.ico';

const TargetArea = withScriptjs(withGoogleMap(({ markerView, coordinates }) => (
    <GoogleMap {...mapOptions}>
        <Polygon 
            paths={area} 
            defaultOptions={areaOptions} 
        />

        {roads.map((road, i) => 
            <Polyline 
                key={i} 
                path={road} 
                defaultOptions={roadsOptions} 
            />
        )}

        {!markerView && bins.map((bin, i) =>
            <Marker
                key={i}
                position={bin.position}
                label={bin.label}
                icon={{ 
                    url: garbageBinIcon, 
                    ...garbageBinIconOptions
                }}
            />
        )}

        {markerView && points.map((point, i) =>
            <Marker
                key={i}
                position={point.position}
                label={point.label}
            />
        )}

        {coordinates !== undefined && 
            <Polyline 
                path={coordinates} 
                defaultOptions={resultOptions} 
            />
        }
    </GoogleMap>

)));

export default TargetArea;