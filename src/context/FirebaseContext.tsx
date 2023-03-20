import React, { createContext, useContext } from 'react';
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const FireBaseContext: any = createContext({
  authUser: null,
  loading: true,
  signInWithGoogle: async () => {},
  signInWithEmailAndPassword: async () => {},
  createUserWithEmailAndPassword: async () => {},
  passwordReset: async () => {},
  signOut: async () => {},
  getAuthToken: async () => {},
  sendVerificationEmail: async () => {},
});

/**
 * @description - get Profile after send page to browser.
 * @param props - 
 * @param props.children - Children.
 * @returns - Return user profile basic data like username and avatar.
 */
export function FireBaseAuthProvider({ children }): React.ReactElement {
  const auth = useFirebaseAuth();
  return (
    <FireBaseContext.Provider value={auth}>{children}</FireBaseContext.Provider>
  );
}

export const useFireBaseAuth: any = () => useContext(FireBaseContext);
