import React from 'react'

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-[80%] mx-auto'>{children}</div>
  )
}

export default GameLayout