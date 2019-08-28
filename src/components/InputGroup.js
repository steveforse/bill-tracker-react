import React from 'react'

export default props  => {
  const prepend = props.prepend ? (
    <div className="input-group-prepend">
      <span className="input-group-text">{props.prepend}</span>
    </div>
  ) : ''

  const append = props.append ? (
    <div className="input-group-append">
      <span className="input-group-text">{props.append}</span>
    </div>
  ) : ''

  return (
      <div className="input-group">
        {prepend}
        <input className="form-control" type="text" />
        {append}
      </div>
  )
}
