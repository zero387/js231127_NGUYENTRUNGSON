// AuthProvider.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  return (
    <AuthContext.Provider value={[]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
