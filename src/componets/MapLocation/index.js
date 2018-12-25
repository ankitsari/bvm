import React  from 'react';
import {  compose, withProps, withStateHandlers  } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";

const MapLocation = compose(
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        })
    }),
        withProps({

        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyCGDEPhy2IjlQko3TMhdLpxlO5BqB5aIKY",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,

    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 21.2364173, lng: 72.8617471 }}
    >
        <InfoBox
            defaultPosition={new window.google.maps.LatLng(21.2364173, 72.8617471)}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
            <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `12px`,width:`150px`,height:`100px`}}>
                <div style={{ fontSize: `13px`, fontColor: `#08233B`,fontWeight:"bold" }}>
                    BVM Infotech
                    <p style={{fontSize:11,lineHeight:"20px"}}>
                        314 Amora Arcade, nr Shangrila Heights,Utran, Surat, Gujrat.
                    </p>
                </div>
            </div>
        </InfoBox>
        <Marker
            position={{ lat: 21.2364173, lng: 72.8617471}}
            onClick={props.onToggleOpen}
        >

        </Marker>
    </GoogleMap>

));
export default (MapLocation );

