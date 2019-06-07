import React from 'react';

const Route = ({ source, routes, distances, destination }) => (
    <tr>
        <td>{source}</td>
        <td>
            <ul>
                {routes.map((route, index) =>
                    <li key={index}>{route}</li>
                )}
            </ul>
        </td>
        <td>
            <ul>
                {distances.map((distance, index) =>
                    <li key={index}>{distance}</li>
                )}
            </ul>
        </td>
        <td>{destination}</td>
    </tr>
);

export default Route;