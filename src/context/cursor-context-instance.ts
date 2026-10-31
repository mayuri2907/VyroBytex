import { createContext } from 'react';

export type CursorMode = 'default' | 'pointer' | 'explore' | 'view' | 'drag' | 'hidden';

export interface CursorContextValue {
  mode: CursorMode;
  label: string | null;
  setCursorMode: (mode: CursorMode, label?: string | null) => void;
  resetCursor: () => void;
}

export const CursorContext = createContext<CursorContextValue>({
  mode: 'default',
  label: null,
  setCursorMode: () => {},
  resetCursor: () => {},
});
