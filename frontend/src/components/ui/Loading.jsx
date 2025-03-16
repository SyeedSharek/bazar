import React from 'react'
import "../../App.css"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <span className="loader"></span> {/* Fixed className */}
      <span>Loading...</span>
    </div>
  );
}
