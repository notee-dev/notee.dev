import { Analytics } from '@vercel/analytics/react';
import { Providers } from "./providers";

export default function RootLayout({ children }) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <head>
                <title>NotEe</title>
                <meta name="description" content="Portfolio of NotEe, self-taught full stack developer." />
                <meta name="keywords" content="notee, NotEe, développeur, developer, portfolio, full stack, frontend, backend" />
                <link rel="canonical" href="https://notee.dev/" />
                
                <link rel="icon shortcut" href="/images/favicon/favicon.ico" type="image/x-icon"/>
                <link rel="apple-touch-icon" href="/images/favicon/57x57.png" sizes="57x57"/>
                <link rel="apple-touch-icon" href="/images/favicon/60x60.png" sizes="60x60"/>
                <link rel="apple-touch-icon" href="/images/favicon/72x72.png" sizes="72x72"/>
                <link rel="apple-touch-icon" href="/images/favicon/76x76.png" sizes="76x76"/>
                <link rel="apple-touch-icon" href="/images/favicon/114x114.png" sizes="114x114"/>
                <link rel="apple-touch-icon" href="/images/favicon/120x120.png" sizes="120x120"/>
                <link rel="apple-touch-icon" href="/images/favicon/144x144.png" sizes="144x144"/>
                <link rel="apple-touch-icon" href="/images/favicon/152x152.png" sizes="152x152"/>
                <link rel="apple-touch-icon" href="/images/favicon/180x180.png" sizes="180x180"/>

                <meta property="og:title" content="NotEe" />
                <meta property="og:description" content="Portfolio of NotEe, self-taught full stack developer." />
                <meta property="og:url" content="https://www.notee.dev/" />
                <meta property="og:site_name" content="NotEe" />
                <meta property="og:locale" content="fr_FR" />
                <meta property="og:image" content="https://www.notee.dev/images/og.png" />
                <meta property="og:type" content="website" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="NotEe" />
                <meta name="twitter:description" content="Portfolio of NotEe, self-taught full stack developer." />
                <meta name="twitter:image" content="https://www.notee.dev/images/og.png" />
            </head>
            <body>
                <Providers>
                    {children}
                </Providers>
                <Analytics/>
            </body>
        </html>
    )
}
