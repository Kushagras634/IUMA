import { createAction } from '@reduxjs/toolkit';

export const login = createAction('auth/login');
export const logout = createAction('auth/logout');