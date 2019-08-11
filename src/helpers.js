import React from 'react'

export const urlLink = (url) => {
  if (!url) { return '' }
  return (<a href={url}>{url.substring(0,30) + '...'}</a>);
};

export const phoneLink = (phoneNumber) => {
  if (!phoneNumber) { return '' }
  return (<a href={'tel:' + phoneNumber}>{phoneNumber}</a>);
};
