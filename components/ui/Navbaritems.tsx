'use client';
import Link from "next/link";
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils";


const navItems = [
    {label: 'Home', href:'/'},
    {label: 'Companions', href:'/companions'},
    {label: 'My Journey', href:'/my-journey'}
]

function Navbaritems() {
    const pathname = usePathname();
  return (
    <div className='flex items-center gap-4'>
        {navItems.map(({label, href}) => (
            <Link 
                  href={href} 
                  key={label} 
                  className={cn(pathname === href && 'text-primary font-semibold')}
            >
                {label}
            </Link>
        ))}
    </div>
  )
}

export default Navbaritems