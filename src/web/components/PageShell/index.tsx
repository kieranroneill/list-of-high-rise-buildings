import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch, bindActionCreators } from 'redux';
import styled from 'styled-components';

// Action creators.
import { getCities } from '../../store/cities/actionsCreators';

// Components.
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Store.
import { CallApiAction } from '../../store/api/types';

// Styles.
import palette from '../../styles/palette';

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5rem;
`;
const Header = styled.div`
  padding: 2rem;
`;
const Wrapper = styled.div`
  background-color: ${palette.greyScale.grey};
  min-height: 100%;
`;

const styles = {
    button: {
        margin: '0.5rem',
    },
};

export interface Props {
    children: React.ReactNode;
    getCities: () => CallApiAction;
}

export class PageShell extends React.PureComponent<Props> {
    public componentDidMount(): void {
        this.props.getCities();
    }

    static getButton(label: string, link: string): React.ReactNode {
        return (
            <Button
                color="primary"
                component={(props: any) => <Link to={link} {...props} />}
                style={styles.button}
                variant="contained"
            >
                {label}
            </Button>
        );
    }

    public render(): React.ReactElement<PageShell> {
        const { children } = this.props;

        return (
            <Wrapper>
                <Header>
                    <Typography
                        gutterBottom
                        variant="display1"
                    >
                        List of high rise buildings
                    </Typography>
                    <Paper>
                        <ButtonContainer>
                            {PageShell.getButton('#', '/id')}
                            {PageShell.getButton('City', '/city')}
                            {PageShell.getButton('Country', '/country')}
                            {PageShell.getButton('All Buildings', '/all-buildings')}
                            {PageShell.getButton('100m+', '/100+')}
                            {PageShell.getButton('150m+', '/150+')}
                            {PageShell.getButton('200m+', '/200+')}
                            {PageShell.getButton('300m+', '/300+')}
                        </ButtonContainer>
                    </Paper>
                </Header>
                {children}
            </Wrapper>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getCities: bindActionCreators(getCities, dispatch),
});

export default connect(undefined, mapDispatchToProps)(PageShell);
