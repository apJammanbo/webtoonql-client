import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <HashRouter>
          <main>
            <Route exact={true} path={"/"} component={Home} />
          </main>
      </HashRouter>
      </ApolloProvider>
    );
  }
}

export default App;
