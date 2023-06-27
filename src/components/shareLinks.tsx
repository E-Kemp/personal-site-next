'use client'

import React, { useState } from 'react'
import { MyLink } from './myLink'
import Copy from '../assets/copy.svg'
import Check from '../assets/check.svg'
import Facebook from '../assets/facebook.svg'
import Reddit from '../assets/reddit.svg'
import LinkedIn from '../assets/linkedin.svg'
import Image from 'next/image'

interface ShareLinksProps {
  title: string
  url: string
}

export const ShareLinks = ({ title, url }: ShareLinksProps) => {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  return (
    <ul className="m-0 mt-2 list-none space-y-1 p-0">
      <li>
        <CopyToClipboard url={url} />
      </li>
      <li>
        <FacebookLink url={encodedUrl} title={encodedTitle} />
      </li>
      <li>
        <LinkedInLink url={encodedUrl} title={encodedTitle} />
      </li>
      <li>
        <RedditLink url={encodedUrl} title={encodedTitle} />
      </li>
    </ul>
  )
}

interface CopyToClipboardProps {
  url: string
}
export const CopyToClipboard = ({ url }: CopyToClipboardProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
  }

  return copied ? (
    <div className="inline-flex items-center text-green-700">
      <Image src="../assets/check.svg" height={16} width={16} alt="Copied icon" className="fill-green-700" /> Copied!
    </div>
  ) : (
    <button
      className="inline-flex items-center hover:underline"
      onClick={handleCopy}
    >
      <Image src="../assets/copy.svg" height={16} width={16} alt="Copy icon" /> Copy to clipboard
    </button>
  )
}

export const FacebookLink = ({ title, url }: ShareLinksProps) => (
  <MyLink
    className="inline-flex items-center hover:underline"
    href={`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${title}`}
  >
    <Image src="../assets/facebook.svg" height={16} width={16} alt="Facebook icon" /> Facebook
  </MyLink>
)

export const LinkedInLink = ({ title, url }: ShareLinksProps) => (
  <MyLink
    className="inline-flex items-center hover:underline"
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`}
  >
    <Image src="../assets/linkedin.svg" height={16} width={16} alt="LinkedIn icon" /> LinkedIn
  </MyLink>
)

export const RedditLink = ({ title, url }: ShareLinksProps) => (
  <MyLink
    className="inline-flex items-center hover:underline"
    href={`http://www.reddit.com/submit?url=${url}&title=${title}`}
  >
    <Image src="../assets/reddit.svg" height={16} width={16} alt="Reddit icon" /> Reddit
  </MyLink>
)
