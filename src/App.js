import React, { useState } from 'react';
import './App.css';
import map from './images/Map.png';

const MapOfSchools = ({ components, onComponentClick }) => {
    return (
        <>
            <div className="main-image">
                <img src={map} alt="" />
                <div className="schools">
                    {components.map((component, index) => (
                        <div
                            key={index}
                            className="schools-component"
                            style={{ top: component.position[0], left: component.position[1] }}
                            onClick={() => onComponentClick(component)}
                        >
                            {component.name}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const App = () => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const schoolComponents = [
        { name: '📍', description: 'Secondary school # 69', link: 'https://school69.example', position: ['23%', '9%'] },
        { name: '📍', description: 'School №65', link: 'https://school65.example', position: ['62%', '62%'] },
        { name: '📍', description: 'Secondary school # 14', link: 'https://school14.example', position: ['75%', '60%'] },
        { name: '📍', description: 'Secondary school # 1', link: 'https://school1.example', position: ['57%', '46%'] },
        { name: '📍', description: 'Secondary school # 61', link: 'https://school61.example', position: ['26%', '-4%'] },
        { name: '📍', description: 'Sichovyy Kolehium', link: 'https://sichovyy.example', position: ['62%', '3%'] },
        { name: '📍', description: 'School No. 78', link: 'https://school78.example', position: ['51%', '36%'] },
        { name: '📍', description: 'Specialized school №72', link: 'https://school72.example', position: ['48%', '32%'] },
        { name: '📍', description: 'Children\'s music school # 2', link: 'https://music-school2.example', position: ['47%', '30%'] },
        { name: '📍', description: 'Secondary school № 20', link: 'https://school20.example', position: ['46%', '22%'] },
    ];

    const handleComponentClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className="app">
            <h1>School map</h1>
            <MapOfSchools components={schoolComponents} onComponentClick={handleComponentClick} />
            {selectedComponent && (
                <div className="component-description">
                    <h2>{selectedComponent.description}</h2>
                    <p>Website: <a href={selectedComponent.link} target="_blank" rel="noopener noreferrer">{selectedComponent.link}</a></p>
                </div>
            )}
        </div>
    );
};

export default App;
