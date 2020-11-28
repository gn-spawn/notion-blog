// components/Share.tsx
import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share'

type Props = {
  text: string
  url: string
}

export const Share = ({ text, url }: Props) => {
  return (
    <ul className="flex justify-center list-none">
      <li className="mr-8">
        <TwitterShareButton url={url} title={text}>
          <TwitterIcon size={32} />
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} />
        </FacebookShareButton>
      </li>
    </ul>
  )
}
