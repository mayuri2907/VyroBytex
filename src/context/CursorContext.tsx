import React, { useState, useCallback } from 'react';
import { CursorContext } from './cursor-context-instance';
import type { CursorMode } from './cursor-context-instance';

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<CursorMode>('default');
  const [label, setLabel] = useState<string | null>(null);

  const setCursorMode = useCallback((newMode: CursorMode, newLabel: string | null = null) => {
    setMode(newMode);
    setLabel(newLabel);
  }, []);

  const resetCursor = useCallback(() => {
    setMode('default');
    setLabel(null);
  }, []);

  return (
    <CursorContext.Provider value={{ mode, label, setCursorMode, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};
