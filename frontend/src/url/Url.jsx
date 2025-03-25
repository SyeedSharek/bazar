import React from 'react'

export default function Url() {
  return (
    <div>{process.env.REACT_APP_BASE_URL}</div>
  )
}
