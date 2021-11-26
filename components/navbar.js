import Link from 'next/link';

export default function Navbar(){
    return(
        <div>
            <ul>
                <li><Link href="/works"><a>Work</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </div>
    )
}