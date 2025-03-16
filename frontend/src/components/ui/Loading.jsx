import React from 'react'

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <span className="loading loading-ball loading-xl"></span>
      <span>Loading...</span>
    </div>
  )
}
