import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export const createStore = (name, fn) =>
  create(immer(devtools(fn, { name })));