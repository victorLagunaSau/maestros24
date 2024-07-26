import "../styles/tailwind.css";
import "../styles/slick.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// Configuración del cliente de Apollo
const client = new ApolloClient({
  uri: 'https://graphql.pathbooks.app', // Reemplaza con la URL de tu servidor GraphQL
  cache: new InMemoryCache()

});

function MyApp({ Component, pageProps }) {
  return (
      <>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </>
  );
}

export default MyApp;
