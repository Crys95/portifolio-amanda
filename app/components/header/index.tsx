'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NavItem } from './nav-item'
import { motion } from 'framer-motion'

// const NavItens = [
//   {
//     label: 'Home',
//     href: '/',
//   },
//   {
//     label: 'Projetos',
//     href: '/projects',
//   },
// ]

export const Header = () => {
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
    >
      <div className="container flex items-center justify-between">
        {/* <Link href={'/'}>
          <Image
            width={150}
            height={150}
            src="/images/logo2.png"
            alt="Logo GB dev"
          ></Image>
        </Link> */}
        {/* <nav className="flex items-center gap-2 sm:gap-10">
          {NavItens.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav> */}
      </div>
    </motion.header>
  )
}
