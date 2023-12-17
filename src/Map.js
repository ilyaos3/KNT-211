import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';

const Map = ({schools}) => {
    const [viewport, setViewport] = useState({
        latitude: 47.2220, // Set your initial latitude
        longitude: 35.2351, // Set your initial longitude
        zoom: 12,
    });

    const [selectedSchool, setSelectedSchool] = useState(null);

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoicGhpbHlhYTMiLCJhIjoiY2xqMXd0c3h0MHk4NDNucDljNzlsNWNxNCJ9.cCBmD-mVdF85QhrOku8hcQ"
            onViewportChange={(newViewport) => setViewport(newViewport)}
        >
            {schools.map((school) => (
                <Marker
                    key={school.id}
                    latitude={school.latitude}
                    longitude={school.longitude}
                >
                    <button
                        className="marker-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedSchool(school);
                        }}
                    >
                        <img src="/marker.png" alt="School Marker"/>
                    </button>
                </Marker>
            ))}

            {selectedSchool && (
                <Popup
                    latitude={selectedSchool.latitude}
                    longitude={selectedSchool.longitude}
                    onClose={() => setSelectedSchool(null)}
                >
                    <div>
                        <h2>{selectedSchool.name}</h2>
                        <p>{selectedSchool.address}</p>
                        <a href={selectedSchool.officialWebsite} target="_blank" rel="noopener noreferrer">
                            Official Website
                        </a>
                    </div>
                </Popup>
            )}
        </ReactMapGL>
    );
};

export default Map;
