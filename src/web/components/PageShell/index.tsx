import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

// Action creators.
import { getCities } from '../../store/cities/actionsCreators';

// Store.
import { CallApiAction } from '../../store/api/types';

export interface Props {
    children: React.ReactNode;
    getCities: () => CallApiAction;
}

export class PageShell extends React.PureComponent<Props> {
    public componentDidMount(): void {
        this.props.getCities();
    }

    public render(): React.ReactElement<PageShell> {
        const { children } = this.props;

        return (
            <>
                {children}
            </>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getCities: bindActionCreators(getCities, dispatch),
});

export default connect(undefined, mapDispatchToProps)(PageShell);
