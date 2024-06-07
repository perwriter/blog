import Link from 'next/link'
import React from 'react'

const Takeme = () => {
  return (
    <main className="text-center pt-16">
      <Link href="/create-post">
      
    <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
      </Link>
    </main>
  )
}

export default Takeme