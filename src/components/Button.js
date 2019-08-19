import React from 'react'

export default props  => {
  let { url, icon, variant, ...others } = props
  const DynamicTag = url ? 'a' : 'button'
  const Icon = icon

  return (
    <DynamicTag {...others} href={url} className={`btn btn-${props.variant}`}>
      { icon ? <Icon /> : '' }
      {' '}
      {props.children}
    </DynamicTag>
  )
}
