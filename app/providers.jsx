'use client';
import { ThemeProvider } from 'next-themes'
import './globals.scss'

import Navbar from '@/src/components/navbar/navbar'
import Footer from '@/src/components/footer/footer'

export function Providers({children}) {
    return (
        <ThemeProvider enableSystem={true}>
            <Navbar/>
            {children}
            <Footer/>
        </ThemeProvider>
    )
}
