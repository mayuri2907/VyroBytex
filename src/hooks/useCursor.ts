import { useContext } from 'react';
import { CursorContext } from '../context/cursor-context-instance';

export const useCursor = () => useContext(CursorContext);
