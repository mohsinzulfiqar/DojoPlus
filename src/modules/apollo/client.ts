import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from '@apollo/client';
import {
  WORKSPACE_ENDPOINT,
  EIGHT_BASE_PUBLIC_TOKEN,
} from '../../shared/constants';
import { OnTokenEvent } from '../../shared/events/token-event';

/**
 * @param {Function} getToken - Function to get the token.
 * @returns {object} Apollo client.
 */
export function createApolloClient(
  getToken: () => string,
): ApolloClient<NormalizedCacheObject> {
  const httpLink = new HttpLink({
    uri: WORKSPACE_ENDPOINT,
    headers: {
      authorization: `Bearer ${getToken()}`,
    },
  });

  const client = new ApolloClient({
    uri: WORKSPACE_ENDPOINT,
    link: httpLink,
    cache: new InMemoryCache(),
  });
  return client;
}

export const client = createApolloClient(() => {
  const token = OnTokenEvent.get()?.token || EIGHT_BASE_PUBLIC_TOKEN;
  return token;
});
