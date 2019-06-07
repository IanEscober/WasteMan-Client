import React from 'react';
import { Table } from 'react-bootstrap';
import { Card } from '../../components/Card/Card';
import Route from '../../components/Route/Route';
import { coalesce } from '../../helpers/coalesceHelpers';

const MDFSResult = ({ collectionRoutes, shortestCollectionRoute, mdfsTotalDistance, possiblePathsFound }) => (
    <div className="content">
        <Card
            title="Depth-First Search Result"
            category={
                <div>
                    <p>
                        {'Shortest Collection Route: ' + coalesce(shortestCollectionRoute, '')}
                        <br />
                        {'Length (m): ' + coalesce(mdfsTotalDistance, '')}
                        <br />
                        {'Number of Possible Routes Found: ' + coalesce(possiblePathsFound, '')}
                    </p>
                </div>
            }
            ctTableFullWidth
            ctTableResponsive
            content={
                <Table striped hover>
                    <thead>
                        <tr>
                            <td>Source</td>
                            <td>Routes (Rn - Shortest 5)</td>
                            <td>Length (m)</td>
                            <td>Destination</td>
                        </tr>
                    </thead>
                    <tbody>
                        {collectionRoutes !== undefined && collectionRoutes.map(route =>
                            <Route
                                key={route.source}
                                {...route}
                            />
                        )}
                    </tbody>
                </Table>
            }
        />
    </div>
);

export default MDFSResult;