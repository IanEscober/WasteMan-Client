import React from 'react';

const Adjacency = ({ vertex, neighbors, weights }) => (
    <tr>
        <td>{vertex}</td>
        <td>
            <ul>
                {neighbors.map((neighbor, index) =>
                    <li key={index}>{neighbor}</li>
                )}
            </ul>
        </td>
        <td>
            <ul>
                {weights.map((weight, index) =>
                    <li key={index}>{weight}</li>
                )}
            </ul>
        </td>
    </tr>
);

export default Adjacency;