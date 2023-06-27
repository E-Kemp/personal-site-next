'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const Breadcrumbs = () => {
  const asPath = usePathname()

  const crumbs = useMemo(() => {
    const asPathNestedRoutes = asPath
      .split('/')
      .filter((v) => v.length > 0)

    const crumblist = asPathNestedRoutes.map((subpath, index) => {
      const href =
        index < asPathNestedRoutes.length - 1
          ? '/' + asPathNestedRoutes.slice(0, index + 1).join('/')
          : undefined
      const title = subpath
      return { href, title }
    })

    return [{ href: '/', title: 'Home' }, ...crumblist]
  }, [asPath])

  return (
    <ul className="m-0 inline-flex list-none p-0">
      {crumbs.map((crumb, index) => (
        <li>
          {crumb.href ? (
            <Link href={crumb.href} aria-label={crumb.title}>
              {crumb.title}
            </Link>
          ) : (
            <span>{crumb.title}</span>
          )}
          {index !== crumbs.length - 1 && <span className="mx-2">/</span>}
        </li>
      ))}
    </ul>
  )
}

export { Breadcrumbs }
