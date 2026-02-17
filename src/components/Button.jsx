import { RiDownloadLine } from '@remixicon/react'
import React from 'react'

const Button = ({ label, classes, icon, href, download }) => {
  const content = (
    <>
      {label}
      {icon && (
        <span>
          <RiDownloadLine />
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} download={download} className={`${classes} flex items-center gap-2`}>
        {content}
      </a>
    )
  }

  return (
    <button className={`${classes} flex items-center gap-2`}>
      {content}
    </button>
  )
}

export default Button