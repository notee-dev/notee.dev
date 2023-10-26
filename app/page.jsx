import './page.scss'
import Link from 'next/link'
import { Button } from '@nextui-org/react'; 
import { IconBrandGithub, IconBrandX, IconMail } from '@tabler/icons-react';

export default function Home() {
    return (
        <div id="hero" className="w-full mx-auto mx-auto">
            <div className="wrapper">
                <div className="text">
                    <h1>Hey there! I'm - NotEe</h1>
                    <p><b>Self-taught <u>full stack</u></b> developer.</p>
                    <div className="actions">
                        <Link href="https://github.com/lucasdesca">
                            <Button startContent={<IconBrandGithub/>} className='notee-link'>
                                Github
                            </Button>
                        </Link>
                        <Link href="https://x.com/itsnotee">
                            <Button startContent={<IconBrandX/>} className='notee-link'>
                                X.com
                            </Button>
                        </Link>
                        <Link href="mailto:contact@notee.dev">
                            <Button startContent={<IconMail/>} className='notee-link'>
                                contact@notee.dev
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
