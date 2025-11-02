import { RiDownloadLine } from '@remixicon/react'
import React from 'react'

const Button = ({label,classes, icon}) => {
  return (
    <button className={`${classes} flex items-center gap-2`}>
      {label}
    {icon && (
      <span>
      <RiDownloadLine />
      </span>
    )}
      </button>
  )
}

export default Button