import Link from 'next/link'
import { Breadcrumbs, Footer } from '../components'
import '../styles/globals.css'
import { useRouter } from 'next/navigation'
import { getBreadcrumbs } from '../lib/getBreadcrumbs'

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <div className="flex min-h-screen flex-col items-center">
          <div className="flex w-full grow flex-col items-center p-5">
            <div className="prose prose-slate flex w-full flex-col">
              <Link
                href="/"
                className="text-center no-underline"
                aria-label="Back to the homepage"
              >
                <h1 className="my-5">
                  Elliot Jordan Kemp <span className="text-slate-500">/</span>
                </h1>
              </Link>
            </div>
            <div
              className="flex w-full flex-grow flex-col items-center"
            >
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

export default Layout
