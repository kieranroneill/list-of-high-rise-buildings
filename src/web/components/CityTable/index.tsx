import { History } from 'history';
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
  padding: 0 2rem 2rem;
`;

export interface Props {
    citiesState: CitiesState;
    history: History;
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
                                <TableCell>
                                    <TableSortLabel
                                        active={props.history.location.pathname === '/id'}
                                        direction={'asc'}
                                    >
                                        #
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.history.location.pathname === '/city'}
                                        direction={'asc'}
                                    >
                                        City
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.history.location.pathname === '/country'}
                                        direction={'asc'}
                                    >
                                        Country
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.history.location.pathname === '/all-buildings'}
                                        direction={'asc'}
                                    >
                                        All Buildings
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.history.location.pathname === '/100+'}
                                        direction={'asc'}
                                    >
                                        100m+
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.history.location.pathname === '/150+'}
                                        direction={'asc'}
                                    >
                                        150m+
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.history.location.pathname === '/200+'}
                                        direction={'asc'}
                                    >
                                        200m+
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={props.history.location.pathname === '/300+'}
                                        direction={'asc'}
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
                                        switch (props.history.location.pathname) {
                                            case '/city':
                                                return a.name.localeCompare(b.name);
                                            case '/country':
                                                return a.country.localeCompare(b.country);
                                            case '/all-buildings':
                                                return a.allBuildings - b.allBuildings;
                                            case '/100+':
                                                return a['100m+'] - b['100m+'];
                                            case '/150+':
                                                return a['150m+'] - b['150m+'];
                                            case '/200+':
                                                return a['200m+'] - b['200m+'];
                                            case '/300+':
                                                return a['300m+'] - b['300m+'];
                                            default:
                                                return a.id - b.id; // Default to city name.
                                        }
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
