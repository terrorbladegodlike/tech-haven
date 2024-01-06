'use client'

import React from 'react'

// Import Link, UsePathname & Image from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Import Types
import { Header } from '../../../../payload/payload-types'

// Import Components
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

// Import Constants
import { noHeaderFooterUrls } from '../../../constants'

// Import SCSS File
import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()

  return (
    <nav
      className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image src="/logo-black.svg" alt="logo" width={170} height={50} />
        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
