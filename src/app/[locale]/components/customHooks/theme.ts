"use client"
import { useContext } from 'react';
import { themeContext } from '../providers/themeProvider/themeProvider';
import { themeValues } from '@/types/themeValues';

export const useTheme = (): [themeValues, (theme: themeValues) => void] => {
  const { value: theme, setTheme } = useContext(themeContext);
  return [theme, setTheme];
}
