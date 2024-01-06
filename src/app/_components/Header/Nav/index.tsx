'use client'

import React from 'react'

// Import Link from 'next'
import Link from 'next/link'

// Import Types
import { Header as HeaderType } from '../../../../payload/payload-types'

// Import Auth from Providers
import { useAuth } from '../../../_providers/Auth'

// Import Components
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'
import { Button } from '../../Button'

// Import Scss File
import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      {user && <Link href="/account">Account</Link>}
      {!user && (
        <Button
          el="link"
          href="/login"
          label="login"
          appearance="primary"
          onClick={() => (window.location.href = '/login')}
        />
      )}
      {user && <CartLink />}
    </nav>
  )
}
