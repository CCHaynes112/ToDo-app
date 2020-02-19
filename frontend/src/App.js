import React from 'react';
import Container from '@material-ui/core/Container';

import {ApolloProvider} from 'react-apollo';
import ApolloClient from "apollo-boost";

import Homepage from './pages/Homepage';
import Header from './components/Header';


const client = new ApolloClient({
  uri: "http://localhost:8000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Container>
        <Homepage />
      </Container>
    </ApolloProvider>
  );
}

export default App;
