import React from 'react'
import { Avatar as AntdAvatar } from 'antd'
import { AvatarProps } from 'antd/lib'
import { getNameInitials } from '../utilities/utilities/get-name-initials'

type Props = AvatarProps & {
  name?: string
}

export default function CustomAvatar({ name, style, ...rest }: Props) {
  return (
    <AntdAvatar
      alt={name}
      size='small'
      style={{
        backgroundColor: '#87d068',
        display: 'flex',
        alignItems: 'center',
        border: 'none',
        ...style,
      }}
      {...rest}
    >
      {getNameInitials(name || '')}
    </AntdAvatar>
  )
}
