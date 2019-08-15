import React from 'react'

const UrlLink = ({url}) => {
  if (!url) { return ''  }
  return (<a href={url}>{`${url.substring(0,30)}...`}</a>);
}

export default UrlLink;
