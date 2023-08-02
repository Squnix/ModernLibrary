"use client"

import { useState } from 'react';
import { useTheme } from '../../customHooks/theme';
import { themeValues, themesList } from "@/types/themeValues";
import ThemeChangeModal from './themeChangeModal';

export default function ThemeChangeComponent() {
  const [theme, setTheme] = useTheme();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='relative'>
      <button onClick={() => setShowModal(state => !state)} >{theme}</button>
      {showModal && <ThemeChangeModal list={Object.keys(themesList) as themeValues[]} setTheme={setTheme} currentTheme={theme} />}
    </div>
  )
}
