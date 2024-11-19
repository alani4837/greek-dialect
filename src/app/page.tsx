'use client'

import { useEffect } from 'react';
import DialectTranslator from '../components/DialectTranslator';
import DialectQuiz from '../components/DialectQuiz';
import LanguageSwitcher from '../components/LanguageSwitcher';
import '../lib/i18n';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Home() {
  useEffect(() => {
    require('../lib/i18n');
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">     
      <div className="flex justify-end mb-4">
        <LanguageSwitcher />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <DialectTranslator />
        <DialectQuiz />
      </div>
      {/* <button className='flex justify-start mb-2'>
        <DarkModeToggle />
      </button>       */}
    </main>
  )
}