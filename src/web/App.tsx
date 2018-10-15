import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Store } from 'redux';
import { injectGlobal } from 'styled-components';

// Components.
import CityTable from './components/CityTable';
import PageShell from './components/PageShell';

// Store.
import { ApplicationState, configureStore } from './store';

// Styles.
import palette from './styles/palette';

injectGlobal`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    width: 100%;
  }
  
  h1,
  h2,
  h3,
  h4,
  p,
  a {
    color: ${palette.greyScale.black};
    font-weight: 400;
    margin: 0;
  }
    
  h1 {
    font-size: 3.2rem;
  }
    
  h2 {
    font-size: 2.5rem;
  }
    
  h3 {
    font-size: 1.8rem;
  }
    
  h4 {
    font-size: 1.3rem;
  }
    
  a,
  p {
    font-size: 1rem;
  }
    
  a {
    display: inline-block;
    text-decoration: none;
    transition: all 250ms ease-in-out;
        
    &:hover {
      color: ${palette.greyScale.grey};
    }
  }
`;

const store: Store<ApplicationState> = configureStore();

export const App: React.SFC = () => (
    <Provider store={store}>
        <BrowserRouter>
            <PageShell>
                <Switch>
                    <Route
                        exact
                        path='/city'
                        component={ CityTable } />
                    <Redirect
                        from="*"
                        to="/city" />
                </Switch>
            </PageShell>
        </BrowserRouter>
    </Provider>
);
