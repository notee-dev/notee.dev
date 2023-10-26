import './footer.scss'
import Link from 'next/link'

export default function Component(){
    return (
        <footer className="backdrop-blur-lg backdrop-saturate-150 text-center">
            <span className="block text-sm py-7"><b>© 2023 <Link href="/" className="hover:underline">NotEe</Link>. All Rights Reserved.</b></span>
        </footer>
    )
}
