import React from 'react';
import { Table } from 'react-bootstrap';
import { Card } from '../../components/Card/Card';
import Adjacency from '../Adjacency/Adjacency';
import { coalesce } from '../../helpers/coalesceHelpers';

const SPFResult = ({ adjacencyList, shortestSequence, spfTotalDistance }) => (
    <div className="content">
        <Card
            title="Shortest Path First Result"
            category={
                <div>
                    <p>
                        {'Shortest Sequence (Bn): ' + coalesce(shortestSequence, '')}
                        <br />
                        {'Length (m): ' + coalesce(spfTotalDistance, '')}
                    </p>
                </div>
            }
            ctTableFullWidth
            ctTableResponsive
            content={
                <Table striped hover>
                    <thead>
                        <tr>
                            <td>Vertex</td>
                            <td>Neighbors</td>
                            <td>Weight (m)</td>
                        </tr>
                    </thead>
                    <tbody>
                        {adjacencyList !== undefined && adjacencyList.map(adjacency =>
                            <Adjacency
                                key={adjacency.vertex}
                                {...adjacency}
                            />
                        )}
                    </tbody>
                </Table>
            }
        />
    </div>
);

export default SPFResult;