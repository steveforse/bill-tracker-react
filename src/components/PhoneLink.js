import React from 'react'

const PhoneLink = ({phoneNumber}) => {
  if (!phoneNumber) { return ''  }
  return (<a href={'tel:' + phoneNumber}>{phoneNumber}</a>);
}

export default PhoneLink;
