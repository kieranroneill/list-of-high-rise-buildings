import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Components.
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

// Store.
import { ApplicationState } from '../../store';
import { CitiesState } from '../../store/cities/types';

const Wrapper = styled.div`
  padding: 2rem;
`;

export interface Props {
    citiesState: CitiesState;
    orderBy?: '100m+' | '150m+' | '200m+' | '300m+';
}

export const CityTable: React.SFC<Props> = (props: Props) => (
    <Wrapper>
        <Paper>
            {
                props.citiesState.loading ?
                    <CircularProgress size={50} /> :
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Country</TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={!props.orderBy}
                                        direction={'desc'}
                                    >
                                        All Buildings
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.orderBy === '100m+'}
                                        direction={'desc'}
                                    >
                                        100m+
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.orderBy === '150m+'}
                                        direction={'desc'}
                                    >
                                        150m+
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.orderBy === '200m+'}
                                        direction={'desc'}
                                    >
                                        200m+
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.orderBy === '300m+'}
                                        direction={'desc'}
                                    >
                                        300m+
                                    </TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                props.citiesState.cities
                                    .sort((a: City, b: City) => {
                                        if (!props.orderBy) {
                                            return b.allBuildings - a.allBuildings; // Default to all buildings.
                                        }

                                        return b[props.orderBy] - a[props.orderBy];
                                    })
                                    .map((row: City) => (
                                        <TableRow key={row.name.replace(/[\s_]+/g, '-').toLowerCase()}>
                                            <TableCell
                                                component="th"
                                                scope="row"
                                            >
                                                {row.id}
                                            </TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.country}</TableCell>
                                            <TableCell numeric>{row.allBuildings}</TableCell>
                                            <TableCell numeric>{row['100m+']}</TableCell>
                                            <TableCell numeric>{row['150m+']}</TableCell>
                                            <TableCell numeric>{row['200m+']}</TableCell>
                                            <TableCell numeric>{row['300m+']}</TableCell>
                                        </TableRow>
                                    ))
                            }
                        </TableBody>
                    </Table>
            }
        </Paper>
    </Wrapper>
);

const mapStateToProps = (state: ApplicationState) => ({
    citiesState: state.cities,
});

export default connect(mapStateToProps)(CityTable);
